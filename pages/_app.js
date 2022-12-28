import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Layout from "../layout/Layout"
import NextNProgress from 'nextjs-progressbar';
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
      <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0A2728" />
        
        <meta name="description" content="Biznesinizdə müştəri bazanızı böyütmək , Markanızı dahada iləri səviyyələrə qaldırmaq və ən əsasıda müştəri axtarışına yoxda müştərinin sizi axtarıb tapmasına səbəb yaradın. Bu platformda bu nəticəyə gəlmək dahada ilham vericidir." />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://cansweb.online" />
        <meta property="og:locale" content="az_AZ"/>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Saytların hazırlanması, saytların yığılması, sayt sifarişi, sayt yaradılması." />
        <meta property="og:description" content="Veb studio, saytların hazırlanması, saytların yığılması, sayt dizaynı, saytların yaradılması, texniki xidmət, it xidmətləri, seo, seo xidməti." />
        <meta property="og:url" content="https://cansweb.online/" />
        <meta property="og:site_name" content="cansweb.online"  />
        
      </Head>
        <NextNProgress color="#12B7D6" startPosition={0.2} stopDelayMs={200} height={3} showOnShallow={true} />
      <Component  {...pageProps} />
    </Layout>
  )
}

export default MyApp
