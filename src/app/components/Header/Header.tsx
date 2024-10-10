import Link from "next/link";
import Image from "next/image";

import Container from "../Container/Container";

import Logo from "../../../assets/img/Logo.png";
import ContactsIcon from "../../IconsService/ContactsIcon";
import FavoriteIcons from "../../IconsService/FavoriteIcon";
import DeliveryIcons from "../../IconsService/DeliveryIcons";
import LoginIcon from "../../IconsService/LoginIcon";

import styles from "./Header.module.scss";
import { InputLabel, MenuItem, Select } from "@mui/material";

const selectStyles = {
  color: "#956D84",
  fontSize: "16px",
  fontFamily: "var(--font-300)",
  boxShadow: "none",
  ".MuiOutlinedInput-notchedOutline": { border: 0 },
  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    border: 0,
  },
  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: 0,
  },
  "& .MuiSelect-select": {
    padding: "0",
    border: "none",
  },
  "& .MuiSvgIcon-root": {
    "& path": {
      fill: "#fff",
    },
  },
};

const Header = () => {
  return (
    <header>
      <div className={styles.panel}>
        <Container>
          <div className={styles.pageTools}>
            <ul className={styles.pageTools__list}>
              <li className={styles.list__item}>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{
                    color: "#fff",
                    fontWeight: "300",
                    fontFamily: "var(--font-300)",
                  }}
                >
                  Валюта
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value="UAH"
                  label="currency"
                  sx={selectStyles}
                  // onChange={handleChange}
                >
                  <MenuItem value="UAH">ГРН</MenuItem>
                  <MenuItem value="USD">USD</MenuItem>
                </Select>
              </li>
              <li className={styles.list__item}>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{
                    color: "#fff",
                    fontWeight: "300",
                    fontFamily: "var(--font-300)",
                  }}
                >
                  Мова
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value="UA"
                  label="language"
                  sx={selectStyles}
                >
                  <MenuItem value="UA">UA</MenuItem>
                  <MenuItem value="RU">RU</MenuItem>
                </Select>
              </li>
              <li className={styles.list__item}>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{
                    color: "#fff",
                    fontWeight: "300",
                    fontFamily: "var(--font-300)",
                  }}
                >
                  Місто
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value="Kyiv"
                  label="city"
                  sx={selectStyles}
                  // onChange={handleChange}
                >
                  <MenuItem value="Kyiv">Київ</MenuItem>
                  <MenuItem value="Odesa">Одеса</MenuItem>
                  <MenuItem value="Vinnytsia">Вінниця</MenuItem>
                  <MenuItem value="Lviv">Львів</MenuItem>
                </Select>
              </li>
              <li className={styles.list__item}>
                <Link href="/favourites" className={styles.link}>
                  <FavoriteIcons />
                  <span>Закладки</span>
                </Link>
              </li>
              <li className={styles.list__item}>
                <Link href="/delivery" className={styles.link}>
                  <DeliveryIcons />
                  <span>Доставка та оплата</span>
                </Link>
              </li>
              <li className={styles.list__item}>
                <Link href="/contacts" className={styles.link}>
                  <ContactsIcon />
                  <span>Контакти</span>
                </Link>
              </li>
            </ul>
            {/* <div> */}
            <ul className={styles.pageTools__list + " " + styles.authList}>
              <li className={styles.list__item}>
                <Link href="/login" className={styles.link}>
                  <LoginIcon />
                  <span>Увійти</span>
                </Link>
              </li>
              <li className={styles.list__item}>
                <Link href="/register" className={styles.link}>
                  <span>Реєстрація</span>
                </Link>
              </li>
            </ul>
            {/* </div> */}
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
