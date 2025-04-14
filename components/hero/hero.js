import { useEffect, useState } from "react";
import styles from "./hero.module.css";
import Typed from "typed.js";

export default function Hero({dataObj}) {

  const [heroData, setHeroData] = useState(dataObj.hero)
  
  const initialize = () => {
    let typed_strings = dataObj.hero["iam"].split(',');
    new Typed('.typed').destroy()
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2000,
      showCursor: false
    });
  }

  // useEffect(() => {
  //   setHeroData(dataObj.hero)
  // }, [])

  useEffect(() => {
    initialize()
  } , [heroData])

  

  if(heroData == undefined)
  {
    return null
  }
  else
  {
    return (
      <section className={`${styles.hero} section`} data-aos="zoom-out">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className={`col-lg-7 ${styles.herointroblock}`}>
              <h2>{dataObj.hero.name}</h2>
              <p className="mb-2">I'm <span className="typed"></span><span className="typed-cursor typed-cursor--blink">|</span></p>
              <span>{dataObj.hero.introLine1}<br/> {dataObj.hero.introLine2}<br/> I am currently working at <b><a href={dataObj.hero.orgUrl}>{dataObj.hero.organization}</a></b>, where I work on a wide variety of interesting and meaningful projects.</span><br/>
              {(dataObj.social.resume != undefined) ? (<a className={`btn text-white mt-3 mb-2 ${styles.resumeBtn}`}  href={dataObj.social.resume} role="button">
                    <i className="bi bi-cloud-arrow-down-fill me-2"></i>
                    Resume
              </a>) : null}
              <hr/>
              <div className={`row ${styles.personalinfo}`}>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-envelope-fill"></i><strong> Email : </strong> <span>{dataObj.hero.email}</span></li>
                    <li><i className="bi bi-cake2-fill"></i><strong> Birthday : </strong> <span>{dataObj.hero.dobDate}<sup>{dataObj.hero.dobDateSuffix}</sup> {dataObj.hero.dobMonth}, {dataObj.hero.dobYear}</span></li>
               </ul>   
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-telephone-fill"></i> <strong> Phone : </strong> <span>({dataObj.hero.phoneExt}) {dataObj.hero.phone}</span></li>
                    <li><i className="bi bi-geo-alt-fill"></i> <strong> City : </strong> <span>{dataObj.hero.location}</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`col-lg-5 ${styles.heroimgblock}`}>
              <div className={`${styles.heroimg}`}>
                  <img src="/Hero.png" className={`img-fluid`} width="auto" height="auto" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
