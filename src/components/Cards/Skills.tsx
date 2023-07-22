import { Flex, Image, Text, useColorMode } from '@chakra-ui/react'

type SkillsProps = {
  title: string
  link: string
}

export function Skills({ title, link }: SkillsProps) {
  const { colorMode } = useColorMode()

  return (
    <Flex
      w={'100%'}
      h={'auto'}
      minHeight={'127px'}
      px={'2.4rem'}
      py={'1.6rem'}
      maxW={'18rem'}
      borderRadius={'0.8rem'}
      flexDirection={'column'}
      bg={colorMode === 'light' ? 'gray.lightest2' : 'gray.darker'}
    >
      <Flex
        w={'100%'}
        h={'auto'}
        alignItems={'center'}
        flexDirection={'column'}
        justifyContent={'center'}
        gap={'0.5rem'}
      >
        <Flex
          w={'4.8rem'}
          h={'4.8rem'}
          minW={'4.8rem'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Image alt={''} src={link} />
        </Flex>

        <Flex flexDirection={'column'}>
          <Text
            as={'h4'}
            noOfLines={3}
            fontWeight={'500'}
            fontSize={'1.6rem'}
            fontFamily={'body'}
            textAlign={'center'}
            lineHeight={'normal'}
            color={colorMode === 'light' ? 'gray.darker' : 'gray.lightest'}
          >
            {title}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
