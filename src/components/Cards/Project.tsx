import { Flex, Icon, Image, Text, useColorMode } from '@chakra-ui/react'

import { FaGithub } from 'react-icons/fa'

type ProjectProps = {
  title: string
  description: string
  link: string
  icon: string
}

export function Project({ title, description, link, icon }: ProjectProps) {
  const { colorMode } = useColorMode()

  return (
    <Flex
      w={'100%'}
      h={'auto'}
      p={'2.4rem'}
      borderRadius={'0.8rem'}
      flexDirection={'column'}
      bg={colorMode === 'light' ? 'gray.lightest2' : 'gray.darker'}
    >
      <Flex w={'100%'} h={'auto'} mb={'1.6rem'} alignItems={'flex-start'}>
        <Flex
          w={'4.8rem'}
          h={'4.8rem'}
          minW={'4.8rem'}
          mr={'1.6rem'}
          alignItems={'center'}
          justifyContent={'center'}
          bg={colorMode === 'light' ? 'gray.darker' : ''}
          borderRadius={'full'}
        >
          <Image
            alt={''}
            src={icon || '/images/png/vuber.png'}
            maxWidth={'4.4rem'}
            borderRadius={'lg'}
          />
        </Flex>

        <Flex flexDirection={'column'}>
          <Text
            as={'h3'}
            mb={'0.4rem'}
            noOfLines={1}
            fontWeight={'500'}
            fontSize={'1.6rem'}
            fontFamily={'body'}
            color={colorMode === 'light' ? 'gray.darker' : 'gray.lightest'}
          >
            {title}
          </Text>

          <Text
            as={'p'}
            noOfLines={3}
            fontWeight={'400'}
            fontSize={'1.4rem'}
            fontFamily={'body'}
            color={colorMode === 'light' ? 'gray.default' : 'gray.light'}
          >
            {description}
          </Text>
        </Flex>
      </Flex>

      <Flex w={'100%'} h={'auto'} alignItems={'center'}>
        <Icon
          as={FaGithub}
          w={'2rem'}
          h={'2rem'}
          mr={'1.2rem'}
          color={'white'}
        />
        <a href={link} target={'_blank'} rel="noreferrer">
          <Text
            as={'p'}
            noOfLines={3}
            fontWeight={'400'}
            fontSize={'1.4rem'}
            fontFamily={'body'}
            color={'secondary.default'}
          >
            {link}
          </Text>
        </a>
      </Flex>
    </Flex>
  )
}
