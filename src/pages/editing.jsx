/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { IoMdDoneAll } from "react-icons/io";
import { MdArrowRightAlt } from "react-icons/md";
import EditingSlider from "../components/editingSlider";
import Email from "../components/email";

const Editing = () => {
  return (
    <>
      <div id="service">
        {/* HERO */}
        <section id="hero" className=" hero">
          <div
            // style={{
            //   background: ` url("https://i.postimg.cc/K8XNPK0r/Untitled-design-21.jpg")
            //   no-repeat center center/cover`,
            // }}
            className="grid ss:py-40 xx:py-32 text-center img ss:px-12 xx:px-6 "
          >
            <h1 className="sm:text-6xl xx:text-3xl sm:font-extrabold xx:font-bold text-white xx:py-3  ss:py-6">
              Book Writing and Editing
            </h1>
            <p className="sm:text-2xl xx:text-xl xx:w-full ss:w-[75%] mx-auto  text-white xx:py-3  ss:py-6 ">
              You know it's important to have pair of professional eyes go
              through your manuscript. Or you need someone to help you put your
              thoughts together, to help you make a book. . .
            </p>
            <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
              <button className="w-[11rem] py-5 px-7 mx-auto  bg-white h-[4rem] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:text-white before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-lightAccent before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#343434]">
                CONTACT ME
              </button>
            </Link>
          </div>
        </section>
        {/*BOOK WRITING AND EDITING */}
        <section className="ss:py-24 xx:py-16 grid place-content-center bg-primary dark:bg-secondary">
          <div className="  m-auto space-y-12 grid  ">
            <div className="ss:px-12  xx:px-6  grid justify-center">
              <div className=" inline-block mx-auto">
                <Link to={""}>
                  <button
                    style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.35)" }}
                    className="relative tracking-wide mb-12 ss:ml-6 px-12 py-4 text-secondary  text-xl font-bold  overflow-hidden bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0"
                  >
                    BOOK WRITING AND EDITING
                  </button>
                </Link>
              </div>

              <p className="text-secondary mt-4 mb-12 inline-block mx-auto ss:w-[75%] xx:w-full text-center text-lg dark:text-primary">
                "If you have a great message or story to share, and will like to
                put it out in book format, reach Brown Patience. She's got
                really great skills in books writing, editing and finishing. Her
                services are superb." — Timi Oshinowo
              </p>
            </div>
            {/* SECTION 1 */}
            <div className="py-16 my-12">
              <div className=" m-auto  bg-accent rounded-lg py-12 text-primary ss:px-12 xx:px-0">
                <h2 className="ss:text-3xl xx:text-xl text-center mb-16 font-semibold">
                  Who can benefit from this book writing and editing service?
                </h2>
                <div className="mx-auto grid gap-4 md:w-3/4 xx:w-full lg:w-full ss:grid-cols-2 lg:grid-cols-4">
                  <div
                    style={{
                      boxShadow: " 2px 2px 25px 0px rgba(255,255,255,0.36)",
                    }}
                    className="border xx:rounded-none ss:rounded-xl text-accent bg-white dark:bg-secondary xx:p-6 sm:py-12  sm:px-12 lg:px-8"
                  >
                    <div className="mb-12 h-[12rem] space-y-4">
                      <h3 className="sm:text-2xl xx:text-xl mb-6 font-light">
                        Experienced Professionals, Coaches & Speakers
                      </h3>
                      <p className="mb-6 text-gray-600 dark:text-gray-300">
                        Make your powerful speeches and wealth of experience
                        into life-changing books that further testify of your
                        authority in your field, reaching even more people.
                      </p>
                    </div>
                    <img
                      src="https://i.postimg.cc/L4N4dSjf/2150951395-1.jpg"
                      className="mx-auto w-full"
                      alt="illustration"
                      style={{
                        borderRadius: "10px",
                        boxShadow: " 2px 2px 39px 0px rgba(240,0,0,0.36)",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      boxShadow: " 2px 2px 25px 0px rgba(255,255,255,0.36)",
                    }}
                    className="border rounded-xl xx:rounded-none ss:rounded-xl text-accent bg-white dark:bg-secondary xx:p-6 sm:py-12  sm:px-12 lg:px-8"
                  >
                    <div className="mb-12 h-[12rem] space-y-4">
                      <h3 className="sm:text-2xl xx:text-xl mb-6 font-light">
                        Visionaries & Change Agents
                      </h3>
                      <p className="mb-6 text-gray-600 dark:text-gray-300">
                        Turn your burning message into a compelling call to
                        action. Sell your great vision to those who will be
                        willing to run with it. Get support for your cause.
                      </p>
                    </div>
                    <img
                      src="https://i.postimg.cc/63V34G71/2150697440-1.jpg"
                      className="mx-auto w-full"
                      alt="illustration"
                      style={{
                        borderRadius: "10px",
                        boxShadow: " 2px 2px 39px 0px rgba(240,0,0,0.36)",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      boxShadow: " 2px 2px 25px 0px rgba(255,255,255,0.36)",
                    }}
                    className="border rounded-xl xx:rounded-none ss:rounded-xl text-accent bg-white dark:bg-secondary xx:p-6 sm:py-12  sm:px-12 lg:px-8"
                  >
                    <div className="mb-12 h-[12rem] space-y-4">
                      <h3 className="sm:text-2xl xx:text-xl mb-6 font-light">
                        Empaths & Survivors
                      </h3>
                      <p className="mb-6 text-gray-600 dark:text-gray-300">
                        Share your experience with those who are currently where
                        you've been. Show them how you got through it all. Show
                        them how to get through it too.
                      </p>
                    </div>
                    <img
                      src="https://i.postimg.cc/Hx1nLtLy/2151438401-1.jpg"
                      className="mx-auto w-full"
                      alt="illustration"
                      style={{
                        borderRadius: "10px",
                        boxShadow: " 2px 2px 39px 0px rgba(240,0,0,0.36)",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      boxShadow: " 2px 2px 25px 0px rgba(255,255,255,0.36)",
                    }}
                    className="border rounded-xl xx:rounded-none ss:rounded-xl text-accent bg-white dark:bg-secondary xx:p-6 sm:py-12  sm:px-12 lg:px-8"
                  >
                    <div className="mb-12 h-[12rem] space-y-4">
                      <h3 className="sm:text-2xl xx:text-xl mb-6 font-light">
                        Authors Who Need Assistance
                      </h3>
                      <p className="mb-6 text-gray-600 dark:text-gray-300">
                        You've been writing for a while but it's been feeling
                        flat. Inject the necessary impact into your voice;
                        rebrand your writing; make your subsequent books sharp
                        and provoking, as they should be.
                      </p>
                    </div>
                    <img
                      src="https://i.postimg.cc/0QCkyR3T/2151186173-1.jpg"
                      className="mx-auto w-full"
                      alt="illustration"
                      style={{
                        borderRadius: "10px",
                        boxShadow: " 2px 2px 39px 0px rgba(240,0,0,0.36)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* SECTION 2 */}
            {/* <div className="mt-16 grid ss:px-12  xx:px-6  place-self-center  gap-8 sm:w-2/3  md:w-full md:grid-cols-2 md:-mx-8 lg:grid-cols-4">
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.75)" }}
                className="p-8 py-12 sm:p-12 rounded-3xl dark:bg-secondary dark:shadow-none"
              >
                <div className="space-y-12 text-center">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-secondary transition dark:text-white">
                      Editing
                    </h3>
                    <p className="text-secondary dark:text-primary">
                      <HashLink smooth to="#editing">
                        <img
                          src="https://i.postimg.cc/YSZBhqfs/Editing_body_text-bro_(1).png"
                          alt="editing"
                          className=""
                        />
                      </HashLink>
                    </p>

                    <HashLink smooth to={"#editing"}>
                      <p className=" text-accent">Learn More...</p>
                    </HashLink>
                  </div>
                </div>
              </div>
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.75)" }}
                className="p-8 py-12 sm:p-12 rounded-3xl dark:bg-secondary dark:shadow-none"
              >
                <div className="space-y-12 text-center">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-secondary transition dark:text-white">
                      Ghost Writing
                    </h3>
                    <p className="text-secondary dark:text-primary">
                      <HashLink smooth to="#ghost-writing">
                        <img
                          src="https://i.postimg.cc/W4hPNJrZ/Notes-bro_(1).png"
                          alt="editing"
                          className=""
                        />
                      </HashLink>
                    </p>

                    <HashLink smooth to={"#ghost-writing"}>
                      <p className=" text-accent">Learn More...</p>
                    </HashLink>
                  </div>
                </div>
              </div>
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.75)" }}
                className="p-8 py-12 sm:p-12 rounded-3xl dark:bg-secondary dark:shadow-none"
              >
                <div className="space-y-12 text-center">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-secondary transition dark:text-white">
                      Collaboration
                    </h3>
                    <p className="text-secondary dark:text-primary">
                      <HashLink smooth to="#collaboration">
                        <img
                          src="https://i.postimg.cc/W19vc7Dj/Collaboration-amico_(1).png"
                          alt="collaboration"
                          className=""
                        />
                      </HashLink>
                    </p>

                    <HashLink smooth to={"#collaboration"}>
                      <p className=" text-accent">Learn More...</p>
                    </HashLink>
                  </div>
                </div>
              </div>
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.75)" }}
                className="p-8 py-12 sm:p-12 rounded-3xl dark:bg-secondary dark:shadow-none"
              >
                <div className="space-y-12 text-center">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-secondary transition dark:text-white">
                      Transcription
                    </h3>
                    <p className="text-secondary dark:text-primary">
                      <HashLink smooth to="#transcription">
                        <img
                          src="https://i.postimg.cc/Qt7G5Gfx/Translator-bro_(1).png"
                          alt="Transcription"
                          className=""
                        />
                      </HashLink>
                    </p>

                    <HashLink smooth to={"#transcription"}>
                      <p className=" text-accent">Learn More...</p>
                    </HashLink>
                  </div>
                </div>
              </div>
            </div>
            <Link
              className="place-self-center grid"
              to={"https://wa.me/message/DOCQNYXAEPVDH1"}
            >
              <div className="btn-two-container mt-10">
                <button
                  style={{ borderLeft: "2px solid #ef0909" }}
                  className="text-xl font-extrabold btn-two mt-3 w-[9rem] h-[3rem]"
                >
                  Contact Me
                </button>
              </div>
            </Link> */}
          </div>
        </section>
        {/* My services */}
        <section className="">
          <div className="text-center my-12">
            <h2
              style={{
                borderBottom: "2px solid #343434",
                paddingBottom: "1rem",
              }}
              className=" mb-12 text-center text-2xl xx:hidden ss:inline-block font-bold text-secondary dark:text-white md:text-4xl"
            >
              What Service Do You Need?
            </h2>
          </div>
          {/* editing */}
          <div
            id="editing"
            className=" lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-extraClr  dark:bg-[#111]  "
          >
            <div className="   md:px-0  grid  place-self-center">
              <div className="mb-0 lg:pr-8 xl:pr-6 p-6 lg:text-left ">
                <h2 className="mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center">
                  <strong>Editing</strong>
                </h2>

                <div className=" sm:hidden xx:grid place-content-center">
                  {/* small screen  */}

                  <img
                    src="https://i.postimg.cc/YSZBhqfs/Editing_body_text-bro_(1).png"
                    alt=""
                    className=" ss:w-[32rem]  xs:w-[24rem]  xx:w-[20rem]  shadow-md"
                  />
                </div>
                <div className="">
                  <p className="my-6 font-medium  lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center">
                    You need me to dot your I’s, cross your T’s and ensure no
                    grammatical or typographic errors survive. As your editor, I
                    serve as a professional pair of eyes who will iron out
                    mistakes and polish your writing until it glimmers.
                  </p>
                </div>

                <div className="mb-10 grid place-content-start  md:mb-16 lg:mb-12">
                  <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]">
                        CONTACT ME
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg xx:hidden sm:grid place-content-end">
              <img
                src="https://i.postimg.cc/YSZBhqfs/Editing_body_text-bro_(1).png"
                alt=""
                className=" sm:w-[24rem] lg:w-[32rem] rounded-lg  shadow-md"
              />
            </div>
          </div>
          {/* ghost writing */}
          <div
            id="ghost-writing"
            className=" lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-primary  dark:bg-black  "
          >
            <div className="   md:px-0  grid  place-self-center">
              <div className="mb-0 lg:pr-8 xl:pr-6 p-6 lg:text-left ">
                <h2 className="mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center">
                  <strong>Ghost Writing</strong>
                </h2>

                <div className=" sm:hidden xx:grid place-content-center">
                  {/* small screen  */}

                  <img
                    src="https://i.postimg.cc/W4hPNJrZ/Notes-bro_(1).png"
                    alt=""
                    className=" ss:w-[32rem]  xs:w-[24rem]  xx:w-[20rem]  shadow-md"
                  />
                </div>
                <div className="">
                  <p className="my-6 font-medium  lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center">
                    You know what you want to write, but you probably only have
                    the skeletal framework. It’s still in your head, scribbled
                    on several notepads, or scattered round your laptop. I come
                    around to understand precisely what you want to write and
                    write it out for you.
                  </p>
                  <p className="mb-12 font-medium lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center">
                    It could be that you just don’t have the time to write.
                    Therefore, you share your dream with me and I reproduce it
                    on paper. Clearly, compellingly.
                  </p>
                </div>

                <div className="mb-10 grid place-content-start  md:mb-16 lg:mb-12">
                  <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]">
                        CONTACT ME
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg xx:hidden sm:grid place-content-end">
              <img
                src="https://i.postimg.cc/W4hPNJrZ/Notes-bro_(1).png"
                alt=""
                className=" sm:w-[24rem] lg:w-[32rem] rounded-lg  shadow-md"
              />
            </div>
          </div>
          {/* collaboration */}
          <div
            id="collaboration"
            className=" lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-extraClr  dark:bg-secondary  "
          >
            <div className="bg xx:hidden sm:grid place-content-start">
              <img
                src="https://i.postimg.cc/W19vc7Dj/Collaboration-amico_(1).png"
                alt=""
                className=" sm:w-[24rem] lg:w-[32rem] rounded-lg  shadow-md"
              />
            </div>
            <div className="   md:px-0  grid  place-self-center">
              <div className="mb-0 lg:pr-8 xl:pr-6 p-6 lg:text-left ">
                <h2 className="mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center">
                  <strong>Collaboration</strong>
                </h2>

                <div className=" sm:hidden xx:grid place-content-center">
                  {/* small screen  */}

                  <img
                    src="https://i.postimg.cc/W19vc7Dj/Collaboration-amico_(1).png"
                    alt=""
                    className=" ss:w-[32rem]  xs:w-[24rem]  xx:w-[20rem]  shadow-md"
                  />
                </div>
                <div className="">
                  <p className="my-6 font-medium  lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center">
                    You have an existing piece of work. With collaboration, a
                    paragraph could be redone or deleted altogether. A better
                    introduction could be added, repetitions removed, and the
                    message better explained. Collaboration is when I join with
                    you to make your message as rich as it should be. It’s a
                    partnership.
                  </p>
                  <p className="my-6 font-medium lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center">
                    With collaboration, you could send me 30 pages and I send
                    you 75. Of course, I won’t go adding things to your book or
                    redoing things unless we’ve discussed it. And I show you the
                    work at each step. You get to vet everything. If you say,
                    “Bravo! Carry on!” I carry on.
                  </p>
                  <p className="my-6 font-medium lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center">
                    This was from a client I collaborated with: “Thank you for
                    the work done so far and making the book more interesting to
                    read. I love the way you rearranged the chapters into parts.
                    I am currently vetting the major additions; I will let you
                    know once I am done.” That’s how it goes.
                  </p>
                </div>

                <div className="mb-10 grid place-content-start  md:mb-16 lg:mb-12">
                  <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]">
                        CONTACT ME
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* transcription */}
          <div
            id="transcription"
            className=" lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-primary  dark:bg-secondary "
          >
            <div className="bg xx:hidden sm:grid place-content-start">
              <img
                src="https://i.postimg.cc/Qt7G5Gfx/Translator-bro_(1).png"
                alt=""
                className=" sm:w-[24rem] lg:w-[32rem] rounded-lg  shadow-md"
              />
            </div>
            <div className="   md:px-0  grid  place-self-center">
              <div className="mb-0 lg:pr-8 xl:pr-6 p-6 lg:text-left ">
                <h2 className="mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center">
                  <strong>Transcription</strong>
                </h2>

                <div className=" sm:hidden xx:grid place-content-center">
                  {/* small screen  */}

                  <img
                    src="https://i.postimg.cc/Qt7G5Gfx/Translator-bro_(1).png"
                    alt=""
                    className=" ss:w-[32rem]  xs:w-[24rem]  xx:w-[20rem]  shadow-md"
                  />
                </div>
                <div className="">
                  <p className="my-6 font-medium  lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center">
                    What you have is a recording—audio or video recording—and
                    you want that recording made into a book. First, I
                    transcribe that recording, and then I take it from there,
                    making it into a book. It’s perfect for people who’d rather
                    “talk” their thoughts or message than sit to type it out.
                  </p>
                  <p className="my-6 font-medium lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center">
                    Some of us are just better off verbally explaining things
                    than writing them. So, if you think you’d do better sending
                    me a recording of your story, speech, or training than
                    attempting to write it, transcription covers all of it.
                  </p>
                  <p className="mb-6 font-medium lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center">
                    Mine is to ensure you write that important book, that you
                    share that necessary message. And the ways I help you are
                    editing, collaboration, ghostwriting, and transcription.
                    <i className=" mx-2">“Okay, I’m in. how do we do this?”</i>I
                    hear you ask.
                  </p>
                </div>

                <div className="mb-10 grid place-content-start  md:mb-16 lg:mb-12">
                  <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]">
                        CONTACT ME
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*   Books I've Worked On */}
        {/* <div className="  mx-auto px-6 py-16 mb-8 md:px-12">
          <div className="text-center">
            <h2
              style={{
                borderBottom: "2px solid #343434",
                paddingBottom: "1rem",
              }}
              className=" mb-12 text-center text-2xl xx:hidden ss:inline-block font-bold text-secondary dark:text-white md:text-4xl"
            >
              Books I've Worked On
            </h2>
          </div>

          <div className="grid gap-6 ss:px-4 xx:px-0 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            <div className="group relative rounded-3xl xx:w-full ss:space-y-6 overflow-hidden">
              <img
                className="mx-auto h-full w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="https://i.postimg.cc/wjLvVbsj/20240218-134019.jpg"
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-accent dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl xx:mb-2  ss:mb-4 font-semibold dark:text-gray-700 text-white">
                    Precious Ayomikun
                  </h4>
                </div>
                <p className="mt-2 text-primary dark:text-gray-600 text-base xs:text-sm xx:text-xs">
                  Precious Ayomikun carries the girl child in her thoughts — in
                  things she does, with the projects she embarks on, and the
                  places she volunteers in...{" "}
                  <HashLink smooth to="/editing#a-gift-to-deborah">
                    <span className="text-semibold text-primary">See More</span>
                  </HashLink>
                </p>
              </div>
            </div>

            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <img
                className="mx-auto h-full w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="https://i.postimg.cc/xCxTCwBt/20240218-134201.jpg"
                alt="Book cover"
                loading="lazy"
                width="640"
                height="805"
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-accent dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl xx:mb-2  ss:mb-4 font-semibold dark:text-gray-700 text-white">
                    Stephen Akintayo
                  </h4>
                </div>
                <p className="mt-2 text-primary dark:text-gray-600 text-base xs:text-sm xx:text-xs">
                  The personnel in charge of getting Dr. Stephen Akintayo's
                  Billionaire Codes edited sought an editor who could cut out
                  repetitions, tighten every chapter, and sharpen the message.
                  ...
                  <HashLink smooth to="/editing#billionaire-codes">
                    <span className="text-semibold text-primary">See More</span>
                  </HashLink>
                </p>
              </div>
            </div>

            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <img
                className="mx-auto h-full w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="https://i.postimg.cc/j2Bx6zxf/20240218-134232.jpg"
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-accent dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl xx:mb-2  ss:mb-4 font-semibold dark:text-gray-700 text-white">
                    Mayowa Owolabi
                  </h4>
                </div>
                <p className=" text-primary dark:text-gray-600 text-base xs:text-sm xx:text-xs">
                  When this manuscript got to me, I was told it had been edited
                  already. I'll never be caught putting down another person's
                  work but to be professionally fair, this manuscript,
                  supposedly edited before getting to me, surprised me...
                  <HashLink smooth to="/editing#edusell">
                    <span className="text-semibold text-primary">See More</span>
                  </HashLink>
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* STEPS */}
        <div className="ss:px-12 xx:px-6 mt-12 py-16 mb-12 mx-auto ">
          <div className="mb-12 md:mx-auto text-center">
            <h2 className=" pb-6  ss:text-3xl xx:text-2xl font-bold leading-none tracking-tight text-secondary dark:text-primary md:mx-auto">
              The 4-step process to get your book, your voice, your message out
              there:
            </h2>
          </div>
          <div className="grid  gap-10 lg:grid-cols-2 sm:grid-cols-1">
            <div className="bg-secondary dark:bg-accent p-6 rounded-lg">
              <div className="flex items-center justify-between mb-6">
                <p className="text-2xl font-bold text-white">
                  Meeting You & the Vision:
                </p>
                <MdArrowRightAlt style={{ color: "#fff" }} />
              </div>
              <p className=" text-white">
                This is the very first interaction where you and I get to talk.
                You send me your draft for editing or collaboration, audio or
                video files for transcription, or explain what you want to write
                if you need the ghostwriting service.
              </p>
              <p className=" text-white mt-4">
                As we talk over the phone or interact via text, you help me
                understand who you are and what you want to say, what service
                you need, and how soon you want it done. It’s really that easy.
              </p>
            </div>
            <div className="bg-extraClr p-6 rounded-lg">
              <div className="flex items-center justify-between mb-6">
                <p className="text-2xl font-bold">Finding Clarity:</p>
                <MdArrowRightAlt style={{ color: "#343434" }} />
              </div>
              <p className=" text-secondary">
                I’ll ask questions as we talk so we can clearly articulate your
                message, define your audience, and see if there is a need to
                return to the drawing board.
              </p>
              <p className=" text-secondary mt-4">
                Reviewing your manuscript or listening as you explain what you
                want to write gives us a chance to determine just how defined
                your message is. It may take a work-back:
              </p>
              <ul className="list-disc mt-6">
                <li>To whom are you writing?</li>
                <li>Why are you writing to them?</li>
                <li>
                  Now, what do you want to say to them? What are they supposed
                  to take away from reading your book?
                </li>
              </ul>
              <p className=" text-secondary mt-4">
                A clarity session may have you noting, just like this dear
                client, “Thank you for the correction. Everybody has been
                telling me how amazing the book is. No one pointed out these to
                me. I listened to your voice note thrice; it makes sense to me
                now. I knew something was missing.”
                <br />
                This clarity session will take a phone conversation or like most
                of my clients, a string of WhatsApp messages.
              </p>
            </div>
            <div className="bg-extraClr p-6 rounded-lg">
              <div className="flex items-center justify-between mb-6">
                <p className="text-2xl font-bold">Writing & Editing </p>
                <MdArrowRightAlt style={{ color: "#343434" }} />
              </div>
              <p className=" text-secondary">
                When we’re clear on precisely what you want, work will commence.
                This phase is where the actual writing takes place. Using an
                outline we designed, your book will come together seamlessly,
                with you reserving the right to monitor each milestone, ensuring
                it captures your voice and your “Why?” You get to approve the
                work as we go. If you like how it’s going, we carry on.
              </p>
              <p className=" text-secondary mt-4">
                Editing is the polishing phase. No, we can’t afford to let a
                comma be in the wrong place.
              </p>
            </div>
            <div className="bg-extraClr p-6 rounded-lg">
              <div className="flex items-center justify-between mb-6">
                <p className="text-2xl font-bold">Completion & Approval </p>
                <IoMdDoneAll style={{ color: "#343434" }} />
              </div>
              <p className=" text-secondary">
                Now it’s all done. When the work is completed and approved, your
                book, or any other written project, is fully yours. You hold in
                your hand the very thing you’ve been longing to write. This is
                the point where you happily promise to refer me to everyone
                who’ll need this service or like one of my clients, you say to
                me, “We will do big things together, Patience.” Cheers to that!
              </p>

              <p className="  mt-4 text-lg  text-accent font-semibold">
                Get started now!
              </p>
              <p className=" text-secondary mt-4">
                Let’s talk. Tell me about the book you’ve been desiring to
                write, the message you’ve been yearning to share. Let me ensure
                you share that message. <br /> Together, we will:
              </p>
              <ul className="list-disc mt-6">
                <li>Define your audience and clarify your message.</li>
                <li>
                  Organize your thoughts into a logical, well-flowing outline.
                </li>
                <li>Communicate your message clearly, compellingly.</li>
              </ul>
            </div>
          </div>
          <div className="  grid place-content-center  ss:mt-12 xx:mt-6">
            <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
              <div className="btn-two-container ">
                <button className="text-xl xx:text-lg font-extrabold btn-two mt-3 w-[16rem] h-[4rem]">
                  SEND ME A MESSAGE
                </button>
              </div>
            </Link>
          </div>
        </div>

        {/* BOOKS IVE'S WORKED ON "BODY" */}
        <section id="" className="">
          <div className="text-center my-12">
            <h2
              style={{
                borderBottom: "2px solid #343434",
                paddingBottom: "1rem",
              }}
              className=" mb-12 text-center text-2xl xx:hidden ss:inline-block font-bold text-secondary dark:text-white md:text-4xl"
            >
              Few Books I've Worked On
            </h2>
          </div>
          {/* Edusell */}
          <div
            id="edusell"
            className=" lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-extraClr dark:bg-[#111] "
          >
            <div className="   md:px-0  grid  place-self-center">
              <div className="mb-0 lg:pr-8 xl:pr-6 lg:text-left p-6">
                <h2 className="mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center">
                  <strong>Edusell</strong>
                </h2>
                {/* small screen */}
                <div className="bg xx:grid place-content-center sm:hidden">
                  <div
                    style={{
                      boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                      background: `url("https://i.postimg.cc/j2Bx6zxf/20240218-134232.jpg") no-repeat center center/cover`,
                    }}
                    className="img1  ss:w-[32rem]  sm:h-[40rem] xs:w-[24rem] xs:h-[32rem]  xx:w-[20rem] xx:h-[24rem]  my-8  sm:w-0 rounded-lg"
                  ></div>
                </div>
                {/* /// */}
                <div className="">
                  <p className="mb-6 font-medium xx:text-base  lg:text-lg text-secondary  dark:text-primary lg:text-left md:text-lg md:text-center">
                    <p className="mb-4">
                      When this manuscript got to me, I was told it had been
                      edited already. I'll never be caught putting down another
                      person's work but to be professionally fair, this
                      manuscript, supposedly edited before getting to me,
                      surprised me.
                    </p>
                    <p className="">
                      I was glad it hadn't been published in that state. Cause
                      it “needed” work.
                    </p>
                    <ul className=" my-4 list-none">
                      <li className=" mb-4 text-base">
                        — Grouping of similar parts into sections.
                      </li>
                      <li className=" mb-4 text-base">
                        — Rearranging the chapters so concepts could flow into
                        one another.
                      </li>
                      <li className=" mb-4 text-base">
                        — Renaming of chapters for clarity.
                      </li>
                      <li className=" mb-4 text-base">
                        — Lots of necessary deletions.
                      </li>
                      <li className=" mb-4 text-base">
                        — and ensuring the book's message rang out.
                      </li>
                    </ul>
                    <p className="">
                      It was like clearing away so much debris to unveil the
                      diamond beneath. <br /> At the end of my editing, my
                      client was also glad the manuscript hadn't been published
                      in its former state. <br /> When you need your manuscript
                      to shine—saying precisely what you intended it to
                      say—please send me a message. I'm an editor that can do
                      just that.
                    </p>
                  </p>
                </div>

                {/* <div className="mb-10 grid place-content-start  md:mb-16 lg:mb-12">
                  <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]">
                        GET YOUR COPY
                      </button>
                    </div>
                  </Link>
                </div> */}
              </div>
            </div>
            {/* big screen */}
            <div className="bg sm:grid place-content-end mb-auto xx:hidden">
              <div
                style={{
                  boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                  background: `url("https://i.postimg.cc/j2Bx6zxf/20240218-134232.jpg") no-repeat center center/cover`,
                }}
                className="img1  sm:w-[24rem] sm:h-[24rem]  lg:w-[32rem] lg:h-[32rem] rounded-lg"
              ></div>
            </div>
            {/* /// */}
          </div>
          {/* A gift to deborah */}
          <div
            id="a-gift-to-deborah"
            className=" lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-extraClr dark:bg-[#111] "
          >
            <div className="   md:px-0  grid  place-self-center">
              <div className="mb-0 lg:pr-8 xl:pr-6 lg:text-left p-6">
                <h2 className="mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center">
                  <strong>A Gift To Deborah</strong>
                </h2>
                {/* small screen */}
                <div className="bg xx:grid place-content-center sm:hidden">
                  <div
                    style={{
                      boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                      background: `url("https://i.postimg.cc/wjLvVbsj/20240218-134019.jpg") no-repeat center center/cover`,
                    }}
                    className="img1  ss:w-[32rem]  sm:h-[40rem] xs:w-[24rem] xs:h-[32rem]  xx:w-[20rem] xx:h-[24rem]  my-8  sm:w-0 rounded-lg"
                  ></div>
                </div>
                {/* /// */}
                <div className="">
                  <p className="mb-6 font-medium xx:text-base  lg:text-lg text-secondary  dark:text-primary lg:text-left md:text-lg md:text-center">
                    <p className="mb-4">
                      Precious Ayomikun carries the girl child in her thoughts —
                      in things she does, with the projects she embarks on, and
                      the places she volunteers in.
                    </p>
                    <p className="mb-4">
                      So when she decided to write a book for young women, a
                      book detailing her own stroll through the corridors of
                      depression and inadequacy, I was glad (oh so glad) to
                      collaborate with her & make it the sincere, vulnerable,
                      I-understand-what-it's-like letter she wanted to write.
                    </p>

                    <p className="">
                      Wherever a young woman finds this book, it'll be a gift
                      indeed.
                    </p>
                  </p>
                </div>

                {/* <div className="mb-10 grid place-content-start  md:mb-16 lg:mb-12">
                  <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]">
                        GET YOUR COPY
                      </button>
                    </div>
                  </Link>
                </div> */}
              </div>
            </div>
            {/* big screen */}
            <div className="bg sm:grid place-content-end mb-auto xx:hidden">
              <div
                style={{
                  boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                  background: `url("https://i.postimg.cc/wjLvVbsj/20240218-134019.jpg") no-repeat center center/cover`,
                }}
                className="img1  sm:w-[24rem] sm:h-[24rem]  lg:w-[32rem] lg:h-[32rem] rounded-lg"
              ></div>
            </div>
            {/* /// */}
          </div>
          {/*Envision */}
          <div
            id="envision"
            className=" lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-primary dark:bg-secondary "
          >
            {/* big screen */}
            <div className="bg sm:grid place-content-start mb-auto xx:hidden">
              <div
                style={{
                  boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                  background: `url("https://i.postimg.cc/LsVsdYDd/20240218-134117.jpg") no-repeat center center/cover`,
                }}
                className="img1  sm:w-[24rem] sm:h-[24rem]  lg:w-[32rem] lg:h-[32rem] rounded-lg"
              ></div>
            </div>
            {/* /// */}
            <div className="   md:px-0  grid  place-self-center">
              <div className="mb-0 lg:pr-8 xl:pr-6 lg:text-left p-6">
                <h2 className="mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center">
                  <strong>Envision</strong>
                </h2>
                {/* small screen */}
                <div className="bg xx:grid place-content-center sm:hidden">
                  <div
                    style={{
                      boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                      background: `url("https://i.postimg.cc/LsVsdYDd/20240218-134117.jpg") no-repeat center center/cover`,
                    }}
                    className="img1  ss:w-[32rem]  sm:h-[40rem] xs:w-[24rem] xs:h-[32rem]  xx:w-[20rem] xx:h-[24rem]  my-8  sm:w-0 rounded-lg"
                  ></div>
                </div>
                {/* /// */}
                <div className="">
                  <p className="mb-6 font-medium xx:text-base  lg:text-lg text-secondary  dark:text-primary lg:text-left md:text-lg md:text-center">
                    <p className="mb-4">
                      This Nigerian-born medical doctor could have been
                      prescribing medication only for the body, but she decided
                      to craft medicine for the mind as well.
                    </p>
                    <p className="mb-4">
                      Doctor Oyindamola wrote a short, precise, and sharp book
                      targeted at the ones who want to live purposefully. And
                      she needed a ghostwriter to collaborate with her on it, to
                      make the book the pointed, read-it-all-in-one-sitting
                      force it now is.
                    </p>

                    <p className="">Glad to have aided her quest!</p>
                  </p>
                </div>

                {/* <div className="mb-10 grid place-content-start  md:mb-16 lg:mb-12">
                  <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]">
                        GET YOUR COPY
                      </button>
                    </div>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
          {/*On Point */}
          <div
            id="on-point"
            className=" lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-primary dark:bg-secondary "
          >
            {/* big screen */}
            <div className="bg sm:grid place-content-start mb-auto xx:hidden">
              <div
                style={{
                  boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                  background: `url("https://i.postimg.cc/kMHgddQ5/20240218-134712.jpg") no-repeat center center/cover`,
                }}
                className="img1  sm:w-[24rem] sm:h-[24rem]  lg:w-[32rem] lg:h-[32rem] rounded-lg"
              ></div>
            </div>
            {/* /// */}
            <div className="   md:px-0  grid  place-self-center">
              <div className="mb-0 lg:pr-8 xl:pr-6 lg:text-left p-6">
                <h2 className="mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center">
                  <strong>On Point</strong>
                </h2>
                {/* small screen */}
                <div className="bg xx:grid place-content-center sm:hidden">
                  <div
                    style={{
                      boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                      background: `url("https://i.postimg.cc/kMHgddQ5/20240218-134712.jpg") no-repeat center center/cover`,
                    }}
                    className="img1  ss:w-[32rem]  sm:h-[40rem] xs:w-[24rem] xs:h-[32rem]  xx:w-[20rem] xx:h-[24rem]  my-8  sm:w-0 rounded-lg"
                  ></div>
                </div>
                {/* /// */}
                <div className="">
                  <p className="mb-6 font-medium xx:text-base  lg:text-lg text-secondary  dark:text-primary lg:text-left md:text-lg md:text-center">
                    <p className="mb-4">
                      Days after its author released this pointed missive into
                      the world, the number of downloads and reviews assured me
                      afresh of what I'd known since I saw the manuscript:
                      Olamide wrote a necessary book.
                    </p>
                    <p className="mb-4">
                      It was short, precise, and put goal setting in a
                      different, blessed light. I was honored to help make On
                      Point as rich as it was.
                    </p>
                    <p className="">
                      And Olamide says it's only the brief instalment of what's
                      to come. A bigger book will soon be here. Cheers to that!
                    </p>
                  </p>
                </div>

                {/* <div className="mb-10 grid place-content-start  md:mb-16 lg:mb-12">
                  <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]">
                        GET YOUR COPY
                      </button>
                    </div>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
          {/* Billionaire Codes */}
          <div
            id="billionaire-codes"
            className=" lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-extraClr dark:bg-[#111] "
          >
            <div className="   md:px-0  grid  place-self-center">
              <div className="mb-0 lg:pr-8 xl:pr-6 lg:text-left p-6">
                <h2 className="mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center">
                  <strong>Billionaire Codes</strong>
                </h2>
                {/* small screen */}
                <div className="bg xx:grid place-content-center sm:hidden">
                  <div
                    style={{
                      boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                      background: `url("https://i.postimg.cc/xCxTCwBt/20240218-134201.jpg") no-repeat center center/cover`,
                    }}
                    className="img1  ss:w-[32rem]  sm:h-[40rem] xs:w-[24rem] xs:h-[32rem]  xx:w-[20rem] xx:h-[24rem]  my-8  sm:w-0 rounded-lg"
                  ></div>
                </div>
                {/* small screen */}
                {/* <div className="bg xx:grid place-content-center sm:hidden">
                  <div
                    style={{
                      boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                      background: `url("https://i.postimg.cc/kg0R6XyD/20240218_134317.jpg") no-repeat center center/cover`,
                    }}
                    className=""
                  ></div>
                </div> */}
                {/* /// */}
                <div className="">
                  <p className="mb-6 font-medium xx:text-base  lg:text-lg text-secondary  dark:text-primary lg:text-left md:text-lg md:text-center">
                    <p className="mb-4">
                      The personnel in charge of getting Dr. Stephen Akintayo's
                      Billionaire Codes edited sought an editor who could cut
                      out repetitions, tighten every chapter, and sharpen the
                      message. It was my honor to serve as the editor they
                      needed.
                    </p>
                  </p>
                </div>

                {/* <div className="mb-10 grid place-content-start  md:mb-16 lg:mb-12">
                  <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]">
                        GET YOUR COPY
                      </button>
                    </div>
                  </Link>
                </div> */}
              </div>
            </div>
            {/* big screen */}
            <div className="bg sm:grid place-content-end mb-auto xx:hidden">
              <div
                style={{
                  boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                  background: `url("https://i.postimg.cc/xCxTCwBt/20240218-134201.jpg") no-repeat center center/cover`,
                }}
                className="img1  sm:w-[24rem] sm:h-[24rem]  lg:w-[32rem] lg:h-[32rem] rounded-lg"
              ></div>
            </div>
            {/* /// */}
          </div>
          {/* 7 Battles Every Trader Must Fight to Win */}
          <div
            id="7-battles-every-trader-must-figh-to-win"
            className=" lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-extraClr dark:bg-[#111] "
          >
            <div className="   md:px-0  grid  place-self-center">
              <div className="mb-0 lg:pr-8 xl:pr-6 lg:text-left p-6">
                <h2 className="mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center">
                  <strong>7 Battles Every Trader Must Fight to Win</strong>
                </h2>
                {/* small screen */}
                <div className="bg xx:grid place-content-center sm:hidden">
                  <div
                    style={{
                      boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                      background: `url("https://i.postimg.cc/kg0R6XyD/20240218_134317.jpg") no-repeat center center/cover`,
                    }}
                    className="img1  ss:w-[32rem]  sm:h-[40rem] xs:w-[24rem] xs:h-[32rem]  xx:w-[20rem] xx:h-[24rem]  my-8  sm:w-0 rounded-lg"
                  ></div>
                </div>
                {/* /// */}
                <div className="">
                  <p className="mb-6 font-medium xx:text-base  lg:text-lg text-secondary  dark:text-primary lg:text-left md:text-lg md:text-center">
                    <p className="mb-4">
                      A cryptocurrency expert, a coach to many, Mayowa Owolabi
                      certainly knows the struggles of traders. And when he
                      needed the videos from his coaching sessions transcribed
                      into this book, I was glad to make the dream a hardcover
                      reality.
                    </p>
                  </p>
                </div>

                {/* <div className="mb-10 grid place-content-start  md:mb-16 lg:mb-12">
                  <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]">
                        GET YOUR COPY
                      </button>
                    </div>
                  </Link>
                </div> */}
              </div>
            </div>
            {/* big screen */}
            <div className="bg sm:grid place-content-end mb-auto xx:hidden">
              <div
                style={{
                  boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                  background: `url("https://i.postimg.cc/kg0R6XyD/20240218_134317.jpg") no-repeat center center/cover`,
                }}
                className="img1  sm:w-[24rem] sm:h-[24rem]  lg:w-[32rem] lg:h-[32rem] rounded-lg"
              ></div>
            </div>
            {/* /// */}
          </div>
          {/*100 Money Mistakes People Make */}
          <div
            id="100-money-mistakes-people-make"
            className=" lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-primary dark:bg-secondary "
          >
            {/* big screen */}
            <div className="bg sm:grid place-content-start mb-auto xx:hidden">
              <div
                style={{
                  boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                  background: `url("https://i.postimg.cc/yN0gF4fj/20240304_104847.jpg") no-repeat center center/cover`,
                }}
                className="img1  sm:w-[24rem] sm:h-[32rem]  lg:w-[32rem] lg:h-[40rem] rounded-lg"
              ></div>
            </div>
            {/* /// */}
            <div className="   md:px-0  grid  place-self-center">
              <div className="mb-0 lg:pr-8 xl:pr-6 lg:text-left p-6">
                <h2 className="mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center">
                  <strong>100 Money Mistakes People Make </strong>
                </h2>
                {/* small screen */}
                <div className="bg xx:grid place-content-center sm:hidden">
                  <div
                    style={{
                      boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                      background: `url("https://i.postimg.cc/yN0gF4fj/20240304_104847.jpg") no-repeat center center/cover`,
                    }}
                    className="img1  ss:w-[32rem]  sm:h-[40rem] xs:w-[24rem] xs:h-[32rem]  xx:w-[20rem] xx:h-[24rem]  my-8  sm:w-0 rounded-lg"
                  ></div>
                </div>
                {/* /// */}
                <div className="">
                  <p className="mb-6 font-medium xx:text-base  lg:text-lg text-secondary  dark:text-primary lg:text-left md:text-lg md:text-center">
                    <p className="mb-4">
                      This project started as a series of coaching sessions.
                      Then Dr. Mayowa Owolabi decided to share bullet points of
                      a few money mistakes on social media. The demand grew so
                      large that he decided to compile the coaching sessions
                      into a book.
                    </p>
                    <p className="mb-4">
                      That's where I came in. I transcribed those video sessions
                      into this very book. Now, his teachings reach more people.
                    </p>

                    <p className="">
                      If you could “talk your book” and have someone transcribe
                      your words, would that quicken your journey to authoring
                      that book in your heart?
                    </p>
                  </p>
                </div>

                {/* <div className="mb-10 grid place-content-start  md:mb-16 lg:mb-12">
                  <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]">
                        GET YOUR COPY
                      </button>
                    </div>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        {/* Testimonial  */}
        <div style={{ cursor: "grab" }} id="testimonial">
          <section className="py-16 bg-extraClr dark:bg-black xx:px-0  md:px-12">
            <div className=" m-auto  text-secondary dark:text-gray-300 xx:px-2 md:px-12 xl:px-6">
              <div className="mb-20 space-y-4 px-0">
                <EditingSlider />
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

export default Editing;
