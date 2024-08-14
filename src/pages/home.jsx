import {
  Hero,
  ServiceSect,
  MyStory,
  MyBook,
  SubSect,
  Testimonial,
  // Faq,
} from "../components/components";

const Home = () => {
  return (
    <>
      <div id="home">
        <Hero />
        <ServiceSect />
        <MyStory />
        <SubSect />
        <MyBook />
        <Testimonial />
        {/* <Step /> */}
        {/* FREQUENTLY ASKED QUESTION */}
        {/* <Faq /> */}
      </div>
    </>
  );
};

export default Home;
