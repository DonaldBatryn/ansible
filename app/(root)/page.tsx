import { getLatestProducts } from "@/lib/actions/product.actions";
import ProductList from "@/components/shared/product/product-list";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <div>
      <ProductList data={latestProducts} title="Newest arrivals" limit={25} />
    </div>
  );
};

export default Homepage;
