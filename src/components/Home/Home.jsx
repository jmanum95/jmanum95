import React from "react";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.homedata}>
        <div className={styles.data}>
          <h1>JUAN MANUEL MARTINEZ</h1>
          <h2>
            I'm a Full Stack Developer currently living in Argentina. I enjoy challenges and i'm eager to learn new things!
          </h2>
        </div>
        <div className={styles.dataimg}>
          <img
            src="https://res.cloudinary.com/ddotagqdr/image/upload/v1663597700/profile-pic_v0f0cf.png"
            className={styles.profileimg}
            alt="7"
          />
        </div>
      </div>
      <div className={styles.tecstack}>
        <h2>Worked with</h2>
        <div className={styles.imgpool}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="1"/>
          <img src="https://res.cloudinary.com/ddotagqdr/image/upload/v1663616480/react_utmufc.png" alt="2"/>
          <img src="https://res.cloudinary.com/ddotagqdr/image/upload/v1663617034/5848309bcef1014c0b5e4a9a_1_uxr4fz.png" alt="3"/>
          <img src="https://res.cloudinary.com/ddotagqdr/image/upload/v1663616480/node_rzu7fm.png" alt="1"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="4"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" alt="5"/>
          <img className={styles.github} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="6"/>
        </div>
      </div>
    </div>
  );
}
