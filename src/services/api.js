import axios from "axios";

export async function fetchData() {

  const response = await axios.get(
    "https://dummyjson.com/products"
  )
  return response.data.products;
}
