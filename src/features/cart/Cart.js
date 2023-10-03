import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCartAsyncApi, updateCartAsyncApi } from './cartSlice';
import './Cart.css';

export function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartArray)

  const HandleIncrement = (id, quan) => {
    console.log({ id, quan })
    let quantity = quan + 1;
    console.log(quantity)
    dispatch(updateCartAsyncApi({ id, quantity }))
  }
  const HandleDecrement = (id, quan) => {
    console.log({ id, quan })
    let quantity;
    quan >= 2 ? quantity = quan - 1 : dispatch(deleteCartAsyncApi(id));
    console.log(quantity)
    dispatch(updateCartAsyncApi({ id, quantity }))
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }} >
      <div className="container bootdey">
        <div className="row bootstrap snippets">
          <div className="clearfix visible-sm" />
          {/* Cart */}
          <div className="col-lg-9 col-md-9 col-sm-12">
            <div className="col-lg-12 col-sm-12">
              <span className="title">SHOPPING CART</span>
            </div>
            <div className="col-lg-12 col-sm-12 hero-feature">
              <div className="table-responsive">
                <table className="table table-bordered tbl-cart">
                  <thead>
                    <tr>
                      <td className="hidden-xs">Image</td>
                      <td>Product Name</td>
                      <td className="td-qty">Quantity</td>
                      <td>Unit Price</td>
                      <td>SubTotal</td>
                      <td>Remove</td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      items.map((value) => {
                        return (
                          <tr>
                            <td className="hidden-xs">
                              <img src={value.thumbnail} alt={value.title} title width={47} height={47} />
                            </td>
                            <td>{value.title}</td>
                            <td>
                              <div className="input-group bootstrap-touchspin"><span className="input-group-btn"><button onClick={() => HandleDecrement(value.id, value.quantity)} className="btn btn-default bootstrap-touchspin-down" type="button">-</button></span><span className="input-group-addon bootstrap-touchspin-prefix" style={{ display: 'none' }} /><input type="text" name value={value.quantity} className="input-qty form-control text-center" style={{ display: 'block' }} readOnly /><span className="input-group-addon bootstrap-touchspin-postfix" style={{ display: 'none' }} /><span className="input-group-btn"><button onClick={() => HandleIncrement(value.id, value.quantity)} className="btn btn-default bootstrap-touchspin-up" type="button">+</button></span></div>
                            </td>
                            <td className="price">${value.price}</td>
                            <td className="sub-total">${value.price * value.quantity}</td>
                            <td className="text-center">
                              <button onClick={() => dispatch(deleteCartAsyncApi(value.id))} className="remove_cart" rel={2}>
                                <i className="fa fa-trash-o" />
                              </button>
                            </td>
                          </tr>
                        )
                      })
                    }
                    <tr>
                      <td colSpan={4} align="right">Total</td>
                      <td className="total" colSpan={2}><b>$ {items.reduce((acc, itt) => itt.price * itt.quantity + acc, 0)}</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* End Cart */}
        </div>
      </div>
    </div>
  );
}
