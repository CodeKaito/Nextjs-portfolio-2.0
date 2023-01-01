import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackGroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, The Name's Kaito",
                "A-Guy-Who-Loves-Matcha.tsx",
                "<ButLovesCodingMore />",
            ],
            loop: true,
            delaySpeed: 2000,
    });
  return (
  <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
    <BackGroundCircles />
    <div>
        <Image 
            className="relative rounded-full h-36 w-36 mx-auto object-cover max-w-full"
            src="/image.png" height={1080} width={1080} alt="image" />
    </div>
    
    <div className='z-20'>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Frontend Developer</h2>
        <h3 className="text-sm uppercase text-gray-600 pb-2 tracking-[17px]">UI/UX Developer</h3>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor="#F7AB0A" />
        </h1>
                
        <div className='pt-5'>
            <Link href='#about'>
                <button className='heroButton'>About</button>
            </Link>
            <Link href='#experience'>
                <button className='heroButton'>Experience</button>
            </Link>
            <Link href='#skills'>
                <button className='heroButton'>Skills</button>
            </Link>
            <Link href='#projects'>
                <button className='heroButton'>Projects</button>
            </Link>
        </div>
    </div>
  </div>
  );
}