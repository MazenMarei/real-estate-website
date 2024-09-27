import HomeMainImage from "../homeMainImage";
import CarouselCard from "../shared/CarouselCard/CarouselCard";
export default function Home() {
  return (
    <>
      <HomeMainImage />
      <section className="container" style={{height:"500vh"}}>
        <div className="col-3 p-5">
          <CarouselCard />
        </div>
      </section>
    </>
  );
}
