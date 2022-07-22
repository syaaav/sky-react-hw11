import { useState } from 'react'
import booksStub from '../../books-list/books-stub'
import NavBar from '../../navigation/navigation'
import OrderDetail from './cart-detail/order-detail'
import setTotalPrice from '../../functions/total-price'
import setTotalQuantity from '../../functions/total-quantity'
import './style.css'

const Order = () => {
  const [books, setBooks] = useState(booksStub())

  const setQuatinty = (id, quantity) => {
    setBooks(
      books.map((book) => (book.id !== id ? book : { ...book, quantity }))
    )
  }

  return (
    <div className="content">
      <div className="header">
        <div className="title">Bookstore</div>
        <NavBar
          totalQuantity={setTotalQuantity(books)}
          totalPrice={setTotalPrice(books)}
        />
      </div>
      <div className="order">
        {books.map((book) => (
          <OrderDetail key={book.id} book={book} setQuantity={setQuatinty} />
        ))}
      </div>
    </div>
  )
}

export default Order
