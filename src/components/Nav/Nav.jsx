import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css"

export default function Nav() {
  return (
    <div className={styles.nav}>
        <Link to="/"><h3>ABOUT ME</h3></Link>
        <Link to="/proyects"><h3>PROJECTS</h3></Link>
        <div className={styles.liandgh}>
          <a href="https://www.linkedin.com/in/jmanum95/" target="_blank"><img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png" alt="1234"/></a>
          <a href="https://github.com/jmanum95" target="_blank"><img className={styles.github} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="124"/></a>
        </div>
    </div>
  );
}
