"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/navbar";
import { Suspense, useEffect, useState } from "react";
import { resolve } from "styled-jsx/css";
import Hero from "@/components/hero/hero";
import Experince from "@/components/experience/experience";
import Skillset from "@/components/skillset/skillset";
import Project from "@/components/projects/projects";
import Connect from "@/components/connect/connect";

export default function Home() {

  const [page , setPage] = useState("HERO") 
  const [data , setData] = useState() 

  const initialize = async () => {
    //AOS.init();
    // let resp = await fetch("https://jsonblob.com/api/jsonBlob/1359565601093378048").then(async(res) => {return await res.json()} )
    let resp = await fetch("https://gitlab.com/api/v4/projects/68921776/repository/files/portfolio-data%2Ejson/raw?ref=main").then(async(res) => {return await res.json()} )
    setData(resp)
  }

  useEffect(() => {
    initialize()
  }, []);

  
  let comp = null

  switch (page) {
    case "HERO":
      comp = <Hero dataObj={data}/>
      break;
    case "EXPERIENCE":
      comp = <Experince dataObj={data}/>
      break;
    case "SKILLSET":
      comp = <Skillset dataObj={data}/>
      break;
    case "PROJECT":
      comp = <Project dataObj={data}/>
      break;
    case "CONNECT":
      comp = <Connect dataObj={data}/>
      break;
  
    default:
      break;
  }

  if(data == undefined)
  {
    comp = null
  }

  return (
      <div className={styles.page}>
        <Navbar openPage={setPage}/>
        {comp}
      </div>
  );
}
