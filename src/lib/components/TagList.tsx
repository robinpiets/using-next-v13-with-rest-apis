import { useState } from "react";
import { Tag } from "../types";
import { tagAlreadyExists } from "../utils";

type TagListProps = {
  handleDeleteTag: ({ id, tags }: { id: number; tags: Tag[] }) => void;
  handleEditTag: ({ tag, tags }: { tag: Tag; tags: Tag[] }) => void;
  tags: Tag[];
};

const TagList = ({ handleDeleteTag, handleEditTag, tags }: TagListProps) => {
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [newTagLabel, setNewTagLabel] = useState<string | null>(null);

  const saveTag = () => {
    // Save the new tag
    if (currentId && newTagLabel) {
      if (!tagAlreadyExists({ label: newTagLabel, tags })) {
        handleEditTag({
          tag: { id: currentId, label: newTagLabel },
          tags,
        });
      } else {
        // Outside scope: Display error that the new already exists
      }
    } else {
      // Outside scope: Display error that the new tag is empty
    }

    // Reset values
    setCurrentId(null);
    setNewTagLabel(null);
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLButtonElement | HTMLDivElement>,
  ) => {
    if (e.key === "Enter") {
      saveTag();
    }
    if (e.key === "Escape") {
      setCurrentId(null);
    }
  };

  return (
    <ul>
      {tags.map((tag: Tag) => {
        const isEditing = currentId === tag.id;
        return (
          <li key={tag.id}>
            {isEditing ? (
              <input
                aria-label="Edit tag"
                autoFocus
                onChange={(e) => setNewTagLabel(e.target.value)}
                onKeyUp={handleKeyPress}
                type="text"
                defaultValue={tag.label}
              />
            ) : (
              tag.label
            )}

            <button
              onClick={() => (isEditing ? saveTag() : setCurrentId(tag.id))}
              type="button"
            >
              {isEditing ? "Save" : "Edit"}
            </button>

            <button
              onClick={() => handleDeleteTag({ id: tag.id, tags })}
              type="button"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TagList;
