export const isHidden = (
  draggedItem,
  itemType,
  id,
  isPreview
) => {
  return Boolean(
    !isPreview &&
      draggedItem &&
      draggedItem.type === itemType &&
      draggedItem.id === id
  )
}