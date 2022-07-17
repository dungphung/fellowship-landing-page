import { Box, HStack, SimpleGrid, Text, VStack, Image } from '@chakra-ui/react'

const SecondSection = () => {
  return (
    <Box marginTop="120px">
      <Box
        bgImage={{
          base: '/assets/images/home/2@x1.png',
        }}
        bgRepeat="no-repeat"
        bgPosition="top right"
        bgSize={{
          base: '500px 1066px',
          xl: '700px 1266px',
        }}
      >
        <VStack>
          <Text
            fontStyle="italic"
            fontSize="22px"
            lineHeight="31px"
            textAlign="center"
            color="yellow_primary.1"
            w="700px"
          >
            Hơn 30 năm gắn kết và phát triển, mối quan hệ giữa hai nước Việt Nam
            và Hàn Quốc ngày một vững mạnh. Các cơ hội đầu tư, giao thương kinh
            tế, xuất khẩu văn hóa đã thúc đẩy và tạo ra những con số ấn tượng
            với 74.1 tỷ $ và hơn 9000 dự án đã thể hiện cho mối quan hệ này.
            Nhiều các hoạt động hợp tác cho các doanh nhân/nghệ sĩ/ chính trị
            gia các cơ hội để đại diện.
          </Text>
        </VStack>

        <SimpleGrid columns={2} marginTop="300px" ml="85px">
          <Box flex={1}>
            <VStack spacing="22px">
              <Text
                letterSpacing="0.26em"
                w={{
                  base: '409px',
                  lg: '409px',
                  xl: '509px',
                }}
                fontWeight="700"
                fontSize="40px"
                lineHeight="41px"
                textAlign="center"
                color="yellow_primary.1"
              >
                THE VIKO FELLOWSHIP NFTs
              </Text>
              <Text
                w={{
                  lg: '509px',
                  xl: '671px',
                }}
                fontSize="22px"
                color="white"
                lineHeight="31px"
                fontWeight="400"
                textAlign="center"
              >
                THE VIKO FELLOWSHIP NFTs là tập hợp các bộ sưu tập chia thành 7
                nhóm khác nhau thể hiện cho giá trị của tình hữu nghị giữa hai
                quốc gia, dân tộc bao gồm cả Văn Hóa / Chính Trị / Kinh Tế -
                chứa đựng những giá trị tinh túy được tạo ra giữa mối quan hệ
                đặc biệt này.
              </Text>
            </VStack>
          </Box>
          <Box flex={1} />
        </SimpleGrid>

        <Box
          bgImage={{
            base: '/assets/images/home/5.png',
          }}
          bgRepeat="no-repeat"
          bgPosition="top left"
          bgSize={{
            base: '400px 800px',
            xl: '600px 1066px',
          }}
        >
          <VStack marginTop="288px">
            <HStack spacing="40px">
              <Image src="/assets/images/home/3.png" alt="vn" />
              <Image src="/assets/images/home/3.png" alt="vn" />
              <Image src="/assets/images/home/3.png" alt="vn" />
            </HStack>
          </VStack>

          <SimpleGrid columns={2} marginTop="230px">
            <Box flex={1} />
            <Box flex={1}>
              <VStack paddingRight="32px">
                <Text
                  letterSpacing="0.26em"
                  w={{
                    base: '409px',
                    lg: '509px',
                  }}
                  fontWeight="700"
                  fontSize="40px"
                  lineHeight="41px"
                  textAlign="center"
                  color="yellow_primary.1"
                >
                  THE VIKO FELLOWSHIP NFTs
                </Text>
                <Text
                  w={{
                    base: '400px',
                    lg: '500px',
                    xl: '671px',
                  }}
                  fontSize="22px"
                  color="white"
                  lineHeight="31px"
                  fontWeight="400"
                  textAlign="center"
                >
                  Người sở hữu THE VIKO FELLOWSHIP NFTs sẽ nhận được những đặc
                  quyền được hình thành bởi giá trị được tạo ra của mối quan hệ,
                  tình hữu nghị Việt Hàn không chỉ trong quá khứ, hiện tại mà
                  còn ở tương lai đầy hy vọng.
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>

          <VStack
            marginTop={{
              base: '140px',
              xl: '288px',
            }}
            paddingBottom={{
              base: '124px',
            }}
          >
            <HStack spacing="40px">
              <Image src="/assets/images/home/4.png" alt="vn" />
              <Image src="/assets/images/home/4.png" alt="vn" />
              <Image src="/assets/images/home/4.png" alt="vn" />
            </HStack>
          </VStack>
        </Box>
      </Box>
    </Box>
  )
}

export default SecondSection
