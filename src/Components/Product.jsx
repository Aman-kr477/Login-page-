import productsApi from "../apis/product";
import { useQuery } from "react-query";



const ProductPage=()=>{
    const params = {
        slug: "skin-beauty-serum", // using the slug to filter
    };

    const {data,isloading,isError } =useQuery({
        queryKey: ["products",params],
        queryFn:()=>productsApi.fetch(params),
      })
    
      console.log(data);
    if(isloading) {
    return <p>Loading...</p>;
    }
    if(isError){
    return <p>Error...</p>;
    }
    
    const product = data?.products?.filter((elem) => elem.slug === params.slug) || []
    console.log(product);
    
return (
    <>
      <div className="grid grid-cols-4 gap-4">
{product.length>0 && product.map((elem)=>{
    return (
      <>
        <div key={elem.slug} className="border border-gray-400 px-4 py-4 ">
        <div>{elem.name}</div>
        <div>{elem.slug}</div>
        <div>{elem.mrp}</div>
        <div>{elem.offer_price}</div>
        </div>
        </>
    )
})}
</div>
  </>
)
}
export default ProductPage;