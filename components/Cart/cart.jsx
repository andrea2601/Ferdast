import styles from "./styles.module.scss";
import { useState } from "react";
import { useVacationContext } from "../../Context/Provider";

export const Cart = () => {
  const {
    state: { totalPrice, cart },
  } = useVacationContext();
  const [number, setNumber] = useState(1);
  // const [class, setClass] = useState();
  return (
    <div className={styles.CartContainer}>
      <div className={`${styles.CartBG}`}>
      </div>
      <div className={styles.Cart}>
        <h1 className={styles.close}>x</h1>
        <h1 className={styles.title}>Carrello</h1>

        <div className={styles.left}>

          <div className={styles.travelers}>
            <h2>Seleziona il numero di viaggiatori</h2>
            <div className={styles.selectNumber}>
              <h3>Per quante persone vuoi prenotare?</h3>
              <button className={styles.btn} onClick={() => { setNumber(number - 1) }}>-</button>
              <h2 className={styles.number}>{number}</h2>
              <button className={styles.btn} onClick={() => { setNumber(number + 1) }}>+</button>
            </div>
          </div>

          <div className={styles.ads}>
            <h2>Offerte e promozioni</h2>
            <div className={styles.adsBox}>
              <h3>Prenota per 4 e ottieni 175$ di sconto</h3>
              <p>
                Chi fa peaxssxassaxsr 4 paga meno! Prenota per 4 amici e ottieni 175€
                di sconto su una spesa minima di 1000€. Usa il codice PENSIONATO65 direttamente nel Checkout.
              </p>
            </div>
          </div>

        </div>

        <div className={styles.right}>

          <h3>Riepilogo prenotazione</h3>
          <h3>Destinazioni:</h3>
          {cart && cart.map(city => <h2 className={styles.city} key={city.id}>{city}</h2>)}
          <div className={styles.info}>
            <h2 className={styles.travelersH2}>Viaggiatori</h2>
            <h2 className={styles.number}>{number}</h2>
            <h1 className={styles.total}>Totale</h1>
            <h1 className={styles.totalValue}>{totalPrice * number}€</h1>
            <button className={styles.btn}>Continua</button>
          </div>

        </div>
      </div>
    </div>

  );
};
