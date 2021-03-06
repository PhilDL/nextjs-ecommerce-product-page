import Head from "next/head";
import styled from "styled-components";
import Header from "../components/Header";
import Product from "../components/Product";
import { PRODUCT } from "../data";
import { QUERIES } from "../constants";
import { CartContextProvider } from "../store/cart-context";

export default function Home() {
  return (
    <CartContextProvider>
      <Head>
        <title>Ecommerce Product page NextJS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Traning CSS StyledComponent React And NextJS"
        />
      </Head>
      <Header />
      <Main>
        <Product product={PRODUCT} />
      </Main>
    </CartContextProvider>
  );
}

const Main = styled.main`
  padding-left: 24px;
  padding-right: 24px;
  height: 100%;
  @media ${QUERIES.tabletAndUp} {
    margin: auto;
    max-width: 1110px;
    padding: 48px;
  }
`;
