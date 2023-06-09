import { Carousel } from "@material-tailwind/react";
import caroutips1 from "./../assets/image/caroutips1.jpeg"
import caroutips2 from "./../assets/image/caroutips2.jpeg"
import caroutips3 from "./../assets/image/caroutips3.jpeg"
import './index.css'
 
export default function CarouselTips() {
  return (
    <Carousel
      className="caroutips"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={caroutips1}
        alt="image 1"
      />
      <img
        src={caroutips2}
        alt="image 2"
      />
      <img
        src={caroutips3}
        alt="image 3"
      />
    </Carousel>
  );
}