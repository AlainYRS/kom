import React, { useRef , useState } from "react";
import Image from "next/image";
import Head from "next/head";
import PagesHeadComp from "@/complements/components/PagesHeadComp/PagesHeadComp";
import FooterComp from "@/complements/components/FooterComp/FooterComp";
// import styles from '@/styles/aboutUs.module.css'
import styles from '@/styles/komander.module.css'
import {HeaderCompBoots} from '@/complements/components/HeaderComp/HeaderCompBoots';
import ShowTitle from "@/complements/components/ShowTitle/ShowTitle";

interface IClicked{
    title: string
    image:string,
    content: any,
}

export default function Komander(){
    const [TitleVisible, setTitleVisible] = useState<any>(null)

    const form = useRef<any>();

    const[Clicked,setClicked] = useState<IClicked>({
        title: 'El Komander',
        image:'/Images/Komander.jpg',
        content:
        <>
            <p className={styles.Description} style={{position: 'relative', textAlignLast:'initial'}}>¡Noche de música imperdible! Únete a 'El Komander' en 'El Patron Bar & Grill', Leamington, ON, el 19 de agosto de 2023. ¡No te lo pierdas!</p>
            <ul  className={styles.ULDesc}>
                ¡Prepárate para una noche épica de música en vivo! El 19 de agosto de 2023, 'El Komander' tomará el escenario de 'El Patron Bar & Grill' en 205 Talbot St W, Leamington, ON N8H 1N8. No te pierdas esta oportunidad única de vivir la pasión y la energía de uno de los mejores grupos de música. ¡Únete a nosotros y déjate llevar por el ritmo inigualable de 'El Komander'! ¡Te esperamos con los brazos abiertos!
                <br/>
                <br/>
                Get ready for an epic night of live music! On August 19, 2023, 'El Komander' will take the stage at 'El Patron Bar & Grill' located at 205 Talbot St W, Leamington, ON N8H 1N8. Don't miss this unique opportunity to experience the passion and energy of one of the best music groups. Join us and let yourself be carried away by the unmatched rhythm of 'El Komander'! We look forward to welcoming you with open arms!
            </ul>
        </>,
    })

    return (
        <>
            <Head>
                <title>El Komander</title>
                <meta name="description" content="El Komander by El Patron Bar & Grill" />
                <link rel="icon" href="/Icons/manifest_icons/logo.png" />
                <meta name="theme-color" content="#000000" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv='ScreenOrientation' content='autoRotate:disabled' />
            </Head>
            <PagesHeadComp
                data={{
                    faviconURL: "/Icons/manifest_icons/logo.png", //URL of icon to be displayed besides the title tab.
                    title: "El Komander by El Patron", //Title to be displayed in the tab. In case of traslations needs to consider the marker and tag to be traslated, such as this sample.
                    description: "Landing page para el evento de El Komander patrocinado por El Patron Bar & Grill", //Description to be read by SEO for this page
                    keywords: "El Komander, El Patron", //Keywords to be read by SEO for this page
                }}
            />
            {/* <HeaderCompBoots /> */}
            <main className={styles.main}>
                <div className={styles.Image}>
                    <Image className={styles.Img} src={Clicked.image} fill alt={Clicked.title}/>
                </div>
                <article className={styles.article}>
                    <h1 className={styles.Subtitle}>{Clicked.title}</h1>
                    <div>{Clicked.content}</div>
                </article>
                <div className={styles.container}>
                    <article className={styles.articleHead}>
                        <h1>Adquiere aqui tus boletos</h1>
                    </article>
                    <form method="post" ref={form} className={styles.form}>
                        <label htmlFor="VIP">VIP Gold: $300 
                            <Image src="/Icons/AddIcon.png" width={35} height={35} alt="Agregar" />
                        </label>
                        <br/>
                            {/* <input name="VIP" type="text" id="vip"/> */}
                        <label htmlFor="Golden">VIP: $250 
                            <Image src="/Icons/AddIcon.png" width={35} height={35} alt="Agregar" />
                        </label>
                        <br/>
                            {/* <input name="Golden" type="email" placeholder="Enter your Email " id="golden"/> */}
                        <label htmlFor="Admision_General">General: $150 
                            <Image src="/Icons/AddIcon.png" width={35} height={35} alt="Agregar" />
                        </label>
                        <br/>
                            {/* <input name="Admision_General" type="text" placeholder="Boletos de seccion general" id="general"/> */}
                        <button type="submit" value="Send">Comprar</button>
                    </form>
                </div>
                <div>
                    Preguntas Frecuentes:
                    <br/>
                    <br/>
                    <h5>Pregunta 1</h5>
                    <p>Respuesta 1</p>
                    <br/>
                    <br/>
                    <h5>Pregunta 2</h5>
                    <p>Respuesta 2</p>
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
            />
            {TitleVisible !== null && <ShowTitle TitleConfig={TitleVisible} />}
        </>
    )
}