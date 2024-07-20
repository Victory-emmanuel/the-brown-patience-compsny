import { Email } from "@mui/icons-material";
import MySlider from "../components/mySlider";
import Section2 from "../components/testimonialPgSects/section2";

const TestimonialPg = () => {
  return (
    <div>
      <MySlider />
      <Section2 />
      {/* Ask your questions */}
      <div className="">
        <Email />
      </div>
    </div>
  );
};

export default TestimonialPg;
