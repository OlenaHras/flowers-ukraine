import Link from "next/link";
import Image from "next/image";

import Container from "../Container/Container";

import Logo from "../../../assets/img/Logo.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.panel}>
        <Container>
          <div className={styles.pageTools}>
            <ul className={styles.pageTools__list}>
              <li>
                <label htmlFor="currency" className={styles.item__label}>
                  Валюта
                  <select
                    className={styles.item__select}
                    name="currency"
                    id="currency"
                  >
                    <option value="UAH">ГРН</option>
                    <option value="USD">USD</option>
                  </select>
                </label>
              </li>
              <li>
                <label htmlFor="language" className={styles.item__label}>
                  Мова
                  <select
                    className={styles.item__select}
                    name="language"
                    id="language"
                  >
                    <option value="UA">UA</option>
                    <option value="RU">RU</option>
                  </select>
                </label>
              </li>
              <li>
                <label htmlFor="city" className={styles.item__label}>
                  Місто
                  <select className={styles.item__select} name="city" id="city">
                    <option value="Kyiv">Київ</option>
                    <option value="Odesa">Одеса</option>
                    <option value="Vinnytsia">Вінниця</option>
                    <option value="Lviv">Львів</option>
                  </select>
                </label>
              </li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </Container>
      </div>
      <Container>
        <Link href="/">
          <Image src={Logo} alt="logo" width={90} height={90} />
        </Link>
      </Container>
    </header>
  );
};

export default Header;
