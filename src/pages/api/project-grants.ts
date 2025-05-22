import fs from 'fs';
import jsforce from 'jsforce';
import { NextApiRequest, NextApiResponse } from 'next';
import type { File } from 'formidable';

import { multipartyParse, verifyCaptcha } from '../../middlewares';
import { MAX_PROPOSAL_FILE_SIZE } from '../../constants';

type Fields = {
  [key: string]: string | string[] | undefined;
};

type RequestFields = {
  [key: string]: string | string[];
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { fields = {}, files = {} } = req;

  const fieldsSanitized = Object.keys(fields).reduce<Fields>((prev, key) => {
    const value = (fields as RequestFields)[key];
    if (typeof value === 'string') {
      return {
        ...prev,
        [key]: value.trim()
      };
    }
    return {
      ...prev,
      [key]: value
    };
  }, {});

  const { SF_PROD_LOGIN_URL, SF_PROD_USERNAME, SF_PROD_PASSWORD, SF_PROD_SECURITY_TOKEN } =
    process.env;

  const conn = new jsforce.Connection({
    // you can change loginUrl to connect to sandbox or prerelease env.
    loginUrl: SF_PROD_LOGIN_URL
  });

  const application = {
    FirstName: fieldsSanitized.firstName as string,
    LastName: fieldsSanitized.lastName as string,
    Email: fieldsSanitized.email as string,
    Company: fieldsSanitized.company as string,
    Team_Profile__c: fieldsSanitized.teamProfile as string,
    Twitter__c: fieldsSanitized.twitter as string,
    Website: fieldsSanitized.website as string,
    Project_Name__c: fieldsSanitized.projectName as string,
    Github_Link__c: fieldsSanitized.projectRepo as string,
    Category__c: fieldsSanitized.projectCategory as string,
    Project_Description__c: fieldsSanitized.projectDescription as string,
    Progress__c: fieldsSanitized.progress as string,
    Problem_Being_Solved__c: fieldsSanitized.problemBeingSolved as string,
    Proposed_Timeline__c: fieldsSanitized.proposedTimeline as string,
    Requested_Amount__c: fieldsSanitized.requestedAmount as string,
    Impact__c: fieldsSanitized.whyIsProjectImportant as string,
    How_is_it_different__c: fieldsSanitized.howDoesYourProjectDiffer as string,
    Is_it_a_Public_Good__c: fieldsSanitized.isYourProjectPublicGood as string,
    Is_it_Open_Source__c: fieldsSanitized.isOpenSource as string,
    Why_Ethereum__c: fieldsSanitized.whyEthereum as string,
    Challenges__c: fieldsSanitized.challenges as string,
    Sustainability_Plan__c: fieldsSanitized.sustainabilityPlan as string,
    Other_Projects__c: fieldsSanitized.otherProjects as string,
    Repeat_Applicant__c: fieldsSanitized.repeatApplicant as string,
    Other_Funding__c: fieldsSanitized.otherFunding as string,
    Additional_Information__c: fieldsSanitized.additionalInfo as string,
    npsp__CompanyCity__c: fieldsSanitized.city as string,
    npsp__CompanyCountry__c: fieldsSanitized.country as string,
    Time_Zone__c: fieldsSanitized.timezone as string,
    Referral_Source__c: fieldsSanitized.howDidYouHearAboutESP as string,
    Referral_Source_if_Other__c: fieldsSanitized.referralSourceIfOther as string,
    Referrals__c: fieldsSanitized.referrals as string,
    RecordTypeId: process.env.SF_RECORD_TYPE_PROJECT_GRANTS
  };

  conn.login(SF_PROD_USERNAME!, `${SF_PROD_PASSWORD}${SF_PROD_SECURITY_TOKEN}`, err => {
    if (err) {
      return console.error(err);
    }

    let createdLeadID: string;

    // Single record creation
    conn.sobject('Lead').create(application, (err, ret) => {
      if (err || !ret.success) {
        console.error(err);
        res.status(400).json({ status: 'fail' });
      } else {
        console.log(`Project Grants Lead with ID: ${ret.id} has been created!`);

        createdLeadID = ret.id;
        console.log({ createdLeadID });

        const uploadProposal = Array.isArray(files.uploadProposal) 
          ? files.uploadProposal[0] 
          : files.uploadProposal;
        console.log({ uploadProposal });

        if (!uploadProposal) {
          res.status(200).json({ status: 'ok' });
          return;
        }

        let uploadProposalContent;
        try {
          // turn file into base64 encoding
          uploadProposalContent = fs.readFileSync(uploadProposal.filepath, {
            encoding: 'base64'
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({ status: 'fail' });
          return;
        }

        // Document upload
        conn.sobject('ContentVersion').create(
          {
            Title: `[PROPOSAL] ${application.Project_Name__c} - ${createdLeadID}`,
            PathOnClient: uploadProposal.originalFilename,
            VersionData: uploadProposalContent // base64 encoded file content
          },
          async (err, uploadedFile) => {
            if (err || !uploadedFile.success) {
              console.error(err);

              res.status(400).json({ status: 'fail' });
            } else {
              console.log({ uploadedFile });
              console.log(`Document has been uploaded successfully!`);

              const contentDocument = await conn
                .sobject<{
                  Id: string;
                  ContentDocumentId: string;
                }>('ContentVersion')
                .retrieve(uploadedFile.id);

              await conn.sobject('ContentDocumentLink').create({
                ContentDocumentId: contentDocument.ContentDocumentId,
                LinkedEntityId: createdLeadID,
                ShareType: 'V'
              });

              res.status(200).json({ status: 'ok' });
            }
          }
        );
      }
    });
  });
}

export const config = {
  api: {
    bodyParser: false
  }
};

export default multipartyParse(verifyCaptcha(handler), {
  maxFileSize: MAX_PROPOSAL_FILE_SIZE
});
