import Head from 'next/head'
import Link from 'next/link';
import React from 'react';
import styles from '@/styles/Home.module.css'
import PagesHeadComp from '@/complements/components/PagesHeadComp/PagesHeadComp'
import FooterComp from "@/complements/components/FooterComp/FooterComp";
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>El Komander & El Patron</title>
        <meta name="description" content="Landing page generated to El Komander Event" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv='ScreenOrientation' content='autoRotate:disabled' />
        <link rel="icon" href="/Icons/manifest_icons/favicon.ico" />
      </Head>
      <PagesHeadComp
        data={{
            faviconURL: "/Images/logo.png",
            title: "El Komander - El Patron",
            description: "Evento de El Komander organizado por El Patron Bar & Grill restaurante",
            keywords: "El Komander - El Patron",
        }}
      />
      <main className={styles.main}>
        <div className={styles.GetTouchCont}>
          <a href={'/GetInTouch'} className={styles.MenuButton}>Get In Touch</a>
        </div>
        <div id={styles.Logo}><Image src="/Images/logo.png" alt="El Patron Logo" fill/></div>
        <div id={styles.MainLinksMenu}>
          <Link  style={{textDecoration:'none'}} id={styles.AboutUs} className={styles.MainLink} href="/Komander"><span>El Komander</span></Link>
          <Link  style={{textDecoration:'none'}} id={styles.NewestProject} className={styles.MainLink} href="/Patron"><span>El Patron</span></Link>
        </div>
      </main>
      <FooterComp 
          classNames={''}
          langs={{
          developed: "Developed by",
          copyright: "Copyright",
          made: "made",
          version: "version",
          }}
          styles={{backgroundColor: 'rgb(43,44,56)'}}
      />
    </>
  )
}
