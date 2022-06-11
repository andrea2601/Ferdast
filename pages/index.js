import Head from "next/head";
import { Hero } from "../components/Hero/hero";
import styles from "../styles/Home.module.scss";
import { CardList } from "../components/CardList/cardList";
import { useEffect } from "react";
import { useVacationContext } from "../Context/Provider";
import CarouselTwo from "../components/Carousel/CarouselTwo";
import { Carousel } from "../components/Carousel/carousel";

export default function Home() {
  useEffect(() => {
    if (navigator.serviceWorker) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(function (registration) {
          console.log(
            "ServiceWorker registration successful with scope:",
            registration.scope
          );
        })
        .catch(function (error) {
          console.log("ServiceWorker registration failed:", error);
        });
    }
  }, []);
  const {
    fetchAll,
    state: { vacation, italia, russia, francia, usa },
  } = useVacationContext();

  useEffect(() => {
    fetchAll("/cities");
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Ferdast</title>
        <meta
          name="description"
          content="Sito web di viaggi internazionali dedicato ad un target che va oltre i 55 anni di età, 
          le possibili mete possono essere scelte tra: Stati Uniti d'America, Russia, Francia e Italia; 
          in ognuna è possibile visitare le singole città e scoprire le varie attività che quella offre; 
          aggiungendo al carrello, si possono vedere in tempo reale le attività e la quantità totale tramite un piccolo pop up sulla destra, tramite il quale si può raggiungere la pagina del carrello , dove è possibile vedere il prezzo totale che l'utente pagherà"
        />

        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />
      <section className={styles.carouselContainer}>
        <CarouselTwo />
      </section>

      <CardList />
    </div>
  );
}
