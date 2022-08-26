import { UseToastOptions } from '@chakra-ui/react';
import { NavLink, SidebarLink, TabsMap } from './types';

// metadata
export const HEAD_TITLE = 'Ethereum Foundation ESP';

// home
export const HOME_URL = '/';

// about
export const ABOUT_URL = '/about';
export const WHO_WE_SUPPORT_URL = '/about/who-we-support';
export const HOW_WE_SUPPORT_URL = '/about/how-we-support';

// applicants
export const APPLICANTS_URL = '/applicants';
export const OFFICE_HOURS_URL = '/applicants/office-hours';
export const SMALL_GRANTS_URL = '/applicants/small-grants';
export const PROJECT_GRANTS_URL = '/applicants/project-grants';
export const ACADEMIC_GRANTS_URL = '/academic-grants';
export const DEVCON_GRANTS_URL = '/devcon-grants';
export const SIDEBAR_APPLICANTS_LINKS: SidebarLink[] = [
  { text: 'Misión y Objetivo', href: `${APPLICANTS_URL}/#mission-and-scope` },
  { text: 'Cuando', href: `${APPLICANTS_URL}/#how-we-support` },
  { text: 'Temario', href: `${APPLICANTS_URL}/#application-types` }
];
export const SIDEBAR_OFFICE_HOURS_LINKS: SidebarLink[] = [
  { text: 'Resumen', href: `${OFFICE_HOURS_URL}/#description` },
  { text: 'Proceso', href: `${OFFICE_HOURS_URL}/#process` },
  { text: 'Eligibility', href: `${OFFICE_HOURS_URL}/#eligibility` },
  { text: 'What we offer', href: `${OFFICE_HOURS_URL}/#what-we-offer` },
  { text: "What we DON'T offer", href: `${OFFICE_HOURS_URL}/#what-we-dont-offer` },
  { text: 'Before submitting', href: `${OFFICE_HOURS_URL}/#before-submitting` },
  { text: 'Preguntas frecuentes', href: `${OFFICE_HOURS_URL}/#faq` },
  { text: 'Aplica', href: `${OFFICE_HOURS_URL}/#apply` }
];
export const SIDEBAR_PROJECT_GRANTS_LINKS: SidebarLink[] = [
  { text: 'Resumen', href: `${PROJECT_GRANTS_URL}/#description` },
  { text: 'Proceso', href: `${PROJECT_GRANTS_URL}/#process` },
  { text: 'Requirements', href: `${PROJECT_GRANTS_URL}/#requirements` },
  { text: 'Eligibility', href: `${PROJECT_GRANTS_URL}/#eligibility` },
  { text: 'What is NOT eligible', href: `${PROJECT_GRANTS_URL}/#what-is-not-eligible` },
  {
    text: 'Tips for submitting a great application',
    href: `${PROJECT_GRANTS_URL}/#tips-application`
  },
  { text: 'Preguntas frecuentes', href: `${PROJECT_GRANTS_URL}/#faq` },
  { text: 'Aplica', href: `${PROJECT_GRANTS_URL}/#apply` }
];
export const SIDEBAR_SMALL_GRANTS_LINKS: SidebarLink[] = [
  { text: 'Resumen', href: `${SMALL_GRANTS_URL}/#description` },
  { text: 'Proceso', href: `${SMALL_GRANTS_URL}/#process` },
  { text: 'Requirements', href: `${SMALL_GRANTS_URL}/#requirements` },
  { text: 'Eligibility', href: `${SMALL_GRANTS_URL}/#eligibility` },
  { text: 'What is NOT eligible', href: `${SMALL_GRANTS_URL}/#what-is-not-eligible` },
  {
    text: 'Tips for submitting a great application',
    href: `${SMALL_GRANTS_URL}/#tips-application`
  },
  { text: 'Preguntas frecuentes', href: `${SMALL_GRANTS_URL}/#faq` },
  { text: 'Aplica', href: `${SMALL_GRANTS_URL}/#apply` }
];
export const SIDEBAR_ACADEMIC_GRANTS_LINKS: SidebarLink[] = [
  { text: 'Summary', href: `${ACADEMIC_GRANTS_URL}/#description` },
  { text: 'Submit proposal', href: `${ACADEMIC_GRANTS_URL}/#submit-proposal` },
  { text: 'Deadline', href: `${ACADEMIC_GRANTS_URL}/#deadline` },
  { text: 'Requirements', href: `${ACADEMIC_GRANTS_URL}/#requirements` },
  { text: 'Selection criteria', href: `${ACADEMIC_GRANTS_URL}/#selection-criteria` },
  { text: 'Wishlist', href: `${ACADEMIC_GRANTS_URL}/#wishlist` },
  { text: 'Next steps and support', href: `${ACADEMIC_GRANTS_URL}/#next-steps-and-support` },
  { text: 'FAQ', href: `${ACADEMIC_GRANTS_URL}/#faq` },
  { text: 'Apply', href: `${ACADEMIC_GRANTS_URL}/#apply` }
];
export const SIDEBAR_DEVCON_GRANTS_LINKS: SidebarLink[] = [
  { text: 'Resumen', href: `${DEVCON_GRANTS_URL}/#description` },
  { text: 'Who', href: `${DEVCON_GRANTS_URL}/#who` },
  { text: 'Eligibility', href: `${DEVCON_GRANTS_URL}/#eligibility` },
  { text: 'How to apply', href: `${DEVCON_GRANTS_URL}/#how-to-apply` },
  { text: 'Selection criteria', href: `${DEVCON_GRANTS_URL}/#selection-criteria` },
  { text: 'Next steps and support', href: `${DEVCON_GRANTS_URL}/#next-steps-and-support` },
  { text: 'FAQ', href: `${DEVCON_GRANTS_URL}/#faq` },
  { text: 'Apply', href: `${DEVCON_GRANTS_URL}/#apply` }
];

// apply forms
export const PROJECT_GRANTS_APPLY_URL = '/applicants/project-grants/apply';
export const OFFICE_HOURS_APPLY_URL = '/applicants/office-hours/apply';
export const SMALL_GRANTS_APPLY_URL = '/applicants/small-grants/apply';
export const ACADEMIC_GRANTS_APPLY_URL = '/academic-grants/apply';
export const DEVCON_GRANTS_APPLY_URL = '/devcon-grants/apply';

// grantee finance form
export const GRANTEE_FINANCE_URL = '/applicants/grantee-finance';

// thank you pages
export const PROJECT_GRANTS_THANK_YOU_PAGE_URL = '/applicants/project-grants/thank-you';
export const OFFICE_HOURS_THANK_YOU_PAGE_URL = '/applicants/office-hours/thank-you';
export const SMALL_GRANTS_THANK_YOU_PAGE_URL = '/applicants/small-grants/thank-you';
export const GRANTEE_FINANCE_THANK_YOU_PAGE_URL = '/applicants/grantee-finance/thank-you';
export const ACADEMIC_GRANTS_THANK_YOU_PAGE_URL = '/academic-grants/thank-you';
export const DEVCON_GRANTS_THANK_YOU_PAGE_URL = '/devcon-grants/thank-you';

// ethereum ecosystem
export const ETHEREUM_ORG_URL = 'https://blatam.org/';
export const ETHEREUM_COOKIE_POLICY_URL = 'https://ethereum.org/en/cookie-policy/';
export const ETHEREUM_PRIVACY_POLICY_URL = 'https://ethereum.org/en/privacy-policy/';
export const ETHEREUM_TERMS_OF_USE_URL = 'https://ethereum.org/en/terms-of-use/';
export const ETHEREUM_GITHUB_URL = 'https://github.com/blockchain-mexico';
export const DISCORD_GITHUB_URL = 'https://discord.gg/H935FAVWrE';
export const YOUTUBE_GITHUB_URL = 'https://www.youtube.com/channel/UCud6nL-pEA-WfizdRKDUnug';
export const TELEGRAM_GITHUB_URL = 'https://t.me/+NMA6zQgp-IcwOWYx';
export const ETHEREUM_JOBS_URL = 'https://ethereum.org/en/community/#ethereum-jobs';
export const ETHEREUM_COMMUNITY_URL = 'https://ethereum.org/en/community/';
export const NFT_COMMUNITY_URL = 'https://twitter.com/beeple';
export const METAVERSE_COMMUNITY_URL = 'https://www.youtube.com/watch?v=Uvufun6xer8&t=367s';

export const ETHEREUM_BROAD_ECOSYSTEM_URL =
  'https://ethereum.org/en/community/grants/#broad-ethereum-ecosystem';
export const ETHEREUM_GRANTS_URL = 'https://ethereum.org/en/community/grants/';

// EF
export const EF_PHILOSOPHY_URL = 'https://ethereum.foundation/philosophy/';
export const EF_JOBS_URL = 'https://ethereum.bamboohr.com/jobs/';

// ESP external links
export const ESP_BLOG_URL = 'https://blatam.org';
export const ESP_TWITTER_URL = 'https://twitter.com/blatam_';
export const ESP_FACE_URL = 'https://www.facebook.com/blatamoficial';
export const ESP_INSTAGRAM_URL = 'https://www.instagram.com/blatam_/';
export const ESP_EMAIL_ADDRESS = 'hola@blockahins.com';
export const ACADEMIC_GRANTS_EMAIL_ADDRESS = 'academic-grants@ethereum.org';
export const DEVCON_GRANTS_EMAIL_ADDRESS = 'grants@devcon.org';

// applicants tabs
export const APPLICANTS_TABS = ['Resumen', 'Bitcoin', 'Ethereum', 'NFTs y Metaversos'];
export const APPLICANTS_TABS_MAP: TabsMap = {
  [APPLICANTS_URL]: 0,
  [OFFICE_HOURS_URL]: 1,
  [SMALL_GRANTS_URL]: 2,
  [PROJECT_GRANTS_URL]: 3,
  [OFFICE_HOURS_APPLY_URL]: 1,
  [OFFICE_HOURS_THANK_YOU_PAGE_URL]: 1,
  [SMALL_GRANTS_APPLY_URL]: 2,
  [SMALL_GRANTS_THANK_YOU_PAGE_URL]: 2,
  [PROJECT_GRANTS_APPLY_URL]: 3,
  [PROJECT_GRANTS_THANK_YOU_PAGE_URL]: 3
};

// about tabs
export const ABOUT_TABS = ['Porque elegir blatam', 'Who We Support', 'Conoce a tus expertos blatam'];
export const ABOUT_TABS_MAP: TabsMap = {
  [ABOUT_URL]: 0,
  [WHO_WE_SUPPORT_URL]: 1,
  [HOW_WE_SUPPORT_URL]: 2
};

// nav
export const NAV_LINKS: NavLink[] = [
  { href: HOME_URL, text: 'Inicio' },
  { href: APPLICANTS_URL, text: 'Cursos' },
  { href: ABOUT_URL, text: 'Becas' },
  { href: ESP_BLOG_URL, text: 'Exchange' },
  { href: ESP_BLOG_URL, text: 'Academy' }
];

// external links
export const ETHRESEARCH_URL = 'https://ethresear.ch/';
export const DEVCON_URL = 'https://devcon.org/';
export const HCAPTCHA_VERIFY_URL = 'https://hcaptcha.com/siteverify';

// api
export const DOWNLOAD_APPLICATION_URL = '/projectGrantsApplication.docx';

// grants list
export const CURRENT_GRANTS_QUARTERS = ['3', '4'];

// proposal upload file size limit (4mb)
export const MAX_PROPOSAL_FILE_SIZE = 4194304;

// toast options
export const TOAST_OPTIONS: UseToastOptions = {
  position: 'top-right',
  duration: 5000,
  isClosable: true,
  containerStyle: {
    fontFamily: 'fonts.heading'
  }
};
