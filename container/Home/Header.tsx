import { Button, HStack, Image, Spacer } from '@chakra-ui/react'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <HStack
      paddingTop="46px"
      px="46px"
      position="absolute"
      top={0}
      left={0}
      right={0}
    >
      <Image
        w="45px"
        h="52px"
        src="/assets/images/home/NFTCollection/NFTItem.png"
        alt="logo"
      />
      <Spacer />
      <HStack
        spacing={{
          base: 2,
          lg: '5px',
          xl: '25px',
          xxl: '50px',
        }}
      >
        <Button
          color="#D9D9D9"
          _active={{
            color: 'yellow_primary.1',
            fontWeight: '900',
          }}
          _hover={{
            color: 'yellow_primary.1',
          }}
          background="transparent !important"
          textTransform="uppercase"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          fontWeight="700"
          fontSize="16px"
          lineHeight="19px"
        >
          Home
        </Button>
        <Button
          color="#D9D9D9"
          _active={{
            color: 'yellow_primary.1',
            fontWeight: '900',
          }}
          _hover={{
            color: 'yellow_primary.1',
          }}
          background="transparent !important"
          textTransform="uppercase"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          fontWeight="700"
          fontSize="16px"
          lineHeight="19px"
        >
          Story
        </Button>
        <Button
          color="#D9D9D9"
          _active={{
            color: 'yellow_primary.1',
            fontWeight: '900',
          }}
          _hover={{
            color: 'yellow_primary.1',
          }}
          background="transparent !important"
          textTransform="uppercase"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          fontWeight="700"
          fontSize="16px"
          lineHeight="19px"
        >
          VIKO Fellowship{' '}
        </Button>
        <Button
          color="#D9D9D9"
          _active={{
            color: 'yellow_primary.1',
            fontWeight: '900',
          }}
          _hover={{
            color: 'yellow_primary.1',
          }}
          background="transparent !important"
          textTransform="uppercase"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          fontWeight="700"
          fontSize="16px"
          lineHeight="19px"
        >
          Club
        </Button>
        <Button
          color="#D9D9D9"
          _active={{
            color: 'yellow_primary.1',
            fontWeight: '900',
          }}
          _hover={{
            color: 'yellow_primary.1',
          }}
          background="transparent !important"
          textTransform="uppercase"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          fontWeight="700"
          fontSize="16px"
          lineHeight="19px"
        >
          Activities{' '}
        </Button>
        <Image src="/assets/images/home/profile.svg" alt="profile" />
        <Image src="/assets/images/home/shoping-card.svg" alt="shoping-card" />
      </HStack>
    </HStack>
  )
}

export default Header
