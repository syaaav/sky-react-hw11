import { useParams } from 'react-router-dom'
import NavBar from '../../navigation/navigation'
import './style.css'

const GeneralCart = () => {
  const params = useParams()

  return (
    <div className="content">
      <NavBar />
      <div className="total-order">
        <h1>Order</h1>
        <div className="quantity">
          <h3>Quantity: {params.quantity} books</h3>
        </div>
        <div className="price">
          <h3>Sum: {params.price} rub.</h3>
        </div>
      </div>
    </div>
  )
}

export default GeneralCart
