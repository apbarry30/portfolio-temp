import Preloader from "@/src/components/Preloader";
import Switcher from "@/src/components/Switcher";
import SalimovHead from "@/src/SalimovHead";
import "@/styles/globals.css";
import { Fragment } from "react";
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
    <SalimovHead />
    <Switcher />
    <Preloader />
    <Component {...pageProps} />
  </Fragment>
  )
}

export default MyApp
