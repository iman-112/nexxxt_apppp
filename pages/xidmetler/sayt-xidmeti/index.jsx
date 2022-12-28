import Head from "next/head";
import Script from "next/script";
import React from "react";
import SaytlarinHazirlanmasi from "../../../components/Services/SaytlarinHazirlanmasi";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Web Saytların hazırlanması | CansWeb </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    
      </Head>
      <div>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-35EEJDBZNJ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-35EEJDBZNJ');
        `}
      </Script>
      </div>
      <div className="pt-4">
        <SaytlarinHazirlanmasi />
      </div>
    </div>
  );
};

export default Index;
