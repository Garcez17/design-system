import type { StoryObj, Meta } from "@storybook/react"
import { Box, TextInput, type TextInputProps, Text } from "@taiwan-ig-ui/react"

export default {
  title: 'Form/TextInput',
  component: TextInput,
  parameters: {
    docs: {
      description: {
        component: 'O input é usado para receber informações do usuário.',
      },
    },
  },
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text size="sm">Email address</Text>
          <Story />
        </Box>
      )
    }
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
  },
}
