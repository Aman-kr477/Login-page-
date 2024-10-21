import { useQuery } from "react-query";
import productsApi from "../apis/product";

const ProductPage = () => {
  const slug = "skin-beauty-serum"; // Define the slug you're searching for

  // Fetch products using React Query
  const { data, isLoading, isError } = useQuery(
    ["product", slug], // Query key - includes slug for caching
    () => productsApi.fetch({ slug }), // Query function - pass slug to fetch the product
    {
      // Optional: Refetch the data if the slug changes (default is true)
      enabled: !!slug, // Only fetch if slug exists
    }
  );

  // Handle loading state
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Handle error state
  if (isError) {
    return <p>Error loading product</p>;
  }

  // Extract products from the API response (assuming data.products is the response format)
  const product = data?.products || [];

  return (
    <div className="grid grid-cols-4 gap-4">
      {product.length > 0 ? (
        product.map((elem) => (
          <div key={elem.slug} className="border border-gray-400 px-4 py-4">
            <div>{elem.name}</div>
            <div>{elem.slug}</div>
            <div>{elem.mrp}</div>
            <div>{elem.offer_price}</div>
          </div>
        ))
      ) : (
        <p>No product found</p>
      )}
    </div>
  );
};

export default ProductPage;
