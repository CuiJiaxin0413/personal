"use client";
import React from 'react'
import ReactDOM from 'react-dom/client'

import { EmblaOptionsType } from 'embla-carousel'
import MotionDiv from "@/components/motion-div";
import useEmblaCarousel from 'embla-carousel-react'

import '../css/embla.css'
import EmblaCarousel from '@/components/EmblaCarousel';

const OPTIONS: EmblaOptionsType = { containScroll: false }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function projects() {
    const [emblaRef] = useEmblaCarousel()

    return (
        <section
            className="my-4 mb-28 flex flex-col items-center gap-5 text-center md:mt-8"
            id="projects"
        >
            <MotionDiv>
                <h2>Projects</h2>
            </MotionDiv>
            <MotionDiv>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </MotionDiv>
        </section>
    );
}