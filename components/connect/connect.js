import { useEffect, useState } from "react";
import styles from "./connect.module.css";

export default function Connect({dataObj}) {

  const [socialData, setSocialData] = useState(undefined)

  useEffect(() => {
    setSocialData(dataObj.social)
  }, [])

  if(socialData == undefined)
  {
    return null
  }
  else
  {

    return (
      <section className={`${styles.connect} section`}>

        <div className="container">
          <h3 className="sitename">Shashank J. Kawle</h3>
          <p>Let's connect on social network.</p>
          <div className={`${styles.sociallinks} d-flex justify-content-center`}>
            {(socialData.twitch != undefined) ? (<a href={socialData.twitch}><i className="bi bi-twitch"></i></a>) : null}
            {(socialData.twitter != undefined) ? (<a href={socialData.twitter}><i className="bi bi-twitter-x"></i></a>) : null}
            {(socialData.youtube != undefined) ? (<a href={socialData.youtube}><i className="bi bi-youtube"></i></a>) : null}
            {(socialData.facebook != undefined) ? (<a href={socialData.facebook}><i className="bi bi-facebook"></i></a>) : null}
            {(socialData.snapchat != undefined) ? (<a href={socialData.snapchat}><i className="bi bi-snapchat"></i></a>) : null}
            {(socialData.whatsapp != undefined) ? (<a href={socialData.whatsapp}><i className="bi bi-whatsapp"></i></a>) : null}
            {(socialData.signal != undefined) ? (<a href={socialData.signal}><i className="bi bi-signal"></i></a>) : null}
            {(socialData.medium != undefined) ? (<a href={socialData.medium}><i className="bi bi-medium"></i></a>) : null}
            {(socialData.quora != undefined) ? (<a href={socialData.quora}><i className="bi bi-quora"></i></a>) : null}
            {(socialData.instagram != undefined) ? (<a href={socialData.instagram}><i className="bi bi-instagram"></i></a>) : null}
            {(socialData.threads != undefined) ? (<a href={socialData.threads}><i className="bi bi-threads"></i></a>) : null}
            {(socialData.github != undefined) ? (<a href={socialData.github}><i className="bi bi-github"></i></a>) : null}
            {(socialData.gitlab != undefined) ? (<a href={socialData.gitlab}><i className="bi bi-gitlab"></i></a>) : null}
            {(socialData.linkedin != undefined) ? (<a href={socialData.linkedin}><i className="bi bi-linkedin"></i></a>) : null}            
            {(socialData.resume != undefined) ? (<a href={socialData.resume}><i className="bi bi-cloud-arrow-down-fill"></i></a>) : null}            
          </div>
          <div className="container">
            <div className={`${styles.copyright}`}>
              <span>Copyright @</span> <strong className="px-1 sitename">{dataObj.hero.name}</strong> |  &nbsp;<span> All Rights Reserved</span>
            </div>
          </div>
        </div>

      </section>
    );
  }
}
