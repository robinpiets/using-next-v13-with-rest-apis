import { styled } from 'styled-components'
import Input from '../Form/Input'

const EditTag = styled(Input)`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
    width: 100%;
    margin-bottom: .5rem;
  }
`
export default EditTag
