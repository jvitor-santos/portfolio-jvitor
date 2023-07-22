import { Box, Flex, useColorMode } from '@chakra-ui/react'

export function Circle() {
  const { colorMode } = useColorMode()

  return (
    <Flex
      top={'0'}
      left={'0'}
      w={'3.2rem'}
      h={'3.2rem'}
      alignItems={'center'}
      justifyContent={'center'}
      position={'absolute'}
      borderRadius={'full'}
      boxShadow={
        '0px 1px 4px rgba(0, 0, 0, 0.05), 0px 6px 24px rgba(0, 0, 0, 0.04), inset 0px 1px 1px rgba(0, 0, 0, 0.04)'
      }
      bg={colorMode === 'light' ? 'white' : 'gray.darker'}
    >
      <Box
        w={'0.8rem'}
        h={'0.8rem'}
        borderRadius={'full'}
        bg={'secondary.default'}
      />
    </Flex>
  )
}
