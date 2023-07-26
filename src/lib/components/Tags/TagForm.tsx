'use client'

import { useState } from 'react'
import { tagAlreadyExists } from '../../utils'
import Button from '../Button'
import Input from '../Form/Input'
import Label from '../Form/Label'

// Out of scope: create unique IDs for each form
const ID = 'unique-id'

type Tag = {
  id: number
  label: string
}

type TagFormProps = {
  handleAddTag: ({ label, tags }: { label: string; tags: Tag[] }) => void
  tags: Tag[]
}

const TagForm = ({ tags, handleAddTag }: TagFormProps) => {
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
      <Label htmlFor={`{ID}-input`}>New tag</Label>
      <Input
        autoFocus
        id={`{ID}-input`}
        onChange={(e) => setNewTagLabel(e.target.value)}
        type="text"
        value={newTagLabel}
      />
      <Button color="red" type="submit">
        Create tag
      </Button>
    </form>
  )
}

export default TagForm
