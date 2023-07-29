import React, { useRef , useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image"
import PagesHeadComp from "@/complements/components/PagesHeadComp/PagesHeadComp";
import FooterComp from "@/complements/components/FooterComp/FooterComp";
import styles from '@/styles/GetInTouch.module.css'
import {HeaderCompBoots} from '@/complements/components/HeaderComp/HeaderCompBoots';
import emailjs from '@emailjs/browser';
import Developer from '@/complements/components/DeveloperComp/DeveloperComp';

export default function GetinTouch(){

    const form = useRef<any>();

    interface IContactForm {
        name: string;
        email: string;
        restaurant: string;
        subject: string;
        message: string;
    }

    const [contactForm, setContactForm] = useState<IContactForm>({ name: '', email: '', restaurant: '', subject: '', message: ''})

    const sendEmail = (e:any) => {
        e.preventDefault();
    
        emailjs.sendForm(
                'ayrs_portfolio',
                'template_mhp0fk2',
            form.current,
                '0XItIaup159uSnAFI')
          .then((result:any) => {
              alert('Message sent: ' + result.text);
              setContactForm({ name: '', email: '', restaurant:'', subject: '', message: ''})
          }, (error:any) => {
              console.log('Message error: ',error.text);
          });
      };

    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Landing page del Concierto del Komander organizado por El Patron Bar & Grill" />
                <link rel="icon" href="/Icons/manifest_icons/logo.png" />
                <meta name="theme-color" content="#000000" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv='ScreenOrientation' content='autoRotate:disabled' />
            </Head>
            <PagesHeadComp
                data={{
                    faviconURL: "/Icons/manifest_icons/logo.png", //URL of icon to be displayed besides the title tab.
                    title: "Quejas y Sugerencias", //Title to be displayed in the tab. In case of traslations needs to consider the marker and tag to be traslated, such as this sample.
                    description: "", //Description to be read by SEO for this page
                    keywords: "", //Keywords to be read by SEO for this page
                }}
            />
            <main className={styles.main}>
                <div className={styles.container}>
                    <article className={styles.articleHead}>
                        <h3>Buzon de quejas y sugerencias</h3>
                    </article>
                    <form method="post" ref={form} onSubmit={sendEmail} className={styles.form}>
                        <label htmlFor="user_name">Nombre: (Opcional)</label>
                            <input name="user_name" autoFocus type="text" placeholder="Ingresa tu nombre (opcional)" id="user_name" value={contactForm.name} onChange={(e)=>setContactForm({...contactForm, name: e.target.value})}/>
                        <label htmlFor="email">Email: (Opcional)</label>
                            <input name="email" autoFocus type="email" placeholder="Ingresa tu correo (opcional)" id="user_email" value={contactForm.email} onChange={(e)=>setContactForm({...contactForm, email: e.target.value})}/>
                        <label htmlFor="restaurant">Restaurante:*</label>
                            <input name="restaurant" type="text" placeholder="Sobre que restaurante?" id="restaurant" value={contactForm.restaurant} required onChange={(e)=>setContactForm({...contactForm, restaurant: e.target.value})}/>
                        <label htmlFor="subject">Tema:*</label>
                            <input name="subject" type="text" id="subject" placeholder="Cual es el tema?" value={contactForm.subject}  onChange={(e)=>setContactForm({...contactForm, subject: e.target.value})}/>
                        <label htmlFor="message">Mensaje:*</label>
                            <textarea name="message" id="message" rows={5} placeholder="Escribe tu mensaje aqui..." value={contactForm.message}  onChange={(e)=>setContactForm({...contactForm, message: e.target.value})}></textarea>
                        <button type="submit" value="Send">Enviar</button>
                    </form>
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