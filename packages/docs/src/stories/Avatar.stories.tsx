import type { StoryObj, Meta } from "@storybook/react"
import { Avatar, type AvatarProps } from "@taiwan-ig-ui/react"

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: 'O avatar é usado para exibir uma imagem de perfil do usuário.',
      },
    },
  },
  args: {
    src: 'https://github.com/garcez17.png',
    alt: 'Gabriel Garcez',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: 'Gabriel Garcez',
  },
}