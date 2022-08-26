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
  ETHRESEARCH_URL, METAVERSE_COMMUNITY_URL, NFT_COMMUNITY_URL,
  PROJECT_GRANTS_APPLY_URL,
  SIDEBAR_PROJECT_GRANTS_LINKS
} from '../../../constants';
import * as https from "https";

const ProjectGrants: NextPage = () => {
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
        title='Project Grants'
        description='Learn more about applying for Project Grants from the Ecosystem Support Program: criteria, how to apply and tips for submitting a great application.'
      />

      <Box bg='white' position='relative' py={{ md: 12 }}>
        <Flex>
          <ApplicantsSidebar
            sidebarLinks={SIDEBAR_PROJECT_GRANTS_LINKS}
            sectionsInView={[inView, inView2, inView3, inView4, inView5, inView6, inView7, inView8]}
          />

          <Box w={{ lg: '70%' }} px={{ md: 20 }} pr={{ lg: 12 }}>
            <Stack mb={2}>
              <section id='description' ref={ref}>
                <PageSubheading mb={8}>Nfts y Metaversos</PageSubheading>

                <PageText mb={6}>
                  El mercado de tokens no fungibles <strong> (NFT) </strong> se está multiplicando en
                  años recientes. El concepto de NFT proviene originalmente de un token estándar de Ethereum, con el objetivo de distinguir cada token con distinguibles
                  señales. Este tipo de token se puede vincular con propiedades virtuales/digitales
                  como sus identificaciones únicas.
                  <strong>Metaverso</strong> como paradigma en evolución de la próxima generación de Internet, tiene como objetivo construir un espacio virtual compartido totalmente inmersivo, hiperespaciotemporal y autosuficiente para que los humanos
                  jugar, trabajar y socializar. Impulsado por los avances recientes en los mercados emergentes
                  tecnologías como la realidad extendida, la inteligencia artificial y
                  blockchain, el metaverso está pasando de la ciencia ficción a una realidad próxima.
                <strong> Características:</strong>
                </PageText>

                <Stack>
                  <List>

                    <ListItem>
                      1) Inmersión: La inmersión significa que el
                      espacio virtual generado por computadora es suficientemente realista para permitir
                      los usuarios se sientan psicológica y emocionalmente inmersos
                    </ListItem>
                    <ListItem>2) Hiperespaciotemporalidad: El mundo real está restringido por la
                      finitud del espacio e irreversibilidad del tiempo.</ListItem>
                    <ListItem>
                      3) Sostenibilidad: La sostenibilidad indica que el metaverso mantiene un ciclo económico cerrado y un valor constante
                      sistema con un alto nivel de independencia.
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
                  <ProcessStep title='Apply'>
                    You&apos;ll need to fill out the form on the next page as well as a long-form
                    application where you&apos;ll go into depth about your goals, motivations, plans
                    and intended impact. Make sure you have read and understood our scope and
                    criteria, and see below for advice on crafting a great application. After
                    submitting, you&apos;ll receive a confirmation email within two business days.
                  </ProcessStep>

                  <ProcessStep title='Evaluate and refine'>
                    If we determine that a project is in scope for ESP support, we&apos;ll begin a
                    deeper evaluation of the project&apos;s technical approach, potential impact,
                    risks, and other factors. Our next steps might include gathering more
                    information, getting input from advisors, and working with you to refine or
                    rescope the project proposal.
                  </ProcessStep>

                  <ProcessStep title='Decision'>
                    Once the proposal is finalized, we&apos;ll make an allocation decision based on
                    our assessment as well as input received from advisors. Decision time for a
                    project grant application varies depending on scope and complexity, and may take
                    a few months from when the application was first submitted.
                  </ProcessStep>

                  <ProcessStep title='Activation' isLastStep>
                    We sign a grant agreement, complete KYC and send funds in fiat, ETH or DAI - and
                    you get to work! You&apos;ll have a point of contact at the EF who will check in
                    with you regularly as you progress with your work.
                  </ProcessStep>
                </Stack>
              </section>

              <section id='requirements' ref={ref3}>
                <PageSection mb={6}>Requirements</PageSection>

                <PageText mb={6}>
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

                <PageText mb={6}>
                  We are happy to hear from all kinds of contributors who are working within our
                  scope:
                </PageText>

                <List>
                  <ListItem>Individuals, teams or organizations.</ListItem>
                  <ListItem>
                    Established projects, newcomers to Ethereum, past grantees or applicants.
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
                    Financial products (trading, investment products, lending, betting etc).
                  </ListItem>
                  <ListItem>Projects with a planned token launch or public funding round.</ListItem>
                  <ListItem>
                    Art projects or charities that don&apos;t fit within our scope.
                  </ListItem>
                </List>
              </section>

              <section id='tips-application' ref={ref6}>
                <PageSection mb={6}>Tips for submitting a great application</PageSection>

                <PageText mb={6}>
                  The information you submit here is what we&apos;ll use to make a decision about
                  whether to proceed with your grant application, so take the time to understand
                  what we&apos;re looking for and answer the form questions thoughtfully. When
                  evaluating your application, we look for much more than just an explanation of the
                  proposed work. In order to determine the potential impact on the ecosystem, we
                  need a deeper understanding of both the “why” and the “how” of the project. Some
                  things to keep in mind:
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
                  <ListItem>
                    <strong>Be flexible:</strong> project grant proposals can undergo significant
                    revision in the evaluation process. We often take a modular approach, breaking
                    the project up into components or phases and considering each one individually.
                    The goal of this process is not to nickel and dime you - it&apos;s to delineate
                    the idea more clearly, identifying places we can mitigate risks and test
                    assumptions, so that we can maximize the impact of our support. Even as
                    you&apos;re crafting your application, we ask you to start thinking about
                    different potential paths to achieving your goals.
                  </ListItem>
                </List>
              </section>

              <section id='faq' ref={ref7}>
                <PageSection mb={6}>Preguntas frecuentes </PageSection>

                <Accordion allowToggle>
                  <FAQItem question='¿Por que los NFTs tienen valor?'>
                    <PageText>
                      Pues es sencillo, porque creen que su valor va aumentar con el tiempo, y luego podrán venderlo por más dinero.
                    </PageText>
                  </FAQItem>

                  <FAQItem question='¿Cuál es el NFT mas caro que se ha vendido?'>
                    <PageText>
                      El NFT más caro jamás vendido del artista
                      <Link
                          fontWeight={700}
                          color='brand.orange.100'
                          href={NFT_COMMUNITY_URL}
                          isExternal
                      >
                           Beeple,
                      </Link>{' '}
                    que se convertía a su vez en la tercera obra más cara jamás vendida en una subasta por un artista vivo. La obra es un collage compuesto por 5000 piezas de trabajo que el artista ha ido haciendo cada día desde 2007.
                      Se vendio en  $69.3 millones de dólares.
                    </PageText>
                  </FAQItem>
                  <FAQItem question='¿Cuál es el futuro de metaverso?'>
                    <PageText mb={6}>

                      Tras la pandemia, el metaverso es una nueva revolución digital que está adquiriendo cada vez mayor relevancia a la hora de conectar a las personas en un nuevo mundo virtual en el que confluyen distintas tecnologías, como la Realidad Aumentada y la Virtual, para potenciar su valor.
                      <Link
                          fontWeight={700}
                          color='brand.orange.100'
                          href={METAVERSE_COMMUNITY_URL}
                          isExternal
                      >
                        Meta
                        (Facebook)
                      </Link>{' '}
                    pretender ser el lider en esta industria.
                    </PageText>

                    <PageText>

                    </PageText>
                  </FAQItem>





                </Accordion>
              </section>

              <section id='apply' ref={ref8}>
                <Stack mt={6}>
                  //ReadyToApply link={`${PROJECT_GRANTS_APPLY_URL}`} />
                </Stack>
              </section>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default ProjectGrants;
