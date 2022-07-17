import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'

import HomeContainer from '../container/Home/Home'

const Home: NextPage = () => {
  return (
    <Box bg="#1D1D1D">
      <HomeContainer />
    </Box>
  )
}

export default Home
