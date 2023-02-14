// Imports: Packages and Utilities
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';

// Imports: Components
import Navbar from '@/components/Navbar';

// Imports: CSS Modules
import '@/styles/globals.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { supabase } from '@/auth/authentication';

export default function App({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    checkUser();
    window.addEventListener('hashchange', () => {
      checkUser();
    });
  }, []);

  // Method to checkUser, coming from supabase auth
  // Important to check that if user is authenticated already
  // or is a new user, authorizing supabase client
  async function checkUser() {
    const currentUser = await supabase.auth.getUser();
    console.log('user data', currentUser);
    setUser(currentUser?.data?.user);
  }

  // Method to signout from the authorized account
  // also, this function will update the user data
  // to null -- for new user data
  async function signout() {
    const { error } = await supabase.auth.signOut();
    setUser(null);
  }

  return (
    <>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}>
        <Navbar isUserAuthorized={user ? true : false} />
        <Component {...pageProps} />
      </SessionContextProvider>
    </>
  );
}
