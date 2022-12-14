import { Suspense } from "react";

//Fonts
import { Barlow } from "@next/font/google";
const barlow = Barlow({ weight: "200", subsets: ['latin'] });

//Components
import Footer from '/app/components/footer'
import Header from '/app/components/header'

//Styles
import styles from "/app/styles/min/Root.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en-EN" className={barlow.className}>
      <body className={styles.container}>
        <header> <Suspense fallback={"Loading Header"}><Header /></Suspense></header>
        <main>{children}</main>
        <footer><Suspense  fallback={"Loading Footer"}><Footer /></Suspense></footer>
      </body>
    </html>
  );
}
