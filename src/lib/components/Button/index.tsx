'use client'

import { styled } from 'styled-components'

export type ButtonProps = React.ComponentPropsWithoutRef<'button'>

const Button = styled.button`
  margin-right: 1rem;
  padding: 0.25rem 1rem;
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`

export default Button
