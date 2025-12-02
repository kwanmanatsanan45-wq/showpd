import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
          inStock={product.inStock}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProductList;