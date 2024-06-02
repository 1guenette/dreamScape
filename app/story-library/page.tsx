import Image from "next/image";
import { readdirSync } from "fs";
import styles from "../page.module.css";
import { Button } from "@nextui-org/button";
// import platoDungeon from '../game-map/test.json'

export default function Home() {

  function getStaticProps() {
    return { props: { msg: 'hello world' } }
  }
  


  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Dream Library
        </p>
      </div>
      <p>Pick from one of our many stories</p>

      <div className={styles.grid}>
        <a href='/game' clickable="true">Test1</a>
      </div>
      <div className={styles.grid}>
        <a href='/game' clickable="true">Test2</a>
      </div>
      <div className={styles.grid}>
        <a href='/game' clickable="true">Test3</a>
      </div>
      <div className={styles.grid}>
        <a href='/game' clickable="true">Test4</a>
      </div>
    </main>
  );
}
