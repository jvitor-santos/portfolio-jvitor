import { Flex, Text, Image, useColorMode } from '@chakra-ui/react'

const icons = {
  pt: '/images/svg/flag-brazil.svg',
  en: '/images/svg/flag-united-states.svg',
}

interface SocialProps {
  text: string
  label: string
  icon: 'pt' | 'en'
}

export function Language({ icon, text, label }: SocialProps) {
  const { colorMode } = useColorMode()

  return (
    <Flex w={'100%'} h={'auto'} alignItems={'center'}>
      <Flex
        w={'3.2rem'}
        h={'3.2rem'}
        mr={'1.6rem'}
        alignItems={'center'}
        justifyContent={'center'}
        bg={'transparent'}
        overflow={'hidden'}
      >
        <Image objectFit={'cover'} src={icons[icon]} alt={'País'} />
      </Flex>

      <Flex flexDirection={'column'}>
        <Text
          as={'p'}
          fontWeight={'500'}
          fontSize={'1.2rem'}
          fontFamily={'body'}
          color={colorMode === 'light' ? 'gray.default' : 'gray.light'}
        >
          {label}
        </Text>
        <Text
          as={'p'}
          fontWeight={'500'}
          fontSize={'1.4rem'}
          fontFamily={'body'}
          color={colorMode === 'light' ? 'gray.dark' : 'gray.lighter'}
        >
          {text}
        </Text>
      </Flex>
    </Flex>
  )
}
