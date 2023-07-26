import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
`

const ListItem = styled.li`
  list-style: none;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`

export default List

export { ListItem }
