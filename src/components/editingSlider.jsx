import { useState, useEffect, useRef } from "react";
import editingData from "../data/editingData";

const EditingSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - slider.offsetLeft);
      setScrollLeft(slider.scrollLeft);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging, startX, scrollLeft]);

  const handleSlideClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div style={{ cursor: "pointer" }} id="testimonial">
      <section id="mySlider" className="py-16  xs:px-6 xx:px-2">
        <div className="relative">
          <div className="">
            <h2 className="text-center text-2xl mb-12 font-bold text-gray-800 dark:text-white md:text-4xl">
              What My Students Have To Say
            </h2>
          </div>

          <div id="slider-container" ref={sliderRef}>
            {editingData.map((items, index) => (
              <div
                key={items.id}
                className={`slide ${
                  index === currentSlide ? "active" : ""
                } relative bg-primary rounded dark:bg-secondary`}
                onClick={() => handleSlideClick(index)}
              >
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={items.img}
                    alt=""
                    width=""
                    height=""
                    loading="lazy"
                  />
                  <div className="mb-2">
                    <h6 className="">{items.name}</h6>
                    <p className="">{items.title}</p>
                  </div>
                </div>
                <p className="">{items.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditingSlider;
