'use client'

import { styled } from 'styled-components'
import Button from '.'

const DeleteButton = styled(Button)`
  border-color: ${({ theme }) => theme.colors.alert};
  color: ${({ theme }) => theme.colors.alert};
`

export default DeleteButton
