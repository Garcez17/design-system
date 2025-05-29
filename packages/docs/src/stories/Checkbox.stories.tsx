import type { StoryObj, Meta } from "@storybook/react"
import { Box, Checkbox, type CheckboxProps, Text } from "@taiwan-ig-ui/react"

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: 'O checkbox é usado para receber informações do usuário.',
      },
    },
  },
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
          <Story />
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    }
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
