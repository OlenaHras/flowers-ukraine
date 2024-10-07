import styles from "./page.module.css";

import Container from "./components/Container/Container";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Container>Main</Container>
      </main>
    </div>
  );
}
