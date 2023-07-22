import { Flex, Text, useColorMode, Grid } from '@chakra-ui/react'

import { Circle } from './Circle'
import { Tools } from './Cards/Tools'
import { Skills } from './Cards/Skills'
import { Project } from './Cards/Project'
import { Education } from './Cards/Education'
import { Carousel } from './Carousel/Carousel'
import { Experience } from './Cards/Experience'

import { tools } from '../utils/tools'
import { skills } from '../utils/skills'
import { education } from '../utils/education'
import { experience } from '../utils/experience'
import { lastProjects } from '../utils/lastProjects'

import { ContentCarousel, ContentItem } from './Carousel/styles'

export function Main() {
  const { colorMode } = useColorMode()

  return (
    // Componente da main toda
    <Flex as={'main'} w={'100%'} h={'auto'} flexDirection={'column'}>
      {/* Componente do texto ultimos projetos */}
      <Flex py={'4.8rem'} pl={'2.4rem'} pr={'4.8rem'}>
        <Flex
          w={'100%'}
          h={'auto'}
          pl={'4.8rem'}
          position={'relative'}
          flexDirection={'column'}
        >
          <Circle />

          <Text
            as={'h2'}
            fontWeight={'500'}
            fontSize={'2.4rem'}
            fontFamily={'heading'}
            color={colorMode === 'light' ? 'gray.darker' : 'gray.lightest'}
          >
            Últimos Projetos:
          </Text>
        </Flex>
      </Flex>

      {/* Componente que renderiza os ultimos projetos */}
      <Flex pl={'7.2rem'} pr={'4.8rem'}>
        <Flex
          w={'100%'}
          h={'auto'}
          gap={'0.8rem'}
          flexDirection={{ base: 'column', sm: 'row' }}
        >
          <Grid gap={'0.8rem'} alignItems={'center'} justifyContent={'center'}>
            {lastProjects.map((project, index) => (
              <Project
                key={index}
                icon={project.icon}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </Grid>
        </Flex>
      </Flex>

      {/* Componente do texto experiencias */}
      <Flex py={'4.8rem'} pl={'2.4rem'} pr={'4.8rem'}>
        <Flex
          w={'100%'}
          h={'auto'}
          pl={'4.8rem'}
          position={'relative'}
          flexDirection={'column'}
        >
          <Circle />

          <Text
            as={'h2'}
            fontWeight={'500'}
            fontSize={'2.4rem'}
            fontFamily={'heading'}
            color={colorMode === 'light' ? 'gray.darker' : 'gray.lightest'}
          >
            Experiência:
          </Text>
        </Flex>
      </Flex>

      {/* Componente que renderiza as ultimas experiencias */}
      <Flex
        pl={{ base: '5rem', md: '7.2rem' }}
        pr={{ base: '2.5rem', md: '4.8rem' }}
      >
        <Flex w={'100%'} h={'auto'} gap={'0.8rem'} flexDirection={'column'}>
          {experience.map((experience, index) => (
            <Experience
              key={index}
              title={experience.title}
              company={experience.company}
              date={experience.date}
              location={experience.location}
              link={experience.icon}
            />
          ))}
        </Flex>
      </Flex>

      {/* Componente do texto educação */}
      <Flex py={'4.8rem'} pl={'2.4rem'} pr={'4.8rem'}>
        <Flex
          w={'100%'}
          h={'auto'}
          pl={'4.8rem'}
          position={'relative'}
          flexDirection={'column'}
        >
          <Circle />

          <Text
            as={'h2'}
            fontWeight={'500'}
            fontSize={'2.4rem'}
            fontFamily={'heading'}
            color={colorMode === 'light' ? 'gray.darker' : 'gray.lightest'}
          >
            Educação:
          </Text>
        </Flex>
      </Flex>

      {/* Componente que renderiza as educações */}
      <Flex
        pl={{ base: '5rem', md: '7.2rem' }}
        pr={{ base: '2.5rem', md: '4.8rem' }}
      >
        <Flex w={'100%'} h={'auto'} gap={'0.8rem'} flexWrap={'wrap'}>
          {education.map((education, index) => (
            <Education
              key={index}
              title={education.title}
              description={education.description}
              date={education.data}
              link={education.icon}
            />
          ))}
        </Flex>
      </Flex>

      {/* Componente do texto Skills */}
      <Flex py={'4.8rem'} pl={'2.4rem'} pr={'4.8rem'}>
        <Flex
          w={'100%'}
          h={'auto'}
          pl={'4.8rem'}
          position={'relative'}
          flexDirection={'column'}
        >
          <Circle />

          <Text
            as={'h2'}
            fontWeight={'500'}
            fontSize={'2.4rem'}
            fontFamily={'heading'}
            color={colorMode === 'light' ? 'gray.darker' : 'gray.lightest'}
          >
            Skills:
          </Text>
        </Flex>
      </Flex>

      {/* Componente que renderiza as Skills */}
      <Flex
        w={'100%'}
        h={'auto'}
        position={'relative'}
        flexDirection={'column'}
      >
        <Flex w={'100%'} h={'auto'} flexWrap={'wrap'}>
          <ContentItem>
            {skills.map((skill, index) => (
              <Skills key={index} title={skill.title} link={skill.link} />
            ))}
          </ContentItem>
          <ContentCarousel className={'segments'}>
            <Carousel>
              {skills.map((skills, index) => (
                <div key={index} className="flicking-panel">
                  <Skills key={index} title={skills.title} link={skills.link} />
                </div>
              ))}
            </Carousel>
          </ContentCarousel>
        </Flex>
      </Flex>

      {/* Componente do texto Ferramentas */}
      <Flex py={'4.8rem'} pl={'2.4rem'} pr={'4.8rem'}>
        <Flex
          w={'100%'}
          h={'auto'}
          pl={'4.8rem'}
          position={'relative'}
          flexDirection={'column'}
        >
          <Circle />

          <Text
            as={'h2'}
            fontWeight={'500'}
            fontSize={'2.4rem'}
            fontFamily={'heading'}
            color={colorMode === 'light' ? 'gray.darker' : 'gray.lightest'}
          >
            Ferramentas:
          </Text>
        </Flex>
      </Flex>

      {/* Componente que renderiza as Ferramentas */}
      <Flex
        w={'100%'}
        h={'auto'}
        mb={'4.8rem'}
        position={'relative'}
        flexDirection={'column'}
      >
        <Flex w={'100%'} h={'auto'} flexWrap={'wrap'}>
          <ContentItem>
            {tools.map((tools, index) => (
              <Tools key={index} title={tools.title} link={tools.link} />
            ))}
          </ContentItem>
          <ContentCarousel className={'segments'}>
            <Carousel>
              {tools.map((tool, index) => (
                <div key={index} className="flicking-panel">
                  <Tools key={index} title={tool.title} link={tool.link} />
                </div>
              ))}
            </Carousel>
          </ContentCarousel>
        </Flex>
      </Flex>
    </Flex>
  )
}
