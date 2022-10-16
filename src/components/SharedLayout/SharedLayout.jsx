import { Navigation } from 'components/Navigation';
import { ContactsSpinner } from 'components/ContactsPage/ContactsSpinner';
import { Box } from 'components/Box';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export function SharedLayout() {
  return (
    <>
      <Navigation />
      <Suspense
        fallback={
          <Box mt="150px">
            <ContactsSpinner size={'100'} />
          </Box>
        }
      >
        <Outlet />
      </Suspense>
      <ToastContainer />
    </>
  );
}
