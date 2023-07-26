'use client'

import { useState } from 'react'
import { tagAlreadyExists } from '../utils'

// Out of scope: create unique IDs for each form
const ID = 'unique-id'

type Tag = {
  id: number
  label: string
}

type FormProps = {
  handleAddTag: ({ label, tags }: { label: string; tags: Tag[] }) => void
  tags: Tag[]
}

const Form = ({ tags, handleAddTag }: FormProps) => {
  const [newTagLabel, setNewTagLabel] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (newTagLabel && !tagAlreadyExists({ label: newTagLabel, tags })) {
      // Call API to create new tag
      handleAddTag({ label: newTagLabel, tags })

      // Clear input field
      setNewTagLabel('')
    } else {
      // Outside scope: Display error that the field is empty or the tag already exists
    }

    e.preventDefault()
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <label htmlFor={`{ID}-input`}>New tag</label>
      <input
        autoFocus
        id={`{ID}-input`}
        onChange={(e) => setNewTagLabel(e.target.value)}
        type="text"
        value={newTagLabel}
      />
      <button type="submit">Create tag</button>
    </form>
  )
}

export default Form
