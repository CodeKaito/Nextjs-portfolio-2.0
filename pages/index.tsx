import type { NextPage } from "next";
import Head from 'next/head'
import About from '../components/About';
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from '../components/Hero';
import Projects from "../components/Projects";
 import Skills from "../components/Skills"; 

const Home: NextPage = () => {
  return (
    <>
    <div className="bg-[rgb(36,36,36)] text-white h-screen">
    <Head>
      <title>Kaito's portfolio</title>
    </Head>
    
    <Header />

    <section id="hero" className="bg-[rgb(36,36,36]">
      <Hero />
    </section>  

    </div>
    </>
  )
}

export default Home;