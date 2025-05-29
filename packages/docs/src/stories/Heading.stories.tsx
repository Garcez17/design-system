import type { StoryObj, Meta } from "@storybook/react"
import { Heading, type HeadingProps } from "@taiwan-ig-ui/react"

export default {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    docs: {
      description: {
        component: 'O heading é usado para exibir títulos e aplicar estilos comuns a eles.',
      },
    },
  },
  args: {
    children: 'Custom title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
    size: 'md',
  },
  argTypes: {
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
      control: {
        type: 'inline-radio',
      },
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'O heading pode ser personalizado com a propriedade `as` para exibir diferentes níveis de título.',
      },
    },
  },
}