import React from 'react'
import './bottompanel.scss'
import {observer} from "mobx-react-lite";
import {currency} from "../../../utils/currency";
import cart from "../../../store/cart";

const BottomPanel = observer(() => {
  return (
      <div className={'cart__panel'}>
          <div className="container">
              <p className={'cart__panel-text'}>Общая стоимость:</p>
              <div className="cart__panel-total">
                  <p>{currency(cart.total)}</p>
                  <button className="btn">Оплатить</button>
              </div>
          </div>
      </div>
  )
})

export default BottomPanel;