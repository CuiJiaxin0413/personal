"use client";
import React from 'react'

import { EmblaOptionsType } from 'embla-carousel'
import MotionDiv from "@/components/motion-div";
import useEmblaCarousel from 'embla-carousel-react'

import '../css/embla.css'
import EmblaCarousel from '@/components/EmblaCarousel';

import travelImage from "@/assets/images/travel.png";
import riscImage from "@/assets/images/risc.jpg";

const OPTIONS: EmblaOptionsType = { containScroll: false }
const SLIDE_COUNT = 2

const SLIDES = [
    {
      image: travelImage,
      title: 'Travel Memory',
      description: 'Explore the world with our travel guide.',
      stack: 'Node.js, React, Express.js, MongoDB, OAuth2, Google Maps APIs'
    },
    
    {
        image: riscImage,
        title: 'RISC Game',
        description: `• Designed a RISC-simulation game, integrating pivotal design patterns such as Singleton, Observer, and Factory to optimize game mechanics; Implemented intricate game features with Java, including conquering territories, forging alliances, and managing resources.
                      • Established a 4-stage GitLab runner for CI/CD, boosting the efficiency of development, testing, and integration by 20%.
                      • Executed thorough unit tests using JUnit and Mockito, achieving an impressive code coverage of over 98%.
                      • Fostered enhanced team collaboration via Git and maintained product excellence with consistent code reviews.`,
        stack: 'Java · Design Patterns · Continuous Integration and Continuous Delivery (CI/CD) · JUnit · Mockito'
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