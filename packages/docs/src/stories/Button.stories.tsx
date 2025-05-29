import type { StoryObj, Meta } from "@storybook/react"
import { Button, type ButtonProps } from "@taiwan-ig-ui/react"
import { ArrowRight } from "phosphor-react"

export default {
  title: 'Form/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'O botão é usado para acionar ações em diferentes tamanhos e variações.',
      },
    },
  },
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    onClick: { action: 'click' },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Create new',
    variant: 'secondary',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    children: 'Cancel',
    variant: 'tertiary',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Send
        <ArrowRight size={24} weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}