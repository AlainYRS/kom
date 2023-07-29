import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from '@/styles/Home.module.css'
import PagesHeadComp from '@/complements/components/PagesHeadComp/PagesHeadComp'
import FooterComp from "@/complements/components/FooterComp/FooterComp";
import Image from 'next/image';
import Developer from '@/complements/components/DeveloperComp/DeveloperComp';


export default function Home() {
  return (
    <>
      <Head>
        <title>Buzon de Sugerencias</title>
        <meta name="description" content="Landing page generated to El Komander Event" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv='ScreenOrientation' content='autoRotate:disabled' />
        <link rel="icon" href="/Icons/manifest_icons/favicon.ico" />
      </Head>
      <PagesHeadComp
        data={{
            faviconURL: "/Images/ElPatronClear.png",
            title: "Buzon de Sugerencias",
            description: "Buzon para Sugerencias del grupo restaurantero de El Patron, Hot Tacos, Street Food, Quality Food & more",
            keywords: "Sugerencias",
        }}
      />
      <main className={styles.main}>
        <div className={styles.contentHome}>
          <div className={styles.Logo}>
            <Image src="/Images/ElPatronClear.png" alt="El Patron Logo" fill sizes="(max-width: 350px) 40vw" priority={true}/>
          </div>
          <div className={styles.Logo}>
            <Image src="/Images/HotTacos.png" alt="Hot Tacos Logo" fill sizes="(max-width: 350px) 40vw" priority={true}/>
          </div>
          <div className={styles.Logo}>
            <Image src="/Images/StreetFood.jpg" alt="Street Food Logo" fill sizes="(max-width: 350px) 40vw" priority={true}/>
          </div>
          {/* <Link href={"/Komander"} id={styles.Artist}>
            <Image src="/Images/Komander.jpg" alt="El Komander" fill sizes="(max-width: 350px) 40vw" priority={true}/>
          </Link> */}
        </div>
        <div className={styles.GetTouchCont}>
          <a href={'/GetInTouch'} className={styles.MenuButton}>Quejas y Sugerencias</a>
        </div>
      </main>
      <Developer 
          author= {'Alain Y Rivera S'}
          date= {'Jul 28, 2023'}
          version= {'1.0.0'}
          styles={{fontSize:"0.4rem", color:'rgba(210,210,210,0.7)'}}
          classNames={'other'}
      />
    </>
  )
}
