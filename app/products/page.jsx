import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";


async function getData() {
  const res = await fetch('http://localhost:3000/api/products');
  const products = await res.json();

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return {products:products?.productsData}
}

export default async function Product() {
  const {products} = await getData();
  return (
    <div className="p-4">
       <div className="py-2 ">
       <SearchBar />
       </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
