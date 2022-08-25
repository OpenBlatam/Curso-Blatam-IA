/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  target: 'serverless',
  i18n: {
    locales: ['default', 'en', 'es'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  redirects: async () => {
    return [
      {
        source: '/academic-grants',
        destination: '/applicants',
        permanent: true
      },
      {
        source: '/academic-grants/apply',
        destination: '/applicants',
        permanent: true
      },
      {
        source: '/academic-grants/thank-you',
        destination: '/applicants',
        permanent: true
      }
    ];
  }
};
