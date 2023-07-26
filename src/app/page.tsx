'use client'

import { fetcher } from '@/lib/actions'
import { addTag, deleteTag, editTag } from '@/lib/actions/tags'
import Footer from '@/lib/components/Layout/Footer'
import TagForm from '@/lib/components/Tags/TagForm'
import TagList from '@/lib/components/Tags/TagList'
import { Tag } from '@/lib/types'
import useSWR from 'swr'
import Container from '@/lib/components/Layout/Container'
import Main from '@/lib/components/Layout/Main'

export default function Page() {
  const { data, mutate } = useSWR<Tag[]>(
    'https://retoolapi.dev/EAoi29/tags',
    fetcher,
  )

  async function handleAddTag({
    label,
    tags = [],
  }: {
    label: string
    tags?: Tag[]
  }) {
    const lastTag = tags.at(-1)
    const id = lastTag?.id ? lastTag?.id + 1 : 0
    const newTag = {
      id,
      label,
    }

    try {
      // Set the local state with `optimisticData` and on the background the API will update and return 'the same' data
      await mutate(addTag({ tag: newTag, tags }), {
        optimisticData: [...tags, newTag],
        rollbackOnError: true,
        populateCache: true,
        revalidate: false,
      })
      // Out of scope: Show success message
      console.log('Successfully added tag')
    } catch (e) {
      // Because of `rollbackOnError`, the data will be updated when the API has an error

      // Out of scope: Show error message
      console.error('Error')
    }
  }

  async function handleEditTag({ tag, tags }: { tag: Tag; tags: Tag[] }) {
    const updatedTags = tags.map((t) => (t.id === tag.id ? tag : t))

    try {
      // Set the local state with `optimisticData` and on the background the API will update and return 'the same' data
      await mutate(editTag({ tag, tags: updatedTags }), {
        optimisticData: updatedTags,
        rollbackOnError: true,
        populateCache: true,
        revalidate: false,
      })
      // Out of scope: Show success message
      console.log('Successfully edited tag')
    } catch (e) {
      // Because of `rollbackOnError`, the data will be updated when the API has an error

      // Out of scope: Show error message
      console.error('Error')
    }
  }

  async function handleDeleteTag({ id, tags }: { id: number; tags: Tag[] }) {
    if (tags.length < 2) {
      alert(
        'Unfortunately the API does not allow the deletion of the last item. There has to be at least one tag.',
      )
      return
    }

    // Remove the to-be-deleted tag from the `tags`
    const updatedTags = tags.filter((t) => t.id !== id)

    console.log('delete', id)
    try {
      // Set the local state with `optimisticData` and on the background the API will update and return 'the same' data
      await mutate(deleteTag({ id, tags: updatedTags }), {
        optimisticData: updatedTags,
        rollbackOnError: true,
        populateCache: true,
        revalidate: false,
      })
      // Out of scope: Show success message
      console.log('Successfully deleted tag')
    } catch (e) {
      // Because of `rollbackOnError`, the data will be updated when the API has an error

      // Out of scope: Show error message
      console.error('Error')
    }
  }

  return (
    <Container>
      <Main>
        <h1>Tags</h1>

        {!data && 'loading...'}

        {data && (
          <>
            <TagList
              tags={data}
              handleEditTag={handleEditTag}
              handleDeleteTag={handleDeleteTag}
            />

            <TagForm tags={data} handleAddTag={handleAddTag} />
          </>
        )}
      </Main>
      <Footer />
    </Container>
  )
}
