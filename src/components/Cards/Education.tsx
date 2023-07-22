import { Flex, Image, Text, useColorMode } from '@chakra-ui/react'

type EducationProps = {
  title: string
  description: string
  date: string
  link: string
}

export function Education({ title, description, date, link }: EducationProps) {
  const { colorMode } = useColorMode()

  return (
    <Flex
      w={'100%'}
      h={'auto'}
      p={'2.4rem'}
      maxW={{ base: '30rem', md: '21.4rem' }}
      borderRadius={'0.8rem'}
      flexDirection={'column'}
      bg={colorMode === 'light' ? 'gray.lightest2' : 'gray.darker'}
    >
      <Flex w={'100%'} h={'auto'} mb={'1.6rem'} alignItems={'center'}>
        <Flex
          w={'4.8rem'}
          h={'4.8rem'}
          minW={'4.8rem'}
          mr={'1.6rem'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Image alt={''} src={link} borderRadius={'50%'} />
        </Flex>

        <Flex flexDirection={'column'}>
          <Text
            as={'h4'}
            noOfLines={3}
            fontWeight={'500'}
            fontSize={'1.2rem'}
            fontFamily={'body'}
            color={colorMode === 'light' ? 'gray.darker' : 'gray.lightest'}
          >
            {title}
          </Text>
        </Flex>
      </Flex>

      <Flex
        w={'100%'}
        h={'auto'}
        alignItems={'flex-start'}
        flexDirection={'column'}
      >
        <Text
          as={'p'}
          noOfLines={3}
          fontWeight={'500'}
          fontSize={'1.4rem'}
          fontFamily={'body'}
          color={
            colorMode === 'light' ? 'secondary.darker' : 'secondary.lightest'
          }
        >
          {description}
        </Text>

        <Text
          as={'p'}
          noOfLines={3}
          fontWeight={'400'}
          fontSize={'1rem'}
          fontFamily={'body'}
          color={colorMode === 'light' ? 'gray.default' : 'gray.light'}
        >
          {date}
        </Text>
      </Flex>
    </Flex>
  )
}
