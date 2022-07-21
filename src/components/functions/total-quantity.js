export default function setTotalQuantity(books) {
  const totalQuantity = books.reduce((sum, item) => sum + item.quantity, 0)
  return totalQuantity
}
