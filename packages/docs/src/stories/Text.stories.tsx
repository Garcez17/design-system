import type { StoryObj, Meta } from "@storybook/react"
import { Text, type TextProps } from "@taiwan-ig-ui/react"

export default {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: 'O text é usado para exibir texto e aplicar estilos comuns a ele.',
      },
    },
  },
  args: {
    as: 'p',
    size: 'md',
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  argTypes: {
    as: {
      options: ['p', 'span', 'strong', 'em', 'small'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}