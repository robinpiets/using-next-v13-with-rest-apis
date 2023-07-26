import { Tag } from "../types";

const API_URL = "https://retoolapi.dev/EAoi29";

export async function addTag({ tag, tags }: { tag: Tag; tags: Tag[] }) {
  await fetch(`${API_URL}/tags`, {
    method: "POST",
    body: JSON.stringify(tag),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return [...tags, tag];
}

export async function editTag({ tag, tags }: { tag: Tag; tags: Tag[] }) {
  await fetch(`${API_URL}/tags/${tag.id}`, {
    method: "PATCH",
    body: JSON.stringify({ label: tag.label }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return tags;
}

export async function deleteTag({ id, tags }: { id: number; tags: Tag[] }) {
  await fetch(`${API_URL}/tags/${id}`, {
    method: "DELETE",
  });
  return tags;
}
