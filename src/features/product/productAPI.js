import axios from "axios";
export function fetchProduct() {
  const data = axios.get("http://localhost:8000/products")
  return data;
}
