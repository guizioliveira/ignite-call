import { Box, Text, styled } from '@guizioliveira/ignite-ui-react'

export const ConnectBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
})

export const ConnectItem = styled('div', {
  marginBottom: '$4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  border: '1px solid $gray600',
  padding: '$4 $6',
  borderRadius: '$md',
})

export const AuthError = styled(Text, {
  color: '$danger-light',
  marginBottom: '$4',
})
