import { useEffect } from 'react';

export const SiteButton = () => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://crm.ploutoslabs.io/upload/crm/site_button/loader_3_yfwhvr.js?' + Math.floor(Date.now() / 60000);
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component does not render anything
};