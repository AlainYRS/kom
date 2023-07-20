import React, { useRef , useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image"
import PagesHeadComp from "@/complements/components/PagesHeadComp/PagesHeadComp";
import FooterComp from "@/complements/components/FooterComp/FooterComp";
import styles from '@/styles/GetInTouch.module.css'
import {HeaderCompBoots} from '@/complements/components/HeaderComp/HeaderCompBoots';
import emailjs from '@emailjs/browser';

export default function GetinTouch(){

    const form = useRef<any>();

    interface IContactForm {
        name: string;
        email: string;
        subject: string;
        message: string;
    }

    const [contactForm, setContactForm] = useState<IContactForm>({ name: '', email: '', subject: '', message: ''})

    const sendEmail = (e:any) => {
        e.preventDefault();
    
        emailjs.sendForm(
                'ayrs_portfolio',
                'template_mhp0fk2',
            form.current,
                '0XItIaup159uSnAFI')
          .then((result:any) => {
              alert('Message sent: ' + result.text);
              setContactForm({ name: '', email: '', subject: '', message: ''})
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
                    title: "El Patron - Contact", //Title to be displayed in the tab. In case of traslations needs to consider the marker and tag to be traslated, such as this sample.
                    description: "", //Description to be read by SEO for this page
                    keywords: "", //Keywords to be read by SEO for this page
                }}
            />
            {/* <HeaderCompBoots /> */}
            <main className={styles.main}>
                <div className={styles.container}>
                    <article className={styles.articleHead}>
                        <h1>Contact</h1>
                        <Link href={"/"} className="navbar-brand">                
                            <Image className="MenuLogo" src={'./Images/logo.png'} fill alt="El Patron Logo"/>
                        </Link>
                    </article>
                    <form method="post" ref={form} onSubmit={sendEmail} className={styles.form}>
                        <label htmlFor="user_name">Name / Name:*</label>
                            <input name="user_name" autoFocus type="text" placeholder="Enter your First Name " id="name" required value={contactForm.name} onChange={(e)=>setContactForm({...contactForm, name: e.target.value})}/>
                        <label htmlFor="user_email">Email:*</label>
                            <input name="user_email" type="email" placeholder="Enter your Email " id="email" required value={contactForm.email}  onChange={(e)=>setContactForm({...contactForm, email: e.target.value})}/>
                        <label htmlFor="subject">Tema / Subject:</label>
                            <input name="subject" type="text" id="subject" value={contactForm.subject}  onChange={(e)=>setContactForm({...contactForm, subject: e.target.value})}/>
                        <label htmlFor="message">Mensaje / Message:</label>
                            <textarea name="message" id="message" rows={5} placeholder="Type your Message Here..." value={contactForm.message}  onChange={(e)=>setContactForm({...contactForm, message: e.target.value})}></textarea>
                        <button type="submit" value="Send">Send</button>
                    </form>
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
        </>
    )
}