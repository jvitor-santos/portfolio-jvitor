import { Flex, Icon, Text, useColorMode } from '@chakra-ui/react'

import { Phone, MapPin, Envelope } from 'phosphor-react'

const icons = {
  map: MapPin,
  phone: Phone,
  email: Envelope,
}

interface ContactProps {
  text: string
  label: string
  icon: 'map' | 'email' | 'phone'
}

export function Contact({ icon, text, label }: ContactProps) {
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
        bg={colorMode === 'light' ? 'gray.lightest' : 'gray.darker'}
      >
        <Icon
          as={icons[icon]}
          w={'2rem'}
          h={'2rem'}
          weight={'regular'}
          color={colorMode === 'light' ? 'gray.default' : 'gray.lightest'}
        />
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
