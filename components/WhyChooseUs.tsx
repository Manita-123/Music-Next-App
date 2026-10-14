"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const musicCourses = [
  {
    title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
    description:
      'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
  },
  {
    title: 'Master the Guitar: From Beginner to Performer',
    description:
      'Learn to play the guitar with confidence through structured lessons, practical exercises, and expert guidance. Explore chords, strumming patterns, fingerstyle techniques, and your favorite songs while developing your own musical style.',
  },
  {
    title: 'Find Your Voice: Professional Singing Lessons',
    description:
      'Discover the power of your voice with personalized vocal training. Improve your pitch, breathing, vocal range, and singing techniques while learning to express emotions and perform your favorite songs with confidence.',
  },
  {
    title: 'Feel the Rhythm: Learn Piano and Keyboard',
    description:
      'Build a strong musical foundation through engaging piano and keyboard lessons. Learn music theory, scales, chords, rhythm, and melodies while developing coordination and the skills needed to play beautiful music.',
  },
  {
    title: 'Create Your Own Beats: Music Production Essentials',
    description:
      'Turn your musical ideas into reality with hands-on music production training. Learn beat-making, digital audio workstations, sound design, recording, and mixing techniques to create your own unique tracks.',
  },
  {
    title: 'Make Every Beat Count: Drums and Percussion',
    description:
      'Develop your timing, coordination, and rhythmic skills through exciting drum lessons. Explore essential drumming techniques, practice different musical styles, and learn how to perform confidently as part of a band.',
  },
  {
    title: 'Understand Music: Theory and Composition',
    description:
      'Explore the building blocks of music through practical lessons in notation, harmony, scales, and composition. Develop your creativity and learn how to write original melodies and arrangements with confidence.',
  },
  {
    title: 'Play Together: Band Performance and Collaboration',
    description:
      'Experience the joy of making music with others. Improve your ensemble skills, stage presence, timing, and musical communication while collaborating with fellow musicians to create unforgettable performances.',
  },
];



const WhyChooseUs = () => {
  return (
    <div className="bg-gray-800">
      <StickyScroll content={musicCourses}/>
    </div>
  )
}

export default WhyChooseUs
