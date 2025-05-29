import type { StoryObj, Meta } from "@storybook/react"
import { Box, MultiStep, type MultiStepProps } from "@taiwan-ig-ui/react"

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  parameters: {
    docs: {
      description: {
        component: 'O multi step é usado para exibir o progresso de um processo.',
      },
    },
  },
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
          <Story />
        </Box>
      )
    }
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}

export const Partial: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 2,
  },
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
