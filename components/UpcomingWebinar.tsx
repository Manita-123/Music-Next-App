"use client"
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

export const musicCourses = [
  {
    title: "Learn Guitar from Scratch",
    description:
      "Master guitar fundamentals, chords, strumming patterns, and popular songs with step-by-step lessons.",
    slug: "learn-guitar-from-scratch",
    isFeatured: true,
  },
  {
    title: "Piano for Beginners",
    description:
      "Learn piano basics, music theory, hand coordination, and melodies through interactive practice sessions.",
    slug: "piano-for-beginners",
    isFeatured: true,
  },
  {
    title: "Mastering Music Production",
    description:
      "Explore digital audio workstations, sound design, mixing, and music arrangement to create professional tracks.",
    slug: "mastering-music-production",
    isFeatured: true,
  },
  {
    title: "Vocal Training and Singing",
    description:
      "Improve your vocal range, breathing techniques, pitch control, and singing confidence with guided exercises.",
    slug: "vocal-training-and-singing",
    isFeatured: false,
  },
  {
    title: "Learn Violin Essentials",
    description:
      "Discover violin techniques, bow control, finger positioning, and musical expression from beginner to intermediate level.",
    slug: "learn-violin-essentials",
    isFeatured: false,
  },
  {
    title: "Music Theory Fundamentals",
    description:
      "Understand notes, scales, chords, rhythm, and harmony to build a strong foundation in music.",
    slug: "music-theory-fundamentals",
    isFeatured: false,
  },
  {
    title: "Electronic Music Composition",
    description:
      "Create electronic music using synthesizers, MIDI sequencing, drum programming, and modern composition techniques.",
    slug: "electronic-music-composition",
    isFeatured: true,
  },
  {
    title: "Acoustic Guitar Fingerstyle",
    description:
      "Learn fingerpicking patterns, melodic arrangements, and advanced acoustic guitar techniques for expressive performances.",
    slug: "acoustic-guitar-fingerstyle",
    isFeatured: false,
  },
  {
    title: "Drumming and Rhythm Mastery",
    description:
      "Develop timing, coordination, rhythmic accuracy, and essential drumming patterns across different musical genres.",
    slug: "drumming-and-rhythm-mastery",
    isFeatured: false,
  },
  {
    title: "Songwriting and Composition",
    description:
      "Learn to write meaningful lyrics, create melodies, structure songs, and develop your unique musical style.",
    slug: "songwriting-and-composition",
    isFeatured: true,
  },
];

const UpcomingWebinar = () => {
  return (
    <div className='p-12 bg-gray-900'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className='text-center'>
            <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>featured webinars</h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance Your Musical Journey</p>
        </div>
        <div className='mt-10 '>
            <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={musicCourses.map(webinar => (
        {
            title:webinar.title,
            description: webinar.description,
            link: '/'
        }
      ))} />
    </div>
        </div>
        <div className='mt-10 text-center'>
            <Link href={"/"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"> View All Webinrs
            </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinar
