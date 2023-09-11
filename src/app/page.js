import Image from 'next/image'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Carousel from '@/components/carousel'
import Invite from '@/components/invite'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-white pt-4 w-full h-full">
     <div className='px-24'>
        <Header />
        <Hero />
     </div>
     <Carousel />
     <Invite />
     <Footer />
    </main>
  )
}
