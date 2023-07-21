import Head from 'next/head'
import Link from 'next/link';
import React from 'react';
import styles from '@/styles/Home.module.css'
import PagesHeadComp from '@/complements/components/PagesHeadComp/PagesHeadComp'
import FooterComp from "@/complements/components/FooterComp/FooterComp";
import Image from 'next/image';

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
          <a href={'/GetInTouch'} className={styles.MenuButton}>Contactanos</a>
        </div>
        <div className={styles.contentHome}>
          <div id={styles.Logo}>
            <Image src="/Images/logo.png" alt="El Patron Logo" fill sizes="(max-width: 350px) 40vw" priority={true}/>
          </div>
          <Link href={"/Komander"} id={styles.Artist}>
            <Image src="/Images/Komander.jpg" alt="El Komander" fill sizes="(max-width: 350px) 40vw" priority={true}/>
          </Link>
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
          styles={{backgroundColor: 'rgb(0,0,0)'}}
      />
    </>
  )
}
