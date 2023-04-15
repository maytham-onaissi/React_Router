import Page from "../components/page";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];
const ProductsPage = () => {
  return (
    <>
      <h1>The Products Page!</h1>
      <ul>
        {PRODUCTS.map((item) => (
          <li key={item.id}>
            <Page page={`/products/${item.id}`} title={`${item.title}`} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
