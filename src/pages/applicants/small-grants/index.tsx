import { Accordion, Box, Flex, Link, ListItem, Stack } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import type { NextPage } from 'next';

import {
  ApplicantsSidebar,
  ApplicationAttentionMsg,
  FAQItem,
  List,
  PageMetadata,
  PageSection,
  PageSubheading,
  PageText,
  ProcessStep,
  ReadyToApply
} from '../../../components/UI';

import {
  ETHEREUM_COMMUNITY_URL,
  ETHEREUM_GRANTS_URL,
  ETHRESEARCH_URL,
  SIDEBAR_SMALL_GRANTS_LINKS,
  SMALL_GRANTS_APPLY_URL
} from '../../../constants';

const SmallGrants: NextPage = () => {
  // `threshold` option allows us to control the % of visibility required before triggering the Intersection Observer
  // https://react-intersection-observer.vercel.app/?path=/story/introduction--page#options
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [ref2, inView2] = useInView({ threshold: 0.5, initialInView: false });
  const [ref3, inView3] = useInView({ threshold: 0.5, initialInView: false });
  const [ref4, inView4] = useInView({ threshold: 0.5, initialInView: false });
  const [ref5, inView5] = useInView({ threshold: 0.5, initialInView: false });
  const [ref6, inView6] = useInView({ threshold: 0.5, initialInView: false });
  const [ref7, inView7] = useInView({ threshold: 0.5, initialInView: false });
  const [ref8, inView8] = useInView({ threshold: 0, initialInView: false });

  return (
    <>
      <PageMetadata
        title='Small Grants'
        description='Learn more about applying for Small Grants from the Ecosystem Support Program: criteria, how to apply and tips for submitting a great application.'
      />

      <Box bg='white' position='relative' py={{ md: 12 }}>
        <Flex>
          <ApplicantsSidebar
            sidebarLinks={SIDEBAR_SMALL_GRANTS_LINKS}
            sectionsInView={[inView, inView2, inView3, inView4, inView5, inView6, inView7, inView8]}
          />

          <Box w={{ lg: '70%' }} px={{ md: 20 }} pr={{ lg: 12 }}>
            <Stack mb={-4}>
              <section id='description' ref={ref}>
                <PageSubheading mb={8}>Ethereum</PageSubheading>

                <PageText mb={6}>
                  Ethereum es la tecnología administrada por la comunidad que impulsa el éter de criptomonedas (ETH) y miles de aplicaciones descentralizadas.
                </PageText>

                <PageText>
                   <strong>Características:</strong>

                </PageText>

                <Stack mb={6}>
                  <List>
                    <ListItem>
                      La minería ha sido desde el principio muy descentralizada. Además, los protocolos de consenso (basados en el algoritmo Ethash) son muy exigentes y se dirigen hacia la minería por medio de tarjetas gráficas (GPU).
                    </ListItem>
                    <ListItem>
                      La emisión anual es limitada. El máximo establecido son 18 millones de criptomonedas. Sin embargo, la emisión total de Ethers es ilimitada.

                    </ListItem>
                    <ListItem>                      La creación novedosa de una forma de medir el trabajo realizado, GAS, es uno de sus alicientes. Además, este indicador permite saber el coste de las operaciones realizadas. También sirve para calcular el tamaño de sus bloques, que se miden por una cantidad concreta de GAS.
                    </ListItem>
                    <ListItem>
                      La gestión de pagos es más rápida que en Bitcoins. Las razones son dos. La primera, la producción de bloques en cortos períodos de tiempo. La segunda es la escalabilidad de Ethereum.

                    </ListItem>
                  </List>
                </Stack>
              </section>
            </Stack>

            <Stack mb={20}>
              <section id='attention'>
              </section>
            </Stack>

            <Stack spacing={10}>
              <section id='process' ref={ref2}>
                <PageSection mb={6}>Process</PageSection>

                <Stack spacing={3}>
                  <ProcessStep title='Application'>
                    Just fill out the online form! Make sure you have read and understood our scope
                    and criteria below. After submitting, you&apos;ll receive a confirmation email
                    within two business days.
                  </ProcessStep>

                  <ProcessStep title='Evaluation'>
                    Every submission is read and considered by the ESP team. You most likely
                    won&apos;t hear from us during the evaluation process for a small grant
                    application, but you&apos;re always welcome to get in touch - just reply to the
                    confirmation email if you have questions or think of anything else we should
                    know.
                  </ProcessStep>

                  <ProcessStep title='Decision'>
                    Unless we reach out to clarify anything on your application, you can expect to
                    hear back from us with a final decision around two weeks after you submit it.
                  </ProcessStep>

                  <ProcessStep title='Activation'>
                    We sign a grant agreement, complete KYC and send funds in fiat, ETH or DAI - and
                    you get to work!
                  </ProcessStep>

                  <ProcessStep title='Completion' isLastStep>
                    Once you&apos;ve completed work on your grant, you&apos;ll share the results in
                    a report, blog post or video.
                  </ProcessStep>
                </Stack>
              </section>

              <section id='requirements' ref={ref3}>
                <PageSection mb={6}>Requirements</PageSection>

                <PageText>
                  We&apos;re flexible in many ways, but we do have some hard rules for the projects
                  we fund:
                </PageText>

                <List>
                  <ListItem>
                    Work funded by ESP grants must benefit Ethereum in a way that aligns with
                    ESP&apos;s mission and scope.
                  </ListItem>
                  <ListItem>
                    Any output must be open source or otherwise freely available; for-profit
                    companies are welcome to apply but the specific grant funded work must be
                    non-commercial.
                  </ListItem>
                </List>
              </section>

              <section id='eligibility' ref={ref4}>
                <PageSection mb={6}>Eligibility</PageSection>

                <PageText>
                  We are happy to hear from all kinds of contributors who are working within our
                  scope:
                </PageText>

                <List>
                  <ListItem>Individuals, teams or organizations.</ListItem>
                  <ListItem>
                    Newcomers to Ethereum, established projects, past grantees or applicants.
                  </ListItem>
                  <ListItem>
                    Any area of expertise - we work with developers, researchers, academics,
                    designers, educators, communicators, community organizers, and more.
                  </ListItem>
                  <ListItem>
                    Projects at any point in the development process: just an idea, early stages,
                    proof of concept, or with significant progress already made. However, we do not
                    fund past work.
                  </ListItem>
                  <ListItem>Builders of any age, origin, identity or background.</ListItem>
                </List>
              </section>

              <section id='what-is-not-eligible' ref={ref5}>
                <PageSection mb={6}>What is NOT eligible</PageSection>

                <List>
                  <ListItem>
                    Anything that is not legal within the jurisdiction where the work is taking
                    place.
                  </ListItem>
                  <ListItem>
                    Financial products (trading, investment products, lending, betting, etc).
                  </ListItem>
                  <ListItem>Projects with a planned token launch or public funding round.</ListItem>
                  <ListItem>
                    Art projects or charities that don&apos;t fit within our scope.
                  </ListItem>
                  <ListItem>Token or investment focused events.</ListItem>
                </List>
              </section>

              <section id='tips-application' ref={ref6}>
                <PageSection mb={6}>Tips for submitting a great application</PageSection>

                <PageText mb={6}>
                  The information you submit here is what we&apos;ll use to make a final decision
                  about your grant application, so take the time to understand what we&apos;re
                  looking for and answer the form questions thoughtfully.
                </PageText>

                <PageText mb={6}>
                  When evaluating your application, we look for much more than just an explanation
                  of the proposed work. In order to determine the potential impact on the ecosystem,
                  we need a deeper understanding of both the “why” and the “how” of the project.
                  Some things to keep in mind:
                </PageText>

                <List>
                  <ListItem>
                    <strong>Be specific:</strong> we want you to share your grand vision - but you
                    also need to tell us, concretely, how you plan to achieve your goals.
                  </ListItem>
                  <ListItem>
                    <strong>Be thorough:</strong> the more information you can provide in a grant
                    application, the better. We encourage you to provide any supporting documents
                    such as whitepapers, research papers, or slides from presentations you&apos;ve
                    given about your project.
                  </ListItem>
                  <ListItem>
                    <strong>Show your work:</strong> we expect you to have made a meaningful effort
                    to validate and refine your approach and researched what other solutions are
                    being developed, and to be able to articulate how yours is different.
                  </ListItem>
                  <ListItem>
                    <strong>Dig deeper:</strong> we want to know what problem you&apos;re trying to
                    solve, but also why you think it&apos;s important to solve that specific
                    problem, how solving it will benefit Ethereum and how it fits within our
                    mission.
                  </ListItem>
                  <ListItem>
                    <strong>Think broader:</strong> how does your project connect to, complement and
                    enable the work of others? How can you make sure your work stays relevant and
                    has a sustained impact?
                  </ListItem>
                  <ListItem>
                    <strong>Identify output</strong> (what is produced) as well as outcome (what is
                    accomplished): what will be the tangible result of your work - a research paper,
                    a code repo, a community event, a working prototype? Who will use it, and how
                    will they access it?
                  </ListItem>
                  <ListItem>
                    <strong>Be realistic:</strong> we&apos;ll consider the funding amount you
                    request in relation to the proposed scope of work, so go with a number that
                    reflects what you think you&apos;ll need for the specific work in your proposal.
                    Remember that being awarded a grant now doesn&apos;t mean you can&apos;t apply
                    for additional funding later!
                  </ListItem>
                </List>
              </section>

              <section id='faq' ref={ref7}>
                <PageSection mb={6}>Preguntas frecuentes</PageSection>

                <Accordion allowToggle>
                  <FAQItem question='¿En que es diferente a Bitcoin?'>
                    <PageText>
                      Mientras que Bitcoin se acepta más ampliamente y se considera una moneda digital internacional, Ether sólo se acepta para las transacciones de aplicaciones digitales (Dapps) que se ejecutan en la red Ethereum.
                    </PageText>
                  </FAQItem>

                  <FAQItem question='¿Quién lo creo?'>
                    <PageText>
                      La plataforma Ethereum fue creada en 2015 por el programador Vitalik Buterin, con la perspectiva de crear un instrumento para aplicaciones descentralizadas y colaborativas.
                    </PageText>
                  </FAQItem>

                </Accordion>
              </section>

              <section id='apply' ref={ref8}>
                <Stack mt={6}>
                  //ReadyToApply link={`${SMALL_GRANTS_APPLY_URL}`} />
                </Stack>
              </section>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default SmallGrants;
