"use client";
import React from 'react'

import { EmblaOptionsType } from 'embla-carousel'
import MotionDiv from "@/components/motion-div";
import useEmblaCarousel from 'embla-carousel-react'

import '../css/embla.css'
import EmblaCarousel from '@/components/EmblaCarousel';

import travelImage from "@/assets/images/travel.png";
import riscImage from "@/assets/images/risc.png";
import proxyImage from "@/assets/images/proxy-server.png";

const OPTIONS: EmblaOptionsType = { containScroll: false }
const SLIDE_COUNT = 2

const SLIDES = [
    {
      image: travelImage,
      title: 'Travel Memory',
      description: `• Developed a travel-centric platform with MERN Stack (MongoDB, Express.js, React.js, Node.js). Integrated 15+ RESTful APIs, enabling features like picture or content sharing and location pinpointing.
                    • Crafted responsive UI components with React, utilizing custom hooks for efficient state management.
                    • Implemented OAuth2 for user authentication and integrated the Google Map API for map-based experiences.`,
      stack: 'Node.js, React, Express.js, MongoDB, OAuth2, Google Maps APIs'
    },

    {
        image: travelImage,
        title: 'Amazon & UPS System Simulation',
        description: `• Developed a comprehensive E-commerce and logistics integration system using Django and Bootstrap, simulating order placement, truck dispatching, and delivery for 5,000 orders.
                        • Implemented PostgreSQL as the primary database, utilizing hashing and salting techniques for password security. Leveraged Django’s ORM to reduce code volume by 30%, improving data management efficiency.
                        • Employed C++ to engineer performance-critical components, communicating seamlessly with the world simulator and ’Amazon’ service modules. Designed a TCP-based communication protocol using Google Protocol Buffer for data serialization, achieving a ~40% data size reduction.
                        • Utilized Docker for containerized deployment, ensuring a consistent deployment environment.`,
        stack: 'C++, Python, Protocol Buffer, Django, PostgreSQL, Docker, Bootstrap'
      },
    
    {
        image: riscImage,
        title: 'RISC Game',
        description: `• Architected and implemented a RISC-simulation game using design patterns like Singleton, Observer, and Factory. Developed complex features with Java, including territory conquest, alliance formation, and resource management .etc.
                      • Led a team of 5 using Agile methodologies, conducting weekly sprints, and regular refactoring sessions. Maintained high standards through peer code reviews and Git.
                      • Adopted Test-Driven Development (TDD), writing over 200 unit tests with JUnit and Mockito, achieving 98% code coverage, minimizing bugs and maintenance overhead.
                      • Implemented a 4-stage GitLab CI/CD pipeline, automating build, test, staging, and deployment processes, reducing deployment time by 12%. `,
        stack: 'Java, Design Patterns, CI/CD, JUnit, Mockito'
      },

      {
        image: proxyImage,
        title: 'HTTP Caching Proxy Server',
        description: `• Built an HTTP Caching Proxy Server in C++ using epoll for efficient I/O event notification to handle GET, POST, and CONNECT requests.
                    • Implemented the Least Recently Used (LRU) caching mechanism with a custom data structure combining a hash table for quick lookups and a doubly-linked list for maintaining recency.
                    • Added concurrency support with a multi-threading model, ensuring thread-safety for diverse endpoint requests. Managed cache access using mutex locks and atomic operations to prevent race conditions.
                    • Benchmarked server performance using Postman, debugged potential bottlenecks with GDB, and troubleshooted potential memory leaks with Valgrind. `,
        stack: ' C++, HTTP, Socket Programming, Systems Programming, Linux'
      },
      
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