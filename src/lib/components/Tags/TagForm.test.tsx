import userEvent from '@testing-library/user-event'
import TagForm from './TagForm'
import { render, screen } from '../../../../test-utils'

const mockHandleAddTag = jest.fn()

const defaultProps = {
  handleAddTag: mockHandleAddTag,
  tags: [{ id: 1, label: 'Tag 1' }],
}

describe('TagList', () => {
  it('can successfully create a new tag', async () => {
    render(<TagForm {...defaultProps} />)

    const addField = screen.getByRole('textbox', { name: 'New tag' })
    await userEvent.type(addField, 'Music')
    expect(addField).toHaveValue('Music')

    const createButton = screen.getByRole('button', {
      name: 'Create tag',
    })

    await userEvent.click(createButton)
    expect(addField).toHaveValue('')

    expect(mockHandleAddTag).toBeCalledWith({
      label: 'Music',
      tags: defaultProps.tags,
    })
  })
})
