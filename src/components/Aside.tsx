import { Divider, Flex, Image, Text, useColorMode } from '@chakra-ui/react'

import { Contact } from './Cards/Contact'
import { Language } from './Cards/Language'
import { Social } from './Cards/Social'

export function Aside() {
  const { colorMode } = useColorMode()

  return (
    <Flex
      as={'aside'}
      w={'100%'}
      h={'auto'}
      p={'4.8rem'}
      maxW={'36.0rem'}
      flexDirection={'column'}
      alignItems={['center', 'center', 'flex-start']}
    >
      <Image
        w={'9.6rem'}
        h={'9.6rem'}
        mb={'1.6rem'}
        borderRadius={'full'}
        alt={'Nome'}
        src={'https://github.com/jvitor-santos.png'}
      />

      <Text
        as={'h1'}
        mb={'0.8rem'}
        fontWeight={'500'}
        fontSize={'3.2rem'}
        fontFamily={'heading'}
        color={colorMode === 'light' ? 'gray.darker' : 'gray.lightest'}
      >
        João Vitor dos Santos
      </Text>

      <Text
        as={'h2'}
        mb={'3.2rem'}
        fontWeight={'500'}
        fontSize={'2.4rem'}
        fontFamily={'heading'}
        color={'secondary.default'}
      >
        Desenvolvedor Fullstack
      </Text>

      <Text
        as={'h3'}
        mb={'0.4rem'}
        fontWeight={'500'}
        fontSize={'1.8rem'}
        fontFamily={'heading'}
        color={colorMode === 'light' ? 'gray.dark' : 'gray.lighter'}
      >
        &quot;Eu gosto de pensar que a luz do sol vai iluminar o meu amanhecer,
        mas se na manhã o sol não surgir, por traz das nuvens cinzas tudo vai
        mudar, a chuva abraçará e o berço vai abri, a luz de um novo dia sempre
        vai estar.&quot;
      </Text>

      <Text
        as={'h4'}
        textAlign={'end'}
        fontWeight={'400'}
        fontSize={'1.2rem'}
        fontFamily={'body'}
        color={colorMode === 'light' ? 'gray.default' : 'gray.light'}
      >
        Seu Jorge
      </Text>

      <Divider my={'3.2rem'} />

      <Flex w={'100%'} h={'auto'} gap={'1.7rem'} flexDirection={'column'}>
        <Contact
          icon={'email'}
          label={'Email:'}
          text={'jao_vitorsantos@hotmail.com'}
        />

        <Contact icon={'phone'} label={'Celular:'} text={'+55 15 99663 9488'} />

        <Contact
          icon={'map'}
          label={'Localização:'}
          text={'Itapetininga, SP'}
        />
      </Flex>

      <Divider my={'3.2rem'} />

      <Flex w={'100%'} h={'auto'} gap={'1.7rem'} flexDirection={'column'}>
        <Social
          icon={'github'}
          color={'#171515 '}
          label={'GitHub:'}
          text={'jvitor-santos'}
          link={'https://github.com/jvitor-santos'}
        />

        <Social
          icon={'linkedin'}
          color={'#0A66C2'}
          label={'LinkedIn:'}
          text={'joao santos'}
          link={'https://linkedin.com/in/joao-santos-32003b1b1'}
        />
      </Flex>

      <Divider my={'3.2rem'} />

      <Flex w={'100%'} h={'auto'} gap={'1.7rem'} flexDirection={'column'}>
        <Language icon={'pt'} label={'Português Brasileiro:'} text={'Nativo'} />

        <Language icon={'en'} label={'Inglês:'} text={'Básico'} />
      </Flex>
    </Flex>
  )
}
