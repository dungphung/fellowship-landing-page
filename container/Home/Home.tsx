import { Box, Text, VStack } from '@chakra-ui/react'

import NFTCollections from './components/NFTCollections'
import FellowShipClubSection from './components/FellowShipClubSection'
import WhoWeAre from './components/WhoWeAre'
import IntroSection from './components/IntroSection'
import MainSection from './components/MainSection'
import SecondSection from './components/SecondSection'
import Footer from './components/Footer'
import Header from './Header'

const Home = () => {
  return (
    <Box overflow="hidden">
      <Header />
      <Box
        bgImage={{
          base: '/assets/images/home/9.png',
          '2xl': '/assets/images/home/9@3x.png',
        }}
        bgSize={{
          base: '813px 1106px',
          lg: '613px 900px',
          xl: '813px 1106px',
        }}
        bgRepeat="no-repeat"
      >
        <MainSection />
        <SecondSection />
      </Box>

      <NFTCollections />
      <FellowShipClubSection />
      <Box
        px={{
          base: '32px',
          xl: '92px',
        }}
      >
        <WhoWeAre />
      </Box>
      <IntroSection />
      <Footer />
    </Box>
  )
}

export default Home
