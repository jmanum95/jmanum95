import React from "react";
import styles from "./Projects.module.css"

export default function Projects() {
  return (
    <div className={styles.projects}>
        <div className={styles.card}>
          <h1>Happy Tails</h1>
          <img src="https://res.cloudinary.com/ddotagqdr/image/upload/v1663623557/happytails_xjluad.png"/>
          <p>Happy Tails is the result of teamwork and dedication. As a team, we created a social network to adopt pets with integrated marketplace for our final course project. It was developed with MERN (Mongo-Express-React-Node) technology.</p>
          <p><a href="https://github.com/Final-Proyect-PETS/Front-End" target="_blank">Repo Link</a></p>
          <p><a href="https://happytails.vercel.app/" target="_blank">Deployed app</a></p>
        </div>
        <div className={styles.card}>
          <h1>Pokeapp</h1>
          <img src="https://res.cloudinary.com/ddotagqdr/image/upload/v1663623585/pokeapp_yhzwv3.png"/>
          <p>Pokeapp is a proyect made individually during the Henry bootcamp in 2022. It works by consuming an API that has all pokemons and their respective information. you can search, filter by different parameters, and create pokemons.</p>
          <p><a href="https://github.com/jmanum95/pokeappi-front" target="_blank">Repo Link</a></p>
          <p><a href="https://pokeapi-jm95.vercel.app/" target="_blank">Deployed app</a></p>
        </div>
    </div>
  );
}