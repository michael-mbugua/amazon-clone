import Head from "next/head";
import Headers from "../components/Headers";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Headers/>
      <main className="max-w-screen-2xl mx-auto">
      <Banner/>
      <ProductFeed products={products}/>
      </main>

    </div>
  );
}
export async function getServerSideProps(context){
  const products = await fetch("https://fakestoreapi.com/products").then(resp=>resp.json());
  return {
    props:{
    products,
  },};
}
