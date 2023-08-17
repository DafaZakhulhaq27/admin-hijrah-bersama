import '../app/globals.css'
import ButtonMain from '../components/forms/button'
import type { Meta, StoryObj } from '@storybook/react'
import { HiPlus } from 'react-icons/hi'

const meta = {
  title: 'Components/Button',
  component: ButtonMain,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      type: 'boolean',
    },
    onClick: { type: 'function' },
    children: {
      options: ['OnlyText', 'WithIcon'],
      mapping: {
        OnlyText: 'Button',
        WithIcon: (
          <>
            <HiPlus />
            With Icon
          </>
        ),
      },
    },
  },
} satisfies Meta<typeof ButtonMain>

export default meta
type Story = StoryObj<typeof ButtonMain>

export const Primary: Story = {
  args: {
    children: 'OnlyText',
  },
}

export const Danger: Story = {
  args: {
    children: 'OnlyText',
    className: 'bg-red-500',
  },
}

export const Success: Story = {
  args: {
    children: 'OnlyText',
    className: 'bg-green-500',
  },
}

export const Warning: Story = {
  args: {
    children: 'OnlyText',
    className: 'bg-yellow-500',
  },
}

export const Disable: Story = {
  args: {
    children: 'OnlyText',
    disabled: true,
  },
}

export const WithIcon: Story = {
  args: {
    children: 'WithIcon',
  },
}

export const OnClick: Story = {
  args: {
    children: 'OnlyText',
    onClick: () => alert('halo'),
  },
}
