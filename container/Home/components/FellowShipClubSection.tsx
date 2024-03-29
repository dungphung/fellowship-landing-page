import { Button, Grid, GridItem, Text, Image, HStack } from '@chakra-ui/react'

import React from 'react'

const FellowShipClubSection = () => {
  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      gap={4}
      mt="165px"
      px={{
        base: '32px',
        xl: '92px',
      }}
      id="club"
    >
      <GridItem
        order={{
          base: 2,
          lg: 1,
        }}
        colSpan={{
          base: 5,
          lg: 2,
        }}
      >
        <Text
          fontSize="50px"
          lineHeight="66px"
          letterSpacing="1px"
          color="yellow_primary.1"
          fontWeight="700"
        >
          FELLOWSHIP CLUB
        </Text>
        <Text
          marginTop="14px"
          color="white"
          fontSize="18px"
          fontWeight="400"
          lineHeight="30px"
          fontFamily="Roboto"
          opacity={0.5}
        >
          Là câu lạc bộ các thành viên sở hữu NFT VIKO Fellowship. Các thành
          viên của Club sẽ được tiết lộ dần dần và hoạt động của CLUB sẽ do hội
          đồng sáng lập của CLUB đưa ra. Thành viên sỡ hữu NFT thuộc bộ sưu tập
          nào sẽ là thành viên của Club đó. Các thành viên muốn tham gia các
          Club cao hơn cần sở hữu NFT tương ứng.
        </Text>
        <Button
          marginTop="44px"
          bg="#FFC700 !important"
          borderRadius="10px"
          w="189px"
        >
          How to join
        </Button>
      </GridItem>
      <GridItem
        order={{
          base: 1,
          lg: 2,
        }}
        colSpan={{
          base: 5,
          lg: 3,
        }}
      >
        <HStack justifyContent="flex-end">
          <Image
            h={{
              base: '100%',
              lg: '625px',
            }}
            src="/assets/images/home/FellowShipClub/background.png"
          />
        </HStack>
      </GridItem>
    </Grid>
  )
}

export default FellowShipClubSection
