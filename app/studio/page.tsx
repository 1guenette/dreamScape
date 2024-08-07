'use client'
import Image from "next/image";
import styles from "../page.module.css";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import Dropdown from "./dropdown";
import { Tree, AnimatedTree } from 'react-tree-graph';
import "./graph.css";






export default function Studio() {

  const data = {
    name: 'Parent',
    children: [{
      name: 'Child One'
    }, {
      name: 'Child Two'
    }]
  };


  return (

    <main className={styles.main}>
<div >
  <AnimatedTree
    data={{
      children: [
        {
          name: 'Child One'
        },
        {
          name: 'Child Two'
        }
      ],
      name: 'Parent'
    }}
    height={400}
    svgProps={{
      className: 'custom'
    }}
    width={600}
    gProps={{
      onClick: (e)=>{console.log(e)},
      onContextMenu: (e)=>{console.log(e)}
    }}
  />
</div>
</main>
  )
}