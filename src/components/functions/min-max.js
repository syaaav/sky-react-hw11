import PropTypes from 'prop-types'

const MinMax = ({ id, min = 1, max, current, setQuantity }) => {
  function validCheck(num) {
    const validNum = Math.max(min, Math.min(max, num))
    setQuantity(id, validNum)
  }

  const inc = () => validCheck(current + 1)
  const dec = () => validCheck(current - 1)

  return (
    <div className="order_card_buttons">
      <button type="button" className="order_card_button minus" onClick={dec}>
        -
      </button>
      <button type="button" className="order_card_button plus" onClick={inc}>
        +
      </button>
    </div>
  )
}

MinMax.propTypes = {
  id: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
}

MinMax.defaultProps = {
  min: 1,
}

export default MinMax
