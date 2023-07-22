import { Flex, Image, Text, useColorMode } from '@chakra-ui/react'

type ExperienceProps = {
  title: string
  company: string
  date: string
  location: string
  link: string
}

export function Experience({
  title,
  company,
  date,
  location,
  link,
}: ExperienceProps) {
  const { colorMode } = useColorMode()

  return (
    <Flex
      w={'100%'}
      h={'auto'}
      px={'2.4rem'}
      py={'1.6rem'}
      gap={'1.6rem'}
      alignItems={'center'}
      borderRadius={'0.8rem'}
      bg={colorMode === 'light' ? 'gray.lightest2' : 'gray.darker'}
    >
      <Flex w={'100%'} maxW={'4rem'}>
        <Image alt={''} src={link} borderRadius={'50%'} />
      </Flex>

      <Flex
        w={'100%'}
        h={'auto'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Flex gap={'0.4rem'} flexDirection={'column'}>
          <Text
            as={'h3'}
            noOfLines={1}
            fontWeight={'400'}
            fontSize={'1.4rem'}
            fontFamily={'body'}
            color={colorMode === 'light' ? 'gray.default' : 'gray.light'}
          >
            {title}
          </Text>
          <Text
            as={'h3'}
            noOfLines={1}
            fontWeight={'500'}
            fontSize={'1.6rem'}
            fontFamily={'body'}
            color={colorMode === 'light' ? 'gray.darker' : 'gray.lightest'}
          >
            {company}
          </Text>
        </Flex>

        <Flex flexDirection={'column'}>
          <Text
            as={'h3'}
            noOfLines={1}
            fontWeight={'400'}
            fontSize={'1.2rem'}
            fontFamily={'body'}
            color={colorMode === 'light' ? 'gray.dark' : 'gray.lighter'}
          >
            {date}
          </Text>
          <Text
            as={'h3'}
            noOfLines={1}
            fontWeight={'400'}
            fontSize={'1rem'}
            fontFamily={'body'}
            color={colorMode === 'light' ? 'gray.default' : 'gray.light'}
          >
            {location}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
