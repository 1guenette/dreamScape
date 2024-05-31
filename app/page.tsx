'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@nextui-org/button";

export default function Home() {

  function startGame(){
    console.log("====")
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {/* <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p> */}
        {/* <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_self"
            rel="noopener noreferrer"
          >
            By{" Levick Labs"} */}

        {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            /> */}
        {/* </a>
        </div> */}
      </div>

      <div >
        <div className={styles.center}>
          <h2>
            Welcome to Dreamscape
          </h2>
        </div>
        <div className={styles.center}>
          <Button color="primary" variant="ghost" onClick={()=>{window.location.href='/game'}}>
            Start
          </Button>
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="/game-map"
          className={styles.card}
          target="_self"
          rel="noopener noreferrer"
        >
          <h2>
            Game Map <span>-&gt;</span>
          </h2>
          <p>Edit the dreamscape story</p>
        </a>

        <a
          href="/about"
          className={styles.card}
          target="_self"
          rel="noopener noreferrer"
        >
          <h2>
            About Us <span>-&gt;</span>
          </h2>
          <p>Learn about the dreamscape project</p>
        </a>

        <a
          href="/game"
          className={styles.card}
          target="_self"
          rel="noopener noreferrer"
        >
          <h2>
            New Game <span>-&gt;</span>
          </h2>
          <p>Get ready to Dream</p>
        </a>

        <a
          href="/support"
          className={styles.card}
          target="_self"
          rel="noopener noreferrer"
        >
          <h2>
            Support Us <span>-&gt;</span>
          </h2>
          <p>
            Help support the developers and artists that keep this game free
          </p>
        </a>
      </div>
    </main>
  );
}
