import React, { useRef , useState } from "react";
import Image from "next/image";
import Head from "next/head";
import PagesHeadComp from "@/complements/components/PagesHeadComp/PagesHeadComp";
import FooterComp from "@/complements/components/FooterComp/FooterComp";
import styles from '@/styles/komander.module.css'
import {HeaderCompBoots} from '@/complements/components/HeaderComp/HeaderCompBoots';
import ShowTitle from "@/complements/components/ShowTitle/ShowTitle";

interface IClicked{
    title: string
    image:string,
    content: any,
    Sponsor: string,
}

export default function Komander(){
    const [TitleVisible, setTitleVisible] = useState<any>(null)
    const [CarTickets, setCarTickets] = useState<any>(
        {
            VIPGold: 0,
            VIP: 0,
            General: 0,
        }
    )

    const form = useRef<any>();

    const[Clicked,setClicked] = useState<IClicked>({
        title: 'El Komander',
        image:'/Images/Komander.jpg',
        Sponsor: '/Icons/manifest_icons/MaskableLogo.png',
        content:
        <>
            <p className={styles.Description} style={{position: 'relative', textAlignLast:'initial'}}>¡Noche de música imperdible! Únete a &quot;El Komander&quot; en &quot;El Patron Bar & Grill&quot;, Leamington, ON, el 19 de agosto de 2023. ¡No te lo pierdas!</p>
            <ul  className={styles.ULDesc}>
                ¡Prepárate para una noche épica de música en vivo! El 19 de agosto de 2023, &quot;El Komander&quot; tomará el escenario de &quot;El Patron Bar & Grill&quot; en 205 Talbot St W, Leamington, ON N8H 1N8. No te pierdas esta oportunidad única de vivir la pasión y la energía de uno de los mejores grupos de música. ¡Únete a nosotros y déjate llevar por el ritmo inigualable de &quot;El Komander&quot;! ¡Te esperamos con los brazos abiertos!
                <br/>
                <br/>
                Get ready for an epic night of live music! On August 19, 2023, &quot;El Komander&quot; will take the stage at &quot;El Patron Bar & Grill&quot; located at 205 Talbot St W, Leamington, ON N8H 1N8. Don&apos;t miss this unique opportunity to experience the passion and energy of one of the best music groups. Join us and let yourself be carried away by the unmatched rhythm of &quot;El Komander&quot;! We look forward to welcoming you with open arms!
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
            <main className={styles.main}>
                <div className={styles.Image}>
                    <Image className={styles.Img} src={Clicked.image} fill alt={Clicked.title}/>
                    <div className={styles.Sponsor}>
                        <Image className={styles.SponsorLogo} src={Clicked.Sponsor} fill alt="Logo Patrocinador"/>
                    </div>
                </div>
                <article className={styles.article}>
                    <h1 className={styles.Subtitle}>{Clicked.title}</h1>
                    <div>{Clicked.content}</div>
                </article>
                <div className={styles.container}>
                    <article className={styles.articleHead}>
                        <h1>Adquiere aqui tus boletos</h1>
                    </article>
                    <form method="post" id="ticketsSeller" ref={form} className={styles.form}>
                        <div className={styles.ticketsContainer}>
                            <label htmlFor="VIPGold">VIP Gold: $300 </label>
                            <div>
                                <p onClick={()=>{CarTickets.VIPGold > 0 && setCarTickets({...CarTickets, VIPGold: CarTickets.VIPGold - 1})}}> - </p>
                                <p>{CarTickets.VIPGold}</p>
                                <p onClick={()=>setCarTickets({...CarTickets, VIPGold: CarTickets.VIPGold + 1})}> + </p>
                            </div>
                        </div>
                        <div className={styles.ticketsContainer}>
                            <label htmlFor="VIP">VIP: $250 </label>
                            <div>
                                <p onClick={()=>{CarTickets.VIP > 0 && setCarTickets({...CarTickets, VIP: CarTickets.VIP - 1})}}> - </p>
                                <p>{CarTickets.VIP}</p>
                                <p onClick={()=>setCarTickets({...CarTickets, VIP: CarTickets.VIP + 1})}> + </p>
                            </div>
                        </div>
                        <div className={styles.ticketsContainer}>
                            <label htmlFor="General">General: $300 </label>
                            <div>
                                <p onClick={()=>{CarTickets.General > 0 && setCarTickets({...CarTickets, General: CarTickets.General - 1})}}> - </p>
                                <p>{CarTickets.General}</p>
                                <p onClick={()=>setCarTickets({...CarTickets, General: CarTickets.General + 1})}> + </p>
                            </div>
                        </div>
                        <button type="submit" value="Send">Comprar</button>
                    </form>
                </div>
                <div className={styles.faqs}>
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