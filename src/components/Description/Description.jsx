import css from "../Description/Description.module.css";
import { GiCoffeeBeans } from "react-icons/gi";
export default function Description() {
    return (
      <>
        <h1 className={css.header}><GiCoffeeBeans/> Sip Happens Café <GiCoffeeBeans/></h1>
        <p className={css.text}>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </>
    );
  };