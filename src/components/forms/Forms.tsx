import { FC, Suspense } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const FormWrapper: FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box
    as='section'
    id='grants-form'
    bg='white'
    position='relative'
    py={{ base: 12, lg: 16 }}
    px={{ base: 5, lg: 12 }}
    mt={{ base: 8, lg: 0 }}
  >
    <Suspense fallback={<div>Loading...</div>}>
      {children}
    </Suspense>
  </Box>
);

// Dynamic imports with named exports
const ProjectGrantsForm = dynamic(
  () => import('./ProjectGrantsForm').then((mod) => mod.ProjectGrantsForm),
  { ssr: false, loading: () => <div>Loading Project Grants Form...</div> }
);

const OfficeHoursForm = dynamic(
  () => import('./OfficeHoursForm').then((mod) => mod.OfficeHoursForm),
  { ssr: false, loading: () => <div>Loading Office Hours Form...</div> }
);

const SmallGrantsForm = dynamic(
  () => import('./SmallGrantsForm').then((mod) => mod.SmallGrantsForm),
  { ssr: false, loading: () => <div>Loading Small Grants Form...</div> }
);

const GranteeFinanceForm = dynamic(
  () => import('./GranteeFinanceForm').then((mod) => mod.GranteeFinanceForm),
  { ssr: false, loading: () => <div>Loading Grantee Finance Form...</div> }
);

const AcademicGrantsForm = dynamic(
  () => import('./AcademicGrantsForm').then((mod) => mod.AcademicGrantsForm),
  { ssr: false, loading: () => <div>Loading Academic Grants Form...</div> }
);

const DevconGrantsForm = dynamic(
  () => import('./DevconGrantsForm').then((mod) => mod.DevconGrantsForm),
  { ssr: false, loading: () => <div>Loading Devcon Grants Form...</div> }
);

const Forms: FC = () => {
  const router = useRouter();
  const { pathname } = router;

  const renderForm = () => {
    switch (pathname) {
      case '/applicants/project-grants':
        return <ProjectGrantsForm />;
      case '/applicants/office-hours':
        return <OfficeHoursForm />;
      case '/applicants/small-grants':
        return <SmallGrantsForm />;
      case '/applicants/grantee-finance':
        return <GranteeFinanceForm />;
      case '/applicants/academic-grants':
        return <AcademicGrantsForm />;
      case '/applicants/devcon-grants':
        return <DevconGrantsForm />;
      default:
        return null;
    }
  };

  return <FormWrapper>{renderForm()}</FormWrapper>;
};

export default Forms;
