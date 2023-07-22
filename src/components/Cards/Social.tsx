import { Flex, Icon, Text, useColorMode, Link } from '@chakra-ui/react'

import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const icons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
}

interface SocialProps {
  text: string
  link: string
  label: string
  color: string
  icon: 'github' | 'linkedin'
}

export function Social({ icon, text, link, color, label }: SocialProps) {
  const { colorMode } = useColorMode()

  return (
    <Flex w={'100%'} h={'auto'} alignItems={'center'}>
      <Flex
        w={'3.2rem'}
        h={'3.2rem'}
        mr={'1.6rem'}
        borderRadius={'full'}
        alignItems={'center'}
        justifyContent={'center'}
        bg={color}
      >
        <Icon as={icons[icon]} w={'2rem'} h={'2rem'} color={'white'} />
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
        <Link
          as={'a'}
          fontWeight={'500'}
          fontSize={'1.4rem'}
          fontFamily={'body'}
          color={colorMode === 'light' ? 'gray.dark' : 'gray.lighter'}
          href={link}
          isExternal
        >
          {text}
        </Link>
      </Flex>
    </Flex>
  )
}
