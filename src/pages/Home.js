import React from "react";
import { MainSlider } from "../components/MainSlider";
import { CartArea } from "../components/CartArea";
import { ProductArea } from "../components/ProductArea";
import { BannerArea } from "../components/BannerArea";

export const Home = () => {
  return (
    <main>
      <MainSlider />
      <CartArea />
      <ProductArea />
      <BannerArea />
    </main>
  );
};
