import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Link } from 'react-scroll'

const MainSection = () => {
  return (
    <Box h="100vh">
      <Grid
        pt={{
          base: '136px',
        }}
        templateColumns="repeat(6, 1fr)"
        paddingRight={{
          base: 0,
          lg: '90px',
        }}
      >
        <GridItem
          order={{
            base: 2,
            lg: 1,
          }}
          colSpan={{
            base: 6,
            lg: 4,
          }}
          position="relative"
        >
          <Image
            src="/assets/images/home/1.png"
            w={{
              base: '100%',
              lg: '530px',
              xl: '630px',
              xxl: '730px',
            }}
            h={{
              base: '100%',
              lg: '500px',
              xxl: '608px',
            }}
            alt="co"
          />
          <Text
            fontSize={{
              base: '30px',
              lg: '45px',
              xl: '65px',
            }}
            fontWeight="700"
            letterSpacing="0.38em"
            color="white"
            transform="rotate(-45deg)"
            position="absolute"
            bottom={{
              base: 0,
              xl: -10,
            }}
            right={10}
            display={{
              base: 'none',
              lg: 'block',
            }}
          >
            NFT FELLOWSHIP
          </Text>
        </GridItem>
        <GridItem
          order={{
            base: 1,
            lg: 2,
          }}
          colSpan={{
            base: 6,
            lg: 2,
          }}
        >
          <VStack
            h="100%"
            spacing="26px"
            alignItems="center"
            justifyContent="center"
            px={{
              base: '20px',
              lg: 0,
            }}
          >
            <Text
              fontSize="40px"
              lineHeight="41px"
              fontWeight="700"
              letterSpacing="0.19em"
              textAlign="center"
              color="yellow_primary.1"
              w={{
                base: '100%',
                lg: '351px',
              }}
            >
              THE NFT FELLOWSHIP
            </Text>
            <Text
              marginTop="21px"
              color="white"
              fontSize="14px"
              fontWeight="400"
              lineHeight="20px"
              textAlign="center"
              w={{
                base: '100%',
                lg: '458px',
              }}
              fontFamily="SVN-Avo"
            >
              Bộ sưu tập NFT quyền lực nhất dành cho những nhân vật đóng góp và
              mong muốn đóng góp cho sự phát triển kinh tế văn hóa giữa hai quốc
              gia Việt Nam Hàn Quốc
            </Text>
            <HStack spacing="25px">
              <Button
                bg="transparent !important"
                border="1px solid #FFFFFF !important"
                color="white"
                fontFamily="SVN-Avo"
                w={{
                  base: '100%',
                  lg: '203px',
                }}
                fontWeight="400"
              >
                Lịch sử hình thành
              </Button>
              <Button
                bg="transparent !important"
                border="1px solid #FFFFFF !important"
                color="white"
                fontFamily="SVN-Avo"
                fontWeight="400"
                w={{
                  base: '100%',
                  lg: '193px',
                }}
              >
                Bộ sưu tập NFT
              </Button>
            </HStack>
          </VStack>
        </GridItem>
      </Grid>
      <HStack
        justifyContent="center"
        mt={{
          base: 5,
          lg: 0,
        }}
      >
        <Link to="story" spy={true} smooth={true}>
          <Image src="/assets/images/home/arrow-down.png" alt="arrow-down" />
        </Link>
      </HStack>
    </Box>
  )
}

export default MainSection
