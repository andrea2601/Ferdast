import { DefaultLayout } from "../components/DefaultLayout/defaultlayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;
