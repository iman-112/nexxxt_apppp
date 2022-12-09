import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Layout from "../layout/Layout"
import NextNProgress from 'nextjs-progressbar';
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <NextNProgress color="#12B7D6" startPosition={0.2} stopDelayMs={200} height={3} showOnShallow={true} />
      <Component  {...pageProps} />
    </Layout>
  )
}

export default MyApp
