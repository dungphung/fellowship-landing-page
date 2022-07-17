import { Box, Button, Text, VStack } from '@chakra-ui/react'

const IntroSection = () => {
  return (
    <Box
      bgImage="/assets/images/home/7@2x.png"
      bgPosition="0 150px"
      bgRepeat="no-repeat"
      bgSize={{
        base: '400px',
        xl: '521px',
      }}
      h={{
        base: '900px',
        xl: '1100px',
      }}
      position="relative"
    >
      <Text
        position="absolute"
        fontWeight="700"
        lineHeight="40px"
        fontSize="30px"
        color="white"
        bottom={{
          base: 190,
          xl: 250,
        }}
        left={{
          base: 0,
          xl: 20,
        }}
        transform="rotate(-45.39deg)"
      >
        PHÁT TRIỂN KINH TẾ <br />
        VÀ THƯƠNG MẠI
      </Text>
      <Box
        bgImage="/assets/images/home/6@2x.png"
        bgPosition="100% 0px"
        bgRepeat="no-repeat"
        bgSize={{
          base: '400px',
          xl: '521px',
        }}
        h={{
          base: '900px',
          xl: '1100px',
        }}
      >
        <VStack h="100%" justifyContent="center" alignItems="center">
          <Box bg="rgba(39, 39, 39, 0.3)" w="100%">
            <VStack my="33px">
              <Text
                fontWeight="700"
                fontSize="31px"
                lineHeight="35px"
                textAlign="center"
                textTransform="uppercase"
                letterSpacing="0.08em"
                color="yellow_primary.1"
              >
                VIKO 30
              </Text>
              <Text
                fontWeight="700"
                fontSize="20px"
                lineHeight="25px"
                textAlign="center"
                textTransform="uppercase"
                letterSpacing="0.08em"
                color="yellow_primary.1"
              >
                VIKO activities là chuỗi hoạt động chào mừng
              </Text>
              <Text
                fontWeight="700"
                fontSize="20px"
                lineHeight="25px"
                textAlign="center"
                textTransform="uppercase"
                letterSpacing="0.08em"
                color="yellow_primary.1"
              >
                kỷ niệm hằng năm quan hệ ngoại giao việt nam - hàn quốc
              </Text>
              <Box w="650px">
                <Text
                  mt="32px"
                  fontSize="14px"
                  lineHeight="20px"
                  textAlign="center"
                  letterSpacing="0.01em"
                  color="white"
                >
                  VIKO30 là chuỗi hoạt động chào mừngkỷ niệm 30 năm quan hệ
                  ngoại giao Việt Nam - Hàn Quốc.VIKO30 bao gồm nhiều hoạt động
                  chào mừng như:
                </Text>
                <Text
                  fontSize="14px"
                  lineHeight="20px"
                  textAlign="center"
                  letterSpacing="0.01em"
                  color="white"
                >
                  - KHAI MẠC TRIỂN LÃM CÔNG NGHỆ VIKO 30. <br />- HỘI THẢO
                  BLOCKCHAIN VIỆT NAM TRONG KỶ NGUYÊN CHUYỂN ĐỔI SỐ. <br />- HỘI
                  NGHỊ XÚC TIẾN ĐẦU TƯ FDI HÀN QUỐC VÀO VIỆT NAM (HCM & HN).{' '}
                  <br />- DIỄN ĐÀN HỢP TÁC THƯƠNG MẠI / ĐẦU TƯ / CÔNG NGHỆ
                  VIỆT-HÀN. <br />
                  - GALA VIKO 30 KẾT NỐI YÊU THƯƠNG VIỆT - HÀN ( HCM ) <br />
                  - BLOCKCHAIN EXPO. <br />- TRIỂN LÃM ẢNH VIỆT - HÀN 30 NĂM HỢP
                  TÁC VÀ PHÁT TRIỂN (HN). <br />- HỘI THẢO " PHÁT TRIỂN THỊ
                  TRƯỜNG CHĂM SÓC SỨC KHỎE - LÀM ĐẸP (HN). <br />
                  - GALA "VIKO 30 BEAUTY WORLD FESTIVAL 2022 " (HN). <br />-
                  VIKO 30 GIAO LƯU VĂN HÓA - M NHẠC - THỜI TRANG (HN)
                </Text>
              </Box>
              <VStack>
                <Button
                  mt="20px"
                  color="white"
                  border="1px solid #FFFFFF"
                  background="transparent !important"
                >
                  Xem thêm
                </Button>
              </VStack>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  )
}

export default IntroSection