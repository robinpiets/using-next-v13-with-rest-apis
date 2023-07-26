import userEvent from '@testing-library/user-event'
import TagList from './TagList'
import { render, screen } from '../../../../test-utils'

const mockHandleDeleteTag = jest.fn()
const mockHandleEditTag = jest.fn()

const defaultProps = {
  handleDeleteTag: mockHandleDeleteTag,
  handleEditTag: mockHandleEditTag,
  tags: [
    { id: 1, label: 'Tag 1' },
    { id: 2, label: 'Tag 2' },
  ],
}

describe('TagList', () => {
  it('renders the correct amount of items', () => {
    render(<TagList {...defaultProps} />)

    expect(screen.getAllByRole('listitem').length).toBe(2)
    expect(screen.getByText('Tag 2')).toBeInTheDocument()
  })

  it('can successfully edit the tag', async () => {
    const oneTag = [{ id: 1, label: 'Tag 1' }]

    render(<TagList {...defaultProps} tags={oneTag} />)

    const editButton = screen.getByRole('button', {
      name: 'Edit',
    })

    await userEvent.click(editButton)

    const editField = screen.getByRole('textbox', { name: 'Edit tag' })
    expect(editField).toBeInTheDocument()

    await userEvent.clear(editField)
    await userEvent.type(editField, 'Edited')
    await userEvent.keyboard('[Enter]')

    expect(editField).toHaveValue('Edited')

    expect(mockHandleEditTag).toBeCalledWith({
      tag: {
        id: 1,
        label: 'Edited',
      },
      tags: oneTag,
    })
  })

  it('can successfully delete the tag', async () => {
    const oneTag = [{ id: 1, label: 'Tag 1' }]

    render(<TagList {...defaultProps} tags={oneTag} />)

    const deleteButton = screen.getByRole('button', {
      name: 'Delete',
    })

    await userEvent.click(deleteButton)

    expect(mockHandleDeleteTag).toBeCalledWith({
      id: 1,
      tags: oneTag,
    })
  })
})
