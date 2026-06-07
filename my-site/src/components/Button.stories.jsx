import Button, { PlaceholderIcon } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
}

export const Primary = {
  args: {
    children: 'Essays',
    variant: 'primary',
  },
}

export const Secondary = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
}

export const WithIcon = {
  args: {
    children: 'LinkedIn',
    icon: <PlaceholderIcon shape="square" />,
  },
}

export const ExternalLink = {
  args: {
    children: 'GitHub',
    href: 'https://github.com/KetyiBalazs',
    icon: <PlaceholderIcon shape="circle" />,
  },
}

export const InternalLink = {
  args: {
    children: 'Essays',
    to: '/essays',
  },
}
