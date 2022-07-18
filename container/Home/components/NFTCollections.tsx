import { Box, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'

const ItemNFT = ({ title = '', description = '' }) => {
  return (
    <VStack>
      <Image
        w="142px"
        h="164px"
        src="/assets/images/home/NFTCollection/NFTItem.png"
      />
      <Text
        fontWeight="400"
        fontSize="30px"
        lineHeight="41px"
        textAlign="center"
        color="yellow_primary.1"
      >
        {title}
      </Text>
      <Text
        fontWeight="400"
        fontSize="14px"
        lineHeight="20px"
        textAlign="center"
        color="white"
        letterSpacing="0.15em"
        w="253px"
      >
        {description}
      </Text>
    </VStack>
  )
}

const NFTCollections = () => {
  return (
    <Box
      px={{
        lg: '32px',
        xl: '129px',
      }}
    >
      <Text
        fontWeight="700"
        fontSize="40px"
        lineHeight="41px"
        letterSpacing="0.15em"
        textTransform="uppercase"
        color="yellow_primary.1"
        textAlign="center"
      >
        BỘ SƯU TẬP nft
      </Text>
      <SimpleGrid
        columns={{
          base: 1,
          lg: 4,
        }}
        mt="70px"
        spacing={{
          base: '50px',
        }}
      >
        <ItemNFT
          title="Level 1"
          description={
            <Text>
              Thành viên danh dự (những người đặt nền móng cho mối quan hệ Việt
              Hàn)
              <br />
              (Số lượng: TBA)
            </Text>
          }
        />
        <ItemNFT
          title="Level 2"
          description={
            <Text>
              Thành viên cấp cao
              <br />
              (những người trong các tổ chứcthúc đẩy hợp tác Việt Hàn)
              <br />
              (Số lượng: TBA)
            </Text>
          }
        />
        <ItemNFT
          title="Level 3"
          description={
            <Text>
              Thành viên Người ảnh hướng (những cá nhân nhóm tri thứccó đóng góp
              lớn)
              <br />
              (Số lượng: 300)
            </Text>
          }
        />
        <ItemNFT
          title="Level 4"
          description="trong quá trình chờ làm box,chỗ này thay bằng logo vikomình đã vẽ lại"
        />
      </SimpleGrid>
      <SimpleGrid
        columns={{
          base: 1,
          lg: 3,
        }}
        mt="75px"
        spacing={{
          base: '50px',
        }}
      >
        <ItemNFT
          title="Level 5"
          description={
            <Text>
              Tập Đoàn <br /> (Số lượng: unlimited)
            </Text>
          }
        />
        <ItemNFT
          title="Level 6"
          description={
            <Text>
              Doanh Nghiệp <br /> (Số lượng: unlimited)
            </Text>
          }
        />
        <ItemNFT
          title="Level 7"
          description={
            <Text>
              Cá nhân <br /> (Số lượng: unlimited)
            </Text>
          }
        />
      </SimpleGrid>
    </Box>
  )
}

export default NFTCollections
