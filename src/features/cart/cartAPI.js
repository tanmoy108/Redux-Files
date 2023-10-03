import axios from "axios";

export function fetchCart() {
  const data = axios.get(`http://localhost:8000/carts`)
  return data;
}
export function postCart(item) {
  const data = axios.post(`http://localhost:8000/carts`,item)
  return data;
}
export function deleteCart(id) {
  const data = axios.delete(`http://localhost:8000/carts/${id}`)
  return data;
}
export function updateCart({id,quantity}) {
  console.log(id)
  console.log(quantity)
  const data = axios.patch(`http://localhost:8000/carts/${id}`,{quantity})
  return data;
}
