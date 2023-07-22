import { Flex, Image, Text, useColorMode } from '@chakra-ui/react'

type ToolsProps = {
  title: string
  link: string
}

export function Tools({ title, link }: ToolsProps) {
  const { colorMode } = useColorMode()

  return (
    <Flex
      w={'100%'}
      h={'auto'}
      p={'2.4rem'}
      maxW={'21.4rem'}
      alignItems={'center'}
      borderRadius={'0.8rem'}
      flexDirection={'column'}
      bg={colorMode === 'light' ? 'gray.lightest2' : 'gray.darker'}
    >
      <Flex
        w={'4.8rem'}
        h={'4.8rem'}
        minW={'4.8rem'}
        mb={'0.8rem'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Image alt={''} src={link} />
      </Flex>

      <Text
        as={'h3'}
        mb={'0.2rem'}
        noOfLines={3}
        fontWeight={'500'}
        fontSize={'1.4rem'}
        fontFamily={'body'}
        color={
          colorMode === 'light' ? 'secondary.darker' : 'secondary.lightest'
        }
      >
        {title}
      </Text>
    </Flex>
  )
}
