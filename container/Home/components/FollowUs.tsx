import { Box, Button, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const FollowUs = () => {
  return (
    <Box>
      <VStack>
        <Text>FOLLOW NOW</Text>
        <Text>
          Đăng ký để nhận các thông tin cập nhật về Bộ sưu tập NFTvà các sự kiện
          mở bán trong thời gian tới
        </Text>

        <Input placeholder="email" />
        <Button border="1px solid white" color="white">
        GỬI
        </Button>
      </VStack>
    </Box>
  )
}

export default FollowUs
