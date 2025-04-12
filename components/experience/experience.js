import { useEffect, useState } from "react";
import styles from "./experience.module.css";

export default function Experince({dataObj}) {

  const[expData , setExpData] = useState([])

  useEffect(() => {
    setExpData(dataObj.experience)
  } , [])

  let getList = (arrPoints) => {
    let arrListItem = arrPoints.map((item , index) => {
      return(<li key={index}>{item}</li>)
    })
    return (<ul>{arrListItem}</ul>)
  }
  
  let getParagraph = (textData) => {
    return (<p>{textData}</p>)
  }

  let arrList = expData.map((item , index) => {
    if(item.type.toUpperCase() == "EXP") 
    {
      return (
        <div key={index} className={`${styles.experienceitem}`}>
            <h4>{item.position.toUpperCase()}</h4>
            <h5 className="px-0">{item.start} - {item.end}</h5>
            <p><em>{item.org}</em></p>
            {(item.introType.toUpperCase() == "LIST") ? getList(item.intro.split("|")) : getParagraph(item.intro)}
          </div>
      )
    } 
    else
    {
      return (
        <div key={index} className={`${styles.experienceitem}`}>
          <div className="row">
            <div className="col-lg-5">
              <h4>{item.title}</h4>
              <h5 className="px-0">{item.date}</h5>
              <p><em>{item.org}</em></p>
            </div>
            <div className="col-lg-2 rounded">
              <img src={item.imgUrl} className={`${styles.experienceitemimg}`} />
            </div>
          </div>
        </div>
      )
    }

  })

  return (
    <section className={`${styles.experience} section`}>
      
      <div className="container section-title pb-2" data-aos="fade-up">
        <h2>Experience</h2>
      </div>

      <div className={`${styles.experiencetimelineblock} container scrollable`}>
        <div className={`${styles.experienceblock} d-block`} data-aos="fade-up" data-aos-delay="200">

          {arrList}

        </div>
      </div>
    </section>
  );
}