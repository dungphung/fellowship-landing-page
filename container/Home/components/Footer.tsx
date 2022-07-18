import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box
      position="relative"
      bgImage="/assets/images/home/11.png"
      bgPosition="left center"
      bgRepeat="no-repeat"
      bgSize={{
        base: '100% 489px',
      }}
      bgColor="rgba(0, 0, 0, 0.4)"
    >
      <Box
        bgImage="/assets/images/home/10.png"
        bgPosition="right center"
        bgRepeat="no-repeat"
        bgSize={{
          base: '50% 489px',
        }}
        h="800px"
        bgColor="rgba(0, 0, 0, 0.4)"
      >
        <VStack>
          <Image
            src="/assets/images/home/8.png"
            w="700px"
            h="600px"
            position="absolute"
            top="15%"
          />
          <Box
            position="absolute"
            top={{
              base: '35%',
              lg: '40%',
            }}
          >
            <Text
              fontSize={{
                base: '30px',
                lg: '40px',
              }}
              lineHeight="35px"
              color="yellow_primary.1"
              fontWeight="700"
              textTransform="uppercase"
              textAlign="center"
            >
              FOLLOW NOW
            </Text>
            <Text
              fontWeight="400"
              color="white"
              textTransform="uppercase"
              fontSize="14px"
              w={{
                base: '300px',
                lg: '497px',
              }}
              mt="23px"
              textAlign="center"
            >
              Đăng ký để nhận các thông tin cập nhật về Bộ sưu tập NFTvà các sự
              kiện mở bán trong thời gian tới
            </Text>
            <HStack>
              <Text
                fontWeight="700px"
                fontSize="17px"
                lineHeight="20px"
                textAlign="center"
                color="white"
              >
                Email
              </Text>
              <Input
                color="white"
                borderBottom="1px solid white"
                borderTop="none"
                borderLeft="none"
                borderRight="none"
                borderRadius={0}
              />
            </HStack>
            <VStack mt="40px">
              <Button
                backgroundColor="transparent !important"
                border="1px solid white"
                fontSize="14px"
                lineHeight="20px"
                letterSpacing="0.1em"
                color="white"
              >
                GỬI
              </Button>
            </VStack>

            <VStack mt="50px">
              <Text
                fontSize="14px"
                color="white"
                lineHeight="20px"
                textAlign="center"
                letterSpacing="0.1em"
              >
                CONNECT
              </Text>
              <HStack>
                <Image src="/assets/images/home/instagram.svg" />
                <Box
                  bg="white"
                  w="21px"
                  h="21px"
                  borderRadius="20px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flex={1}
                >
                  <Image
                    w="14px"
                    h="14px"
                    src="/assets/images/home/twitter.svg"
                  />
                </Box>
              </HStack>
              <HStack>
                <Image src="/assets/images/home/linkedin.svg" />
                <Box
                  bg="white"
                  w="21px"
                  h="21px"
                  borderRadius="20px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flex={1}
                >
                  <Image
                    w="14px"
                    h="14px"
                    src="/assets/images/home/facebook.svg"
                  />
                </Box>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  )
}

export default Footer
