import type { StoryObj, Meta } from "@storybook/react"
import { Box, Text, type BoxProps } from "@taiwan-ig-ui/react"

export default {
  title: 'Surfaces/Box',
  component: Box,
  parameters: {
    docs: {
      description: {
        component: 'O box é usado para agrupar elementos e aplicar estilos comuns a eles.',
      },
    },
  },
  args: {
    children: (
      <>
        <Text>Box</Text>
      </>
    )
  },
  argTypes: {
    children: {
      control: {
        type: 'object',
      },
    },
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}