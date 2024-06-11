'use client'
import Image from "next/image";
import { readdirSync } from "fs";
import styles from "../page.module.css";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";

export default function Home() {


  const [gameList, setGameList] = useState([])

  useEffect(()=>{
    fetch('/api/story-library').then(async (res)=>{
      let data = await res.json()
      console.log(data)
      setGameList(data)
    })
  },[])
  


  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Dream Library
        </p>
      </div>
      <p>Pick from one of our many stories</p>


      {gameList.map((res)=> <div className={styles.center}> <div className={styles.center}><p><a href={`/game/${res}`} clickable="true">{`${res}`}</a></p></div></div>)}

      {/* <div className={styles.grid}>
        <a href='/game/test1' clickable="true">Test1</a>
      </div>
      <div className={styles.grid}>
        <a href='/game/test2' clickable="true">Test2</a>
      </div> */}
    </main>
  );
}
