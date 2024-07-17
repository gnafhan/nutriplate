import { Carousel } from "flowbite-react";

export function CarouselHome() {
  return (
    <div className="h-[28vh]">
      <Carousel slideInterval={3000}>
        <img className="rounded-lg shadow-lg" src="/img/slide/slide1.svg" alt="..." />
        <img className="rounded-lg shadow-lg" src="/img/slide/slide2.svg" alt="..." />
        <img className="rounded-lg shadow-lg" src="/img/slide/slide3.svg" alt="..." />
        <img className="rounded-lg shadow-lg" src="/img/slide/slide4.svg" alt="..." />
      </Carousel>
    </div>
  );
}