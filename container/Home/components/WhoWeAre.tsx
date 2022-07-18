import {
  Button,
  Grid,
  GridItem,
  Text,
  Image,
  HStack,
  Box,
} from '@chakra-ui/react'

const WhoWeAre = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={4} py="90px">
      <GridItem
        colSpan={{
          base: 6,
          lg: 3,
          xl: 2,
        }}
      >
        <Box position="relative">
          <Image
            w={{
              base: '200px',
              lg: '346px',
            }}
            src="/assets/images/home/AboutUs/whoweare.png"
            alt="whoweare"
          />

          <Box position="absolute" right="0" bottom="0px">
            <Text
              fontSize={{
                base: '16px',
                lg: '20px',
              }}
              fontWeight="900"
              lineHeight="50px"
              textTransform="uppercase"
              color="yellow_primary.1"
            >
              Trần quang huy
            </Text>
            <Text
              fontSize="16px"
              fontWeight="500"
              textTransform="capitalize"
              color="white"
            >
              Chairman
            </Text>
          </Box>
        </Box>
      </GridItem>
      <GridItem
        colSpan={{
          base: 6,
          lg: 3,
          xl: 4,
        }}
      >
        <Box
          paddingLeft={{
            base: '20px',
            lg: '46px',
          }}
          paddingRight={{
            base: '20px',
            lg: 0,
          }}
        >
          <Text
            fontSize="50px"
            lineHeight="70px"
            letterSpacing="1px"
            color="yellow_primary.1"
            fontWeight="900"
          >
            Who We Are?
          </Text>
          <Text
            marginTop="21px"
            color="textColor"
            fontSize="20px"
            fontWeight="400"
            lineHeight="28px"
          >
            VIKOTRA is an implemetation organization under{' '}
            <Text as="span" color="white" fontWeight="500">
              KOTRA VIETNAM (Korea Trade-Investment Promotion Agency
            </Text>{' '}
            is a state-funded trade and investment promotion organization
            operated by the Government of South Korea), operating in the
            Vietnamese and Korean markets in promoting culture, trade and
            investment between the two countries. VIKOTRA is also honored to be
            the organizer of VIKO 30, the largest program in Korea in 2022.
          </Text>
          <Text
            marginTop="41px"
            color="textColor"
            fontSize="20px"
            fontWeight="400"
            lineHeight="28px"
          >
            VIKO 30 is music festival organized by VIKOTRA to celebrate the 30th
            anniversary of diplomatic relations and strategic partnership
            between Vietnam and Korea. In order to further tighten the
            friendship, cultural exchange, music, cuisine of the two countries
            Vietnam - Korea.
          </Text>
          <HStack spacing="16px" marginTop="20px">
            <Image src="/assets/images/home/FellowShipClub/dot.svg" />
            <Text
              color="white"
              fontSize="20px"
              fontWeight="400"
              lineHeight="28px"
            >
              We hope to receive a lot of cooperation, companionship and support
              to make this program a resounding success.
            </Text>
          </HStack>
        </Box>
      </GridItem>
    </Grid>
  )
}

export default WhoWeAre
