import axios from "axios";

const show=()=>axios.get("products/infinix-inbook-2");
 const fetch=(params)=>axios.get("/products",{params});
const productsApi={show,fetch};

export default productsApi;