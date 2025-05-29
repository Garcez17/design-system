import type { StoryObj, Meta } from "@storybook/react"
import { Box, TextArea, type TextAreaProps, Text } from "@taiwan-ig-ui/react"

export default {
  title: 'Form/TextArea',
  component: TextArea,
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
          <Text size="sm">Message</Text>
          <Story />
        </Box>
      )
    }
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any additional information',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
