import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as React from 'react';
import  Spotify  from '../components/spotify.js'
import TopArtist from '../components/topArtists.js'


export default function Home() {
  return (
    <div className={styles.container}>
     
      <Head>
        <title>Spotify-Displayer</title>
        <meta name="description" content=":D" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1 className={styles.main}>
      <TopArtist></TopArtist>
    <Spotify></Spotify>
       </h1>
  
    </div>
  )
}


