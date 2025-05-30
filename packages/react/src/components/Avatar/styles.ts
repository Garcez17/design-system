import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(AvatarPrimitive.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$16',
  height: '$16',
  overflow: 'hidden',
})

export const AvatarImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',

  svg: {
    width: '$6',
    height: '$6',
  },
})
