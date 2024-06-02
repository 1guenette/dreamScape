'use client'
import Image from "next/image";
import styles from "../page.module.css";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import platoDungeon from '../game-map/library/test1/test.json'

export default function Home() {

  const [step, setStep] = useState(platoDungeon.start)
  const [options, setOptions] = useState()
  const [gameMap, setGameMap] = useState(platoDungeon)
  const [popupPrompt, setPopupPrompt] = useState("")

  useEffect(() => {

  }, [])


  function handleSelection(opt: any) {
    if (!opt.popupNote) {
      setStep(opt.next)
      setPopupPrompt('')
    }
    else {
      setPopupPrompt(opt.popupNote)
    }
  }

  function generateOptions() {
    if (!gameMap.steps[`${step}`].ending) {

      return gameMap.steps[`${step}`].options.map((opt, i) => {
        return <Button key={i} id={opt.id} value={opt.next} color="primary" variant="ghost" onClick={() => handleSelection(opt)}>{opt.description}</Button>
      })
    }
    else {
      return <Button color="primary" variant="ghost" onClick={()=>{window.location.href='/game'}}>Play Again</Button>
    }
  }

  function generatePrompt() {
    return gameMap.steps[`${step}`].prompt
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          {gameMap["title"]}
        </p>

      </div>

      <div className={styles.center}>
        <Image
          // className={styles.logo}
          src={ `/${gameMap.steps[`${step}`].image}`}
          alt="Next.js Logo"
          width={560}
          height={74}
          priority
        />

      </div>

      <div className={styles.center}>
        <p>
          {generatePrompt()}
        </p>
      </div>

      <div className={styles.center}>
        <p>
          {popupPrompt}
        </p>
      </div>

      <div className={styles.center}>
        {generateOptions()}
      </div>
    </main>
  );
}
