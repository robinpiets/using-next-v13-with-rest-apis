import { Tag } from "../types";

export const tagAlreadyExists = ({
  label: newLabel,
  tags,
}: {
  label: string;
  tags: Tag[];
}) => !!tags.filter(({ label }) => label === newLabel).length;
