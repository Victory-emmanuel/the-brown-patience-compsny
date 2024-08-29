/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { ArrowRightAlt, DoneAll } from "@mui/icons-material";
import SwcTstm from "../components/swcTstm";
import Email from "../components/email";
import Section2 from "../components/testimonialPgSects/section2";

const CoachingForWriters = () => {
  return (
    <>
      <div id="service">
        {/* HERO */}
        <section className=" hero">
          <div
            style={{
              background: `url("https://i.postimg.cc/XqF4Bn6Q/Untitled-design-20.jpg")
    no-repeat center center/cover`,
            }}
            className="grid ss:py-40 xx:py-32 text-center  ss:px-12 xx:px-6 "
          >
            <h1 className="sm:text-6xl xx:text-3xl sm:font-extrabold xx:font-bold text-white xx:py-3  ss:py-6">
              Coaching For Writers
            </h1>
            <p className="sm:text-2xl xx:text-xl xx:w-full ss:w-[75%] mx-auto  text-white xx:py-3  ss:py-6 ">
              The sure fire way to get attention with your writing is to tell a
              story. Because stories keep people hooked. And this writing class
              teaches you to tell compelling stories in your writing.
            </p>
            <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
              <button className="w-[11rem] py-5 px-7 mx-auto  bg-white h-[4rem] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:text-white before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-lightAccent before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#343434]">
                CONTACT ME
              </button>
            </Link>
          </div>
        </section>
        {/* Story Writing Coaching */}
        <section className="story-writing-coaching ">
          <div className=" py-24 grid sm:grid-cols-2 xx:grid-cols-1 xx:px-6   sm:gap-4 ss:px-12 bg-extraClr ">
            <div className="   md:px-0 grid place-self-center">
              {/* small screen image and btn */}
              <div className="  place-content-center xx:grid sm:hidden ">
                <Link to={""}>
                  <button
                    style={{
                      boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.35)",
                    }}
                    className="relative  tracking-wide mb-12  xs:px-12 xx:px-6  py-4 text-secondary text-lg  font-bold  overflow-hidden bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0"
                  >
                    STORY WRITING COACHING
                  </button>
                </Link>
              </div>
              {/* //// */}
              <div className="mb-0 lg:pr-8 xl:pr-6 lg:text-left ">
                {/* large screen btn */}
                <div className=" grid place-content-center  xx:hidden sm:block mx-auto">
                  <Link to={""}>
                    <button
                      style={{
                        boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.35)",
                      }}
                      className="relative tracking-wide mb-12 ml-6 lg:px-12 sm:px-8 py-4 text-secondary lg:text-xl sm:text-lg font-bold  overflow-hidden bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0"
                    >
                      STORY WRITING COACHING
                    </button>
                  </Link>
                </div>
                {/* ///// */}
                <div className="">
                  <p className="mb-6 font-medium  lg:text-lg text-secondary lg:text-left sm:text-base md:text-center">
                    Stories. We love them. We read them. We pay attention to
                    them. And if you can tell a compelling story, you can get
                    our attention, and you can move us. You can move us to give
                    attention to our families, to protect the environment, to
                    buy a product, to save our own lives. I am a story writing
                    coach who teaches you to tell stories that move. In a 4-week
                    course called The Art of Writing Compelling Stories.
                  </p>
                  <h5 className="mb-6  text-accent lg:text-left md:text-center ss:text-2xl xx:text-xl">
                    Course Objective:
                  </h5>
                  <p className="mb-6 font-medium  lg:text-lg text-secondary lg:text-left sm:text-base md:text-center">
                    At the end of this Course, you would have learnt how to
                    craft stories that grab the attention of your audience,
                    sustain that attention, and communicate your message. In
                    addition, you'll learn to give them something that remains
                    with them a long time. In short, you would have learnt to
                    leave lasting impressions on your reader, causing them to
                    remember, spurring them to action.
                  </p>
                  <p className="mb-6 font-medium  lg:text-lg text-secondary lg:text-left sm:text-base md:text-center">
                    At the end of this 4-week course, you'll be a better writer.
                    You'll come to recognize just how good writers write. Your
                    eyes will be opened to note what makes their writing so
                    effective. It'll be like looking at a slice of cake and
                    finally saying, “Hey, I know how you baked that!”
                  </p>
                </div>
              </div>
            </div>

            {/* big screen image */}
            <div className="bg ss:grid place-content-top xx:hidden">
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)" }}
                className="img ml-auto lg:w-[32rem] lg:h-[40rem] sm:w-[24rem] sm:h-[32rem] rounded-lg"
              ></div>
            </div>
            <div className=" col-span-2 ">
              <h5 className="mb-6 ss:text-2xl xx:text-xl xx:mt-6 ss:mt-12  text-accent lg:text-left md:text-center">
                Why though? Why should you learn to communicate with stories?
              </h5>
              <p className="my-6 font-medium  ss:text-lg text-secondary text-left xx:text-base">
                As Bukola Adewuyi, a gifted student of the course, wisely
                observed: “I learnt that the basic tactic to present my message
                is with a STORY. Stories just have a way of keeping people
                hooked. No wonder I can spend a whole day reading a 428-page
                Christian fiction book and yet start yawning the moment I pick
                up a research article.”
              </p>
              <p className="my-6 font-medium  ss:text-lg text-secondary text-left xx:text-base">
                We love stories. We read them. We pay attention to them. If you
                want to tell us something, tell us through a story. You'll get
                our attention. And if you can tell a compelling story, you can
                move us. You can move us to give attention to our families, to
                protect the environment, to buy a product, to save our own
                lives. I am a story writing coach who teaches you to tell
                stories that move
              </p>
              <p className="my-6 font-medium  ss:text-lg text-secondary text-left xx:text-base">
                That's what this writing class, The Art of Writing Compelling
                Stories , is about.
              </p>

              <h5 className="ss:text-2xl xx:text-xl text-accent">
                What do we do in this writing class?
              </h5>
              <div className="my-6 font-medium  ss:text-lg text-secondary text-left xx:text-base">
                <ol className="list-disc">
                  <li className="ml-6 mb-4">
                    Teach you to put your thoughts together and communicate them
                    clearly, compellingly.
                  </li>
                  <li className="ml-6 mb-4">
                    Teach you to write correctly, observing necessary
                    punctuation marks.
                  </li>
                  <li className="ml-6 mb-4">
                    Teach you how to use stories to pass across your message.
                  </li>
                  <li className="ml-6 mb-4">
                    Teach you how to take a message and tailor it to your
                    specific audience.
                  </li>
                  <li className="ml-6 mb-4">
                    Teach you how to take the most serious of topics and make
                    them interesting to read—whether in blog posts, newsletters,
                    articles, essays, and more.
                  </li>
                  <li className="ml-6 mb-4">
                    Teach you to grab attention with your writing.
                  </li>
                  <li className="ml-6 mb-4">
                    Teach you to write like the writers you admire.
                  </li>
                </ol>
              </div>
              <p className="my-6 font-medium  ss:text-lg text-secondary text-left xx:text-base">
                The 4-week online writing class began in 2021, and there are
                more testimonials than I can possibly upload. You'll find a
                small percentage below.
              </p>
              <p className="my-6 font-medium  lg:text-lg text-secondary lg:text-left md:text-lg md:text-center"></p>
              <div className="  grid place-content-start  mt-12">
                <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                  <div className="btn-two-container ">
                    <button className="text-xl font-extrabold btn-two mt-3 w-[16rem] h-[4rem]">
                      SEND ME A MESSAGE
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-primary dark:bg-secondary xx:px-6 ss:px-12">
            <div className="gap-8 items-center py-24 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
              <div className="mt-4 md:mt-0 text-left">
                <h2 className="mb-12 text-center xx:text-2xl ss:text-4xl tracking-tight font-extrabold text-accent dark:text-primary">
                  How do classes hold?
                </h2>
                <div className=" dark:text-primary">
                  <p className="mb-6 font-light text-secondary md:text-lg dark:text-primary">
                    Classes hold entirely online. On a WhatsApp Course Page.
                    Each class is followed by writing submissions (assignments).
                  </p>
                  <h5 className="font-semibold mb-2">
                    Classes hold thrice a week:
                  </h5>
                  <ul className="list-disc mb-6">
                    <li>- Mondays. Wednesdays. Saturdays.</li>
                    <li>- 8 PM to 9 PM each day.</li>
                    <li>- For 4 weeks. </li>
                  </ul>
                  <p className="mb-6 font-light text-secondary md:text-lg  dark:text-primary">
                    Classes are arranged such that if a student is unable to
                    attend class by 8 PM, he or she can go to the Course Page
                    later, read up, and attempt the submissions. Questions, of
                    course, will be attended to. And where a student needs more
                    clarity, it will be provided.
                  </p>
                  <p className="mb-6 font-light text-secondary md:text-lg  dark:text-primary">
                    After 4 weeks, students who have completed the course work
                    (their writing submissions) will be certified. And
                    mentorship follows from there. Mentorship means that
                    students can continue to relate with the Coach, ask
                    questions, seek her input, and count on her guidance in
                    their writing journey.
                  </p>
                  <h5 className="font-semibold mb-2">
                    How do you join the story writing class?
                  </h5>
                  <ul className="list-disc mb-6">
                    <li>- ⦁ Find out when the next edition begins. </li>
                    <li>- ⦁ Pay the course fee. </li>
                    <li>- ⦁ Get ready for class. </li>
                  </ul>
                  <p className="mb-6 font-light text-secondary md:text-lg  dark:text-primary">
                    Want to know when the next edition begins? Please send a
                    message
                    <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                      <strong className="text-accent ml-1">here</strong>
                    </Link>
                  </p>
                </div>

                {/* <div className="  grid place-content-start  xx:my-6 ss:mt-12">
                  <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 w-[16rem] h-[4rem]">
                        SEND ME A MESSAGE
                      </button>
                    </div>
                  </Link>
                </div> */}
              </div>
              <div className=" grid">
                <img
                  className="lg:justify-self-end md:justify-self-center ss:block  xx:hidden xx:my-6 md:my-0 lg:mr-12 md:mr-0"
                  src="https://i.postimg.cc/dQpzFDWb/20240511-231906.jpg"
                  alt="brown patience"
                  style={{
                    borderRadius: "10px",
                    boxShadow: " -8px 7px 31px 8px rgba(0,0,0,0.51)",
                  }}
                />
              </div>
              {/* small screen */}
              <div className=" grid">
                <img
                  className="lg:justify-self-end md:justify-self-center xx:my-6 ss:hidden  xx:block md:my-0 lg:mr-12 md:mr-0"
                  src="https://i.postimg.cc/vmW76GpB/20231213-074326.jpg"
                  alt="brown patience"
                  style={{
                    borderRadius: "10px",
                    boxShadow: " -8px 7px 31px 8px rgba(0,0,0,0.51)",
                  }}
                />
              </div>
            </div>
          </div>
          {/* STEPS */}
          {/* <div className="ss:px-12 xx:px-6 mt-12 py-16 mb-12 mx-auto ">
            <div className="mb-12 md:mx-auto text-center">
              <h2 className=" pb-6  ss:text-3xl xx:text-2xl font-bold leading-none tracking-tight text-secondary dark:text-primary md:mx-auto">
                How do you join the story writing class?
              </h2>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 sm:grid-cols-2">
              <div className="bg-secondary dark:bg-accent p-6 rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-2xl font-bold text-white">Step 1</p>
                  <ArrowRightAlt sx={{ color: "#fff" }} />
                </div>
                <p className=" text-white">
                  — Find out when the next edition is.
                </p>
              </div>
              <div className="bg-extraClr p-6 rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-2xl font-bold">Step 2</p>
                  <ArrowRightAlt sx={{ color: "#343434" }} />
                </div>
                <p className="text-secondary">— Pay the course fee.</p>
              </div>
              <div className="bg-extraClr p-6 rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-2xl font-bold">Step 3</p>
                  <DoneAll sx={{ color: "#343434" }} />
                </div>
                <p className="text-secondary">— Get ready for class.</p>
              </div>
            </div>
          </div> */}
        </section>
        {/* Testimonial  */}
        <div style={{ cursor: "grab" }} id="testimonial">
          <section className="py-16 bg-extraClr dark:bg-black xx:px-0  md:px-12">
            <div className="  m-auto  text-secondary dark:text-gray-300 xx:px-2 md:px-12 xl:px-6">
              <div className="mb-20 space-y-4  md:px-0">
                {/* <SwcTstm /> */}
                <Section2 />
              </div>
            </div>
          </section>
        </div>
        {/* Ask your questions */}
        <div className="">
          <Email />
        </div>
      </div>
    </>
  );
};

export default CoachingForWriters;
