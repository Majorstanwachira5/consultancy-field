import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { validateSession } from '../lib/auth';

const withAdminAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const { user } = props;

    useEffect(() => {
      if (!user || user.role.name !== 'admin') {
        router.replace('/admin/login');
      }
    }, [user, router]);

    if (!user || user.role.name !== 'admin') {
      return null; // or a loading spinner
    }

    return <WrappedComponent {...props} />;
  };
};

export const getServerSideProps = async (context) => {
  const { req } = context;
  const { token } = req.cookies;

  const user = await validateSession(token);

  if (!user || user.role.name !== 'admin') {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      user,
    },
  };
};

export default withAdminAuth;
