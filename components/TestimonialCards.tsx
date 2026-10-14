"use client"
import {cn} from "@/lib/utils"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const musicTestimonials = [
  {
    quote:
      'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
    name: 'Emily Taylor',
    title: 'Violin Student',
  },
  {
    quote:
      'Learning guitar here has been an amazing experience. The lessons are engaging, and my instructor makes even difficult techniques easy to understand.',
    name: 'James Wilson',
    title: 'Guitar Student',
  },
  {
    quote:
      'I always dreamed of becoming a confident singer. With personalized vocal lessons and constant encouragement, I have improved my voice and stage confidence.',
    name: 'Sophia Martinez',
    title: 'Vocal Student',
  },
  {
    quote:
      'The piano lessons helped me understand music theory while making learning enjoyable. I can now play my favorite songs and even create my own melodies.',
    name: 'Daniel Anderson',
    title: 'Piano Student',
  },
  {
    quote:
      'The music production course gave me the skills and confidence to create my own tracks. The practical sessions made every lesson exciting and valuable.',
    name: 'Olivia Brown',
    title: 'Music Production Student',
  },
  {
    quote:
      'Joining this music school completely changed my understanding of rhythm and performance. Practicing with other musicians has made me a better drummer.',
    name: 'Ethan Davis',
    title: 'Drum Student',
  },
  {
    quote:
      'The instructors explain music theory in a simple and practical way. I have learned to compose original melodies and understand music more deeply.',
    name: 'Ava Robinson',
    title: 'Music Composition Student',
  },
  {
    quote:
      'Performing with other students has helped me overcome stage fear and improve my teamwork. Every rehearsal brings a new opportunity to grow as a musician.',
    name: 'Noah Thompson',
    title: 'Band Performance Student',
  },
];

const TestimonialCards = () => {
  return (
   <section className="relative flex min-h-[400px] w-full flex-col items-center justify-center overflow-hidden dark:bg-black dark:bg-grid-white/[0.2]">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:bg-[radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      <h2 className="z-10 mb-8 text-center text-3xl font-bold">
        Hear Our Harmony: Voices of Success
      </h2>

      <div className="z-10 flex w-full justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  )
}

export default TestimonialCards
