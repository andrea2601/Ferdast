import { DefaultLayout } from "../components/DefaultLayout/defaultlayout";
import "../styles/globals.css";
import Provider from "../Context/Provider";
import SplashScreen from "../components/SplashScreen/splashScreen";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <SplashScreen />

      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </Provider>
  );
}

export default MyApp;
