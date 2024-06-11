'use client'
import Image from "next/image";
import styles from "../page.module.css";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import Dropdown from "./dropdown";




export default function Studio() {

    function startGame(){
      console.log("====")
    }
  
    return (
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>app/page.tsx</code>
          </p> 
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
          <Card>
                      <Accordion >
                          <AccordionItem key="1" aria-label="Accordion 1" title="You wake up in a cave. your friend is tied to a wall and a hole exists to the outside world">
  
                              <Card style={{marginLeft: "20px"}}>
                                  <Accordion >
                                      <AccordionItem key="1" aria-label="Accordion 2" title=" Approach friend">
  
                                          <Card style={{marginLeft: "40px"}}>
                                              <Accordion >
                                                  <AccordionItem key="1" aria-label="Accordion 1" title="Your friend is too weak to escape. He hands you a match and a note. What do you do?">
                                                      <Card style={{marginLeft: "60px"}}>
                                                          <Accordion >
                                                              <AccordionItem key="1" aria-label="Light Match" title=" Approach friend">
                                                              </AccordionItem>
                                                              <AccordionItem key="2" aria-label="Leave through tunnel" title="Escape through tunnel">
                                                              </AccordionItem>
                                                          </Accordion>
                                                      </Card>
  
                                                  </AccordionItem>
                                              </Accordion>
                                          </Card>
  
                                      </AccordionItem>
                                      <AccordionItem key="2" aria-label="Accordion 2" title="Escape through tunnel">
                                      </AccordionItem>
                                  </Accordion>
                              </Card>
  
                          </AccordionItem>
                      </Accordion>
                  </Card>
          </div>
        </div>
  
        <div className={styles.grid}>
        
        </div>
      </main>
    );
  }
  