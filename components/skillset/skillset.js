import { useEffect, useState } from "react";
import styles from "./skillset.module.css";

export default function Skillset({ dataObj }) {

  const [sklData, setSkillData] = useState(undefined)

  useEffect(() => {
    setSkillData(dataObj.skills)
  }, [])

  if(sklData == undefined)
  {
    return null
  }
  else
  {
    let arrPrimarySkills = sklData.primary.map((item , index) => {
        return (<div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-3">
                  <span><i className={`${styles.skillbullet} bi bi-chevron-right`}></i> <span>{item}</span></span>
                </div>)
    })
    let arrOtherSkills = sklData.other.map((item , index) => {
        return (<div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-3">
                  <span><i className={`${styles.skillbullet} bi bi-chevron-right`}></i> <span>{item}</span></span>
                </div>)
    })
    let arrLanguages = sklData.languages.map((item , index) => {
        return (<div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-3">
                  <span><i className={`${styles.skillbullet} bi bi-chevron-right`}></i> <span>{item}</span></span>
                </div>)
    })

    return (
      <section className={`${styles.skillset} section`}>

        <div className="container section-title pb-2" data-aos="fade-up">
          <h2>Skill Set</h2>
        </div>

        <div className={`${styles.skillsetblock} container scrollable`}>

          <div className="row justify-content-center">
            <div className={`col-lg-12 ${styles.content}`}>
              <h2>Primary Skills</h2>
              <hr />
              <div className="row mb-2">
                {arrPrimarySkills}
              </div>
              <h2>Other Skills</h2>
              <hr />
              <div className="row mb-2">
                {arrOtherSkills}
              </div>
              <h2>Languages</h2>
              <hr />
              <div className="row mb-2">
                {arrLanguages}
              </div>
            </div>
          </div>

        </div>
      </section >
    );
  }
}
