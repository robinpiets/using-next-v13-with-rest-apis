import styled from 'styled-components'

const FooterText = styled.p`
  font-style: italic;
`

const Footer = () => (
  <footer>
    <FooterText>
      Unfortunately the API does not allow the deletion of the last item. There
      has to be at least one tag.
    </FooterText>
  </footer>
)

export default Footer
