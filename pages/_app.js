import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Layout from "../layout/Layout"
import NextNProgress from 'nextjs-progressbar';
import "../styles/globals.css";
import Head from "next/head";
import SEO from "@bradgarropy/next-seo"



function MyApp({ Component, pageProps }) {
  return (
    <Layout>


    <SEO title='Saytların hazırlanması, saytların yığılması, sayt sifarişi, sayt yaradılması.' description='Biznesinizdə müştəri bazanızı böyütmək , Markanızı dahada iləri səviyyələrə qaldırmaq və ən əsasıda müştəri axtarışına yoxda müştərinin sizi axtarıb tapmasına səbəb yaradın. Bu platformda bu nəticəyə gəlmək dahada ilham vericidir.' keywords={['website', 'sayt hazirlanmasi' , 'saytlarin yigilmasi', 'sayt sifarisi ' ] } icon="/favicon.ico" themeColor="#0A2728"  />

        <NextNProgress color="#12B7D6" startPosition={0.2} stopDelayMs={200} height={3} showOnShallow={true} />
      <Component  {...pageProps} />
    </Layout>
  )
}

export default MyApp
