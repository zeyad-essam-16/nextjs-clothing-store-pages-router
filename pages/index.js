import Hero from "../components/Home/Hero";
import Poster from "../components/Home/Poster";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Poster
        pcImage="/posters/new-arrival.jpg"
        mobileImage="/posters/arrival-mobile.webp"
        text="new arrivals"
        linkUrl="/products/new-arrivals"
        linkText="dicover"
      />
      <Poster
        pcImage="/posters/mens-top.webp"
        mobileImage="/posters/tops-mobile.webp"
        text="men's tops"
        linkUrl="/products/tops"
        linkText="dicover"
      />
      <Poster
        pcImage="/posters/mens-suits.webp"
        mobileImage="/posters/suits-mobile.webp"
        text="men's suits"
        linkUrl="/products/suits"
        linkText="dicover"
      />
    </>
  );
}
