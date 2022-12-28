import Head from "next/head";
import SEO from "@bradgarropy/next-seo"

import Home from "./home";

export default function Index() {
  return (
    <>
      <Head>
      <SEO title='Saytların hazırlanması, saytların yığılması, sayt sifarişi, sayt yaradılması.' description='Biznesinizdə müştəri bazanızı böyütmək , Markanızı dahada iləri səviyyələrə qaldırmaq və ən əsasıda müştəri axtarışına yoxda müştərinin sizi axtarıb tapmasına səbəb yaradın. Bu platformda bu nəticəyə gəlmək dahada ilham vericidir.' keywords={['website', 'sayt hazirlanmasi' , 'saytlarin yigilmasi', 'sayt sifarisi ' ] } icon="/favicon.ico" themeColor="#0A2728"  />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>

      <Home />
    </>
  );
}
