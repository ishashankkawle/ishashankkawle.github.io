import { useEffect, useState } from "react";
import styles from "./projects.module.css";

export default function Project({dataObj}) {

  
  const [projData, setProjectData] = useState(undefined)

  useEffect(() => {
    setProjectData(dataObj.projects)
  }, [])

  if(projData == undefined)
  {
    return null
  }
  else
  {

    let projList = projData.map((item , index) => {
        return (<div key={index} className={`${styles.projectcard} mx-3 my-3 shadow px-0`} data-aos="fade-up" data-aos-delay="100">
                  <div className={`${styles.projectitem} item-cyan position-relative`}>
                    <div className={`${styles.icon}`}>
                      <img width={100} height={100} src={item.imgUrl} />
                    </div>
                    <a href="#" className="stretched-link">
                      <h3>{item.title}</h3>
                    </a>
                    <p>{item.description}</p>
                    <div className={`${styles.tags} d-flex justify-content-start`}>
                      {item.tags.map((tagItem , tagIndex) => {
                        return (<span key={tagIndex} className={`${styles.tagpill} badge rounded-pill mx-1`}>{tagItem}</span>)
                      }) }
                    </div>
                  </div>
                </div>)
    }) 

    return (
      <section className={`${styles.projects} section`}>

        <div className="container section-title pb-2" data-aos="fade-up">
          <h2>Projects</h2>
        </div>

        <div className={`${styles.projectlist} row px-0`}>
          {projList}
        </div>
        
      </section>

    );
  }
}
