"use client";
import React from 'react'

import { EmblaOptionsType } from 'embla-carousel'
import MotionDiv from "@/components/motion-div";
import useEmblaCarousel from 'embla-carousel-react'

import '../css/embla.css'
import EmblaCarousel from '@/components/EmblaCarousel';

import javascriptIcon from "@/assets/icons/javascript.png";
import travelImage from "@/assets/images/travel.png"

const OPTIONS: EmblaOptionsType = { containScroll: false }
const SLIDE_COUNT = 2

const SLIDES = [
    {
      imageUrl: travelImage,
      title: 'Travel Memory',
      description: 'Explore the world with our travel guide.'
    },
    
    {
      imageUrl: javascriptIcon,
      title: 'Another Project',
      description: 'Description of another project.'
    }
  ]
  

export default function projects() {
    const [emblaRef] = useEmblaCarousel()

    return (
        <section
            className="my-4 mb-28 flex flex-col items-center gap-5 text-center md:mt-8"
            id="projects"
        >
            <MotionDiv delayOffset={0.2}>
                <h2>Projects</h2>
            </MotionDiv>
            <MotionDiv delayOffset={0.4}>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </MotionDiv>
        </section>
    );
}