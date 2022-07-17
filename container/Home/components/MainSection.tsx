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

const MainSection = () => {
  return (
    <Box h="100vh">
      <Grid
        pt={{
          base: '136px',
        }}
        templateColumns="repeat(6, 1fr)"
        paddingRight="90px"
      >
        <GridItem colSpan={4} position="relative">
          <Image
            src="/assets/images/home/1.png"
            w={{
              base: '730px',
              lg: '530px',
              xl: '730px',
            }}
            h={{
              base: '608px',
              lg: '500px',
              xl: '608px',
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
            bottom={0}
          >
            NFT FELLOWSHIP
          </Text>
        </GridItem>
        <GridItem colSpan={2}>
          <VStack
            h="100%"
            spacing="26px"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              fontSize="40px"
              lineHeight="41px"
              fontWeight="700"
              letterSpacing="0.19em"
              textAlign="center"
              color="yellow_primary.1"
              w="351px"
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
              w="458px"
            >
              Bộ sưu tập NFT quyền lực nhất dành cho những nhân vật đóng góp và
              mong muốn đóng góp cho sự phát triển kinh tế văn hóa giữa hai quốc
              gia Việt Nam Hàn Quốc
            </Text>
            <HStack>
              <Button
                bg="transparent !important"
                border="1px solid #FFFFFF !important"
                color="white"
              >
                Lịch sử hình thành
              </Button>
              <Button
                bg="transparent !important"
                border="1px solid #FFFFFF !important"
                color="white"
              >
                Bộ sưu tập NFT
              </Button>
            </HStack>
          </VStack>
        </GridItem>
      </Grid>
      <HStack justifyContent="center">
        <Image src="/assets/images/home/arrow-down.png" alt="arrow-down" />
      </HStack>
    </Box>
  )
}

export default MainSection
