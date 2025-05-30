import type { ElementType } from 'react'
import { styled } from '../styles'
import type { ComponentProps } from '@stitches/react'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      xxs: {
        fontSize: '$xxs',
      },
      xs: {
        fontSize: '$xs',
      },
      sm: {
        fontSize: '$sm',
      },
      md: {
        fontSize: '$md',
      },
      lg: {
        fontSize: '$lg',
      },
      xl: {
        fontSize: '$xl',
      },
      '2xl': {
        fontSize: '$2xl',
      },
      '4xl': {
        fontSize: '$4xl',
      },
      '5xl': {
        fontSize: '$5xl',
      },
      '6xl': {
        fontSize: '$6xl',
      },
      '7xl': {
        fontSize: '$7xl',
      },
      '8xl': {
        fontSize: '$8xl',
      },
      '9xl': {
        fontSize: '$9xl',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
  children: React.ReactNode
}

Text.displayName = 'Text'
