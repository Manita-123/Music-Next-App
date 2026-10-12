import { Spotlight } from './spotlight'
import Link from 'next/link'
import { Button } from "./moving-border";

function HeroSection() {
  return (
    <div className='h-auto md:h-160 rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
      <div className="p-4 relative z-10 w-full text-center">
        <Spotlight
        className="-top-10 left-0 md:-top-20 md:left-60"
        fill="blue"
      />
        <h1 className='mt-20 md:mt-0 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400'>Master the art of music</h1>
        <p className='mt-4 font-normal text-lg md:text-xl text-netural-300 max-w-lg mx-auto'>Dive into oour comprehensive music courses and transform your musical journey today. Weather you&apos;re a begineer or looking to refine your skills, join us to unlock your true potential.</p>

        <div className="mt-4">
          <Link href={"/courses"}> <Button borderRadius="1.75rem" className='bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800'> Explore Courses </Button> </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
