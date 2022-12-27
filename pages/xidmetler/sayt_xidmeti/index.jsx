import Head from "next/head";
import React from "react";
import SaytlarinHazirlanmasi from "../../../components/Services/SaytlarinHazirlanmasi";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Web Saytların hazırlanması | CansWeb </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta
          name="description"
          content="Tək səhifəli veb saytlardan
                    başlayaraq fərqli paket seçimləri ilə CansWeb hər kəs üçün bir
               veb sayt seçimi təqdim edir."
        />

        <meta http-equiv="copyright" content="Copyright © 2023 CansWeb" />
        <meta http-equiv="content-language" content="az_AZ" />
        <meta name="title" content="Web Saytlarda  SEO Xidməti | CansWeb" />
        <meta
          name="keywords"
          content="  veb sayt , sayt hazirlanmasi , cansweb"
        />
        <meta name="description" lang="az_AZ" content="description " />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="1 Days" />
        <meta name="robots" content="index, follow" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="all" />
        <meta name="author" content="İman Xəlilov" />
        <meta name="application-name" content="CansWeb" />
        <meta name="apple-mobile-web-app-title" content="CansWeb" />
        <meta name="distribution" content="global" />
        <meta name="resource-type" content="CansWeb" />
        <meta itemprop="name" content="CansWeb" />
        <meta itemprop="image" content="Cansweb" />
        <meta name="theme-color" content="#0A2728" />
        <meta name="msapplication-navbutton-color" content="#0A2728" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#0A2728" />
        <meta name="name" content="tranimeci 2.0.5" />
      </Head>
      <div className="pt-4">
        <SaytlarinHazirlanmasi />
      </div>
    </div>
  );
};

export default Index;
