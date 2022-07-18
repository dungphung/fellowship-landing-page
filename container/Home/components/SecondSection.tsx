import { Box, HStack, SimpleGrid, Text, VStack, Image } from '@chakra-ui/react'

const SecondSection = () => {
  return (
    <Box marginTop="120px">
      <Box
        bgImage={{
          base: '/assets/images/home/2@x1.png',
        }}
        bgRepeat="no-repeat"
        bgPosition={{
          base: '100% 20%',
          lg: 'top right',
        }}
        bgSize={{
          base: '280px 600px',
          lg: '500px 1066px',
          xxl: '600px 1266px',
        }}
        id="story"
      >
        <VStack
          px={{
            base: '20px',
            lg: 0,
          }}
        >
          <Text
            fontStyle="italic"
            fontSize="22px"
            lineHeight="31px"
            textAlign="center"
            color="yellow_primary.1"
            w={{
              base: '100%',
              lg: '700px',
            }}
            fontFamily="SVN-Avo"
            fontWeight="400"
          >
            Hơn 30 năm gắn kết và phát triển, mối quan hệ giữa hai nước Việt Nam
            và Hàn Quốc ngày một vững mạnh. Các cơ hội đầu tư, giao thương kinh
            tế, xuất khẩu văn hóa đã thúc đẩy và tạo ra những con số ấn tượng
            với 74.1 tỷ $ và hơn 9000 dự án đã thể hiện cho mối quan hệ này.
            Nhiều các hoạt động hợp tác cho các doanh nhân/nghệ sĩ/ chính trị
            gia các cơ hội để đại diện.
          </Text>
        </VStack>

        <SimpleGrid
          columns={{
            base: 1,
            lg: 2,
          }}
          marginTop="300px"
          ml={{
            base: '20px',
            lg: '85px',
          }}
          mr={{
            base: '20px',
            lg: '0',
          }}
          id="viko-fellowship"
        >
          <Box flex={1}>
            <VStack spacing="22px">
              <Text
                letterSpacing="0.26em"
                w={{
                  base: '100%',
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
                  lg: '100%',
                  xl: '671px',
                }}
                fontSize="22px"
                color="white"
                lineHeight="31px"
                fontFamily="SVN-Avo"
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
          bgPosition={{
            base: '0% 0%',
            lg: 'top left',
          }}
          bgSize={{
            base: '200px 500px',
            lg: '400px 800px',
            xl: '600px 1066px',
          }}
        >
          <VStack
            marginTop={{
              base: '100px',
              lg: '288px',
            }}
          >
            <HStack spacing="40px">
              <Image
                w={{
                  base: '80px',
                  lg: '150px',
                }}
                h={{
                  base: '80px',
                  lg: '150px',
                }}
                src="/assets/images/home/3.png"
                alt="vn"
              />
              <Image
                w={{
                  base: '80px',
                  lg: '150px',
                }}
                h={{
                  base: '80px',
                  lg: '150px',
                }}
                src="/assets/images/home/3.png"
                alt="vn"
              />
              <Image
                w={{
                  base: '80px',
                  lg: '150px',
                }}
                h={{
                  base: '80px',
                  lg: '150px',
                }}
                src="/assets/images/home/3.png"
                alt="vn"
              />
            </HStack>
          </VStack>

          <SimpleGrid
            columns={{
              base: 1,
              lg: 2,
            }}
            marginTop="230px"
          >
            <Box flex={1} />
            <Box flex={1}>
              <VStack
                paddingRight={{
                  base: '20px',
                  lg: '32px',
                }}
                paddingLeft={{
                  base: '20px',
                  lg: 0,
                }}
              >
                <Text
                  letterSpacing="0.26em"
                  w={{
                    base: '100%',
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
                    base: '100%',
                    lg: '500px',
                    xxl: '671px',
                  }}
                  fontSize="22px"
                  color="white"
                  lineHeight="31px"
                  fontFamily="SVN-Avo"
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
              <Image
                w={{
                  base: '80px',
                  lg: '150px',
                }}
                h={{
                  base: '80px',
                  lg: '150px',
                }}
                src="/assets/images/home/4.png"
                alt="vn"
              />
              <Image
                w={{
                  base: '80px',
                  lg: '150px',
                }}
                h={{
                  base: '80px',
                  lg: '150px',
                }}
                src="/assets/images/home/4.png"
                alt="vn"
              />
              <Image
                w={{
                  base: '80px',
                  lg: '150px',
                }}
                h={{
                  base: '80px',
                  lg: '150px',
                }}
                src="/assets/images/home/4.png"
                alt="vn"
              />
            </HStack>
          </VStack>
        </Box>
      </Box>
    </Box>
  )
}

export default SecondSection
