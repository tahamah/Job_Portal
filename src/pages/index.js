import NavBar from '@/components/HomePage/Navbar'
import Articles from '../components/HomePage/Articles'
import FindJob from '../components/HomePage/FindJob'
import HeroSection from '../components/HomePage/HeroSection'
import ArticlesSecond from '@/components/HomePage/ArticlesSecond'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Articles />
      <FindJob />
      <ArticlesSecond/>
    </div>
  )
}
