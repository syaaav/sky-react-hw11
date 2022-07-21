export default function setTotalPrice(books) {
  const totalPrice = books.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  return totalPrice
}
