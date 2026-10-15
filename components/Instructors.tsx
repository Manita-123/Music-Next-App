"use client"
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip';

const instructors = [
  {
    id: 2,
    name: "James Anderson",
    designation: "Guitar Instructor",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Emily Carter",
    designation: "Piano and Music Theory Expert",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Michael Roberts",
    designation: "Music Producer and Composer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Olivia Bennett",
    designation: "Violin Instructor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Daniel Wilson",
    designation: "Drums and Percussion Instructor",
    image:  "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const Instructors = () => {
  return (
    <div className='min-h-screen relative overflow-hidden flex items-center justify-center'>
      <WavyBackground className='mx-auto w-full flex flex-col items-center justify-center max-w-7xl '>
        <h2 className='text-6xl md:text-7xl mb-7 lg:text-7xl font-bold'>Meet Our Instructors</h2>
        <p className='text-md md:text-xl text-white text-center mb-4'>Discover the talented professionals who will guide your musical journey</p>

        <div className="flex flex-row items-center mb-10 w-full justify-center">
            <AnimatedTooltip items={instructors}/>
        </div>
      </WavyBackground>
    </div>
  )
}

export default Instructors
