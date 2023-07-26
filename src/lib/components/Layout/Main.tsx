import { styled } from 'styled-components'

const Main = styled.main`
  color: #fff;
  width: 100%;
  height: 100%;
  margin-bottom: 2rem;
  padding: 2vw;
  border: 1px solid white;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 3rem;
  }
`

export default Main
