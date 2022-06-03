import { DefaultLayout } from "../components/DefaultLayout/defaultlayout";
import "../styles/globals.css";
import Provider from "../Context/Provider";
function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </Provider>
  );
}

export default MyApp;
