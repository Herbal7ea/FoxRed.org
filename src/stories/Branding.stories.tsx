import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  BrandingColors,
  BrandingTypography,
  BrandingSpacing,
  BrandingShadows,
  BrandingDarkMode,
} from './Branding'

const meta: Meta = {
  title: 'Design System/Branding',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj

export const Colors: Story = {
  render: () => <BrandingColors />,
  parameters: {
    docs: {
      description: {
        story: 'Complete color palette including brand colors, warm theme, and semantic tokens.',
      },
    },
  },
}

export const Typography: Story = {
  render: () => <BrandingTypography />,
  parameters: {
    docs: {
      description: {
        story: 'Font families (Geist Sans & Mono), type scale, and font weights.',
      },
    },
  },
}

export const SpacingAndRadius: Story = {
  render: () => <BrandingSpacing />,
  parameters: {
    docs: {
      description: {
        story: 'Spacing scale and border radius tokens.',
      },
    },
  },
}

export const ShadowsAndEffects: Story = {
  render: () => <BrandingShadows />,
  parameters: {
    docs: {
      description: {
        story: 'Box shadows and ring effects for focus states.',
      },
    },
  },
}

export const DarkMode: Story = {
  render: () => <BrandingDarkMode />,
  parameters: {
    docs: {
      description: {
        story: 'Dark mode color palette.',
      },
    },
  },
}
