import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { collection, getDocs } from 'firebase/firestore';
import db from '../lib/firebase';

const useTokenMiddleware = () => {
  const router = useRouter();

  useEffect(() => {
    const token = document.cookie.split('=')[1] ?? null;

    async function checkToken(){
        const tokenCollection = collection(db, 'tokens');
        const tokenSnapshot = await getDocs(tokenCollection);
        const tokens = tokenSnapshot.docs.map(doc => doc.data().token);
        if (!tokens.includes(token)) {
            const currentUrl = window.location.pathname.slice(1,999).split('%')[0];
            const redirectUrl = `/premium?from=${encodeURIComponent(currentUrl)}`;
            router.push(redirectUrl);
          }
    }

    if (!token) {
      const currentUrl = window.location.pathname.slice(1,999).split('%')[0]
      const redirectUrl = `/premium?from=${encodeURIComponent(currentUrl)}`;
      router.push(redirectUrl);
    } else {
      // Make a request to your server to validate the token
        checkToken()

    }
  }, [router]);

  return null; // This hook does not render anything
};

export default useTokenMiddleware;
