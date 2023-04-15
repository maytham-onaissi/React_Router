import { useParams } from "react-router-dom";
import Page from "../components/page";

const ProductDetailsPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Product details!</h1>
      <p>{params.id}</p>
      <Page page="/products" title="Back" relative="path" />
    </>
  );
};

export default ProductDetailsPage;
