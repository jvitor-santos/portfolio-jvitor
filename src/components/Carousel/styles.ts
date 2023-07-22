import styled from '@emotion/styled'
import * as C from '@chakra-ui/react'

export const ContentCarousel = styled(C.Flex)`
  width: 100%;
  height: auto;

  gap: 5.3125rem;
  display: none;
  flex-direction: column;

  &.segments {
    .flicking-viewport {
      .flicking-camera {
        .flicking-panel {
          width: 23%;
          padding: 0 0.5rem;

          @media (max-width: 600px) {
            width: 40%;
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    gap: 1.875rem;
    display: flex;
  }
`

export const ContentItem = styled(C.Flex)`
  gap: 0.8rem;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  padding-left: 7rem;

  @media (max-width: 600px) {
    display: none;
  }
`
