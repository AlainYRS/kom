import type { AppProps } from 'next/app';
import UserContext from '../complements/components/GlobalContextComp/UserContext';
import Script from 'next/script';
import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react";


export default function Komander({ Component, pageProps }: AppProps) {
    return (
      <>
        {/*Inicializa Google Analytics*/}
        <Script
          strategy="lazyOnload" 
          async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}></Script> {/*Google Analytics*/}
        <Script id="google-analytics-id" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}',{
              page_path: window.location.pathname,
            });
          `}
        </Script>

        <UserContext>
          <Component {...pageProps} />
        </UserContext>
      </>
    )
}