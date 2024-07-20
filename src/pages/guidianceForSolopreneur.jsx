/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";
import Email from "../components/email";

const GuidianceForSolopreneur = () => {
  return (
    <>
      <div id=" subs">
        {/* HERO */}
        <div className="relative grid gap-8 lg:py-24 xx:py-12 lg:px-12 xx:p-6 lg:pt-0 ss:grid-cols-2 lg:pb-0">
          <div className="flex flex-col items-start w-full ss:px-0 sm:px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-40 xx:my-auto lg:max-w-lg lg:pr-5">
              <div className="lg:max-w-xl  lg:mb-6 xx:my-auto">
                <h2 className="max-w-xl mb-6 font-sans lg:text-5xl font-bold tracking-tight text-accent ss:text-left xx:text-center ss:text-3xl sm:text-4xl sm:leading-none">
                  Guidance for Writing Solopreneurs
                </h2>
                <h5 className="sm:text-base ss:text-sm mt-8 text-secondary dark:text-primary md:text-lg  ss:text-left xx:text-center">
                  <h5 className="mb-4">Christian content writer?</h5> Now you
                  can have an editor to help you ensure your content is well
                  written, piercing, and life-giving.
                </h5>
                <div className=" grid ss:place-content-start xx:place-content-center">
                  <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                    <button className="w-[11rem] py-5 px-7   ss:mt-6 xx:mt-8 bg-white h-[4rem] my-3 rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:text-white before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-lightAccent before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#343434]">
                      CONTACT ME
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-xl  ss:px-0 sm:px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:max-w-full xl:px-0">
            <img
              className="object-cover w-[32rem]  rounded  lg:rounded-none lg:shadow-none sm:h-[24rem] lg:h-full"
              src="https://i.postimg.cc/FHzfL9r3/Blog-post-bro.png"
              alt=""
            />
          </div>
        </div>
        {/* solopreneur */}
        <section className="solopreneur">
          <div className=" lg:py-24 xx:py-12 grid lg:grid-cols-2 gap-4 ss:px-12 xx:px-6 lg:px-24 bg-extraClr ">
            <div className="   grid  place-self-center">
              <div className="mb-0 lg:pr-8 xl:pr-6 lg:text-left ">
                <div className=" grid place-content-center mx-auto">
                  <Link to={""}>
                    <button
                      style={{
                        boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.35)",
                      }}
                      className="relative tracking-wide mb-12 ss:ml-6 xx:px-6 ss:px-12 py-4 text-secondary text-xl font-bold  overflow-hidden bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0"
                    >
                      Guidance for Writing Solopreneurs
                    </button>
                  </Link>
                </div>
                <div className="">
                  <p className="mb-6 font-medium  ss:text-lg text-secondary text-left xx:text-base ">
                    Are you a follower of Jesus with something to say? Has the
                    Holy Spirit been prompting you? Are you holding back due to
                    uncertainty in your writing skills? Do you need an editor,
                    coach, or encourager? Brown Patience offers help from
                    writing to publishing with the Guidance for Writing
                    Solopreneurs package.
                  </p>
                  <h4 className="ss:text-2xl xx:text-xl">
                    Who is a Writing Solopreneur?
                  </h4>
                  <p className="my-6 font-medium  ss:text-lg text-secondary text-left xx:text-base ">
                    Writing solopreneurs wield influence with their pens,
                    impacting culture through faith-based writing, including
                    blogs, newsletters, articles, social media, and stories.
                    They have a burning message for the world and know how to
                    scatter their seeds to attract those in need.
                  </p>
                  <h4 className="ss:text-2xl xx:text-xl">
                    Who is this Guidance for?
                  </h4>
                  <p className="my-6 font-medium  ss:text-lg text-secondary text-left xx:text-base ">
                    Guidance for Writing Solopreneurs is for budding and
                    experienced writers needing expert help to refine their
                    work. It offers someone who understands compelling writing
                    to provide opinions, editing, and fine-tuning, ensuring your
                    story is clear, correct, and polished enough to be told.
                  </p>
                </div>

                <div className="  grid place-content-start  mt-12">
                  <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 w-[10rem] h-[3.5rem]">
                        SUBSCRIBE
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg grid lg:place-content-top xx:place-content-center">
              <div
                style={{
                  boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                  background: `url("https://i.postimg.cc/5ym0JHbQ/BROWN_PATIENCE2-1_1.jpg") no-repeat center center/cover`,
                }}
                className="img lg:ml-auto lg:w-[32rem] lg:h-[40rem] lg:my-0 xx:my-6 md:w-[40rem] md:h-[48rem] ss:w-[32rem] ss:h-[40rem] xs:w-[24rem] xs:h-[32rem] xx:w-[20rem] xx:h-[28rem] rounded-lg"
              ></div>
            </div>
          </div>
          {/* // */}
          <div className=" py-12 mx-auto md:max-w-full lg:max-w-screen-xl md:px-24 xx:px-6 ss:px-12 lg:py-20">
            <div className="grid gap-8 row-gap-5 sm:grid-cols-2">
              <div className="relative  bg-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative p-5 rounded-sm">
                  <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <h6 className="font-semibold mb-6 leading-5">
                      What does this Guidance entail?
                    </h6>
                  </div>
                  <p className="mb-2 text-sm text-secondary">
                    <ul className="ml-4 list-disc">
                      <li className=" mb-4 text-base">
                        <b> Editing:</b> Making it relatable and practical to
                        your readers.
                      </li>
                      <li className=" mb-4 text-base">
                        <b>Posting Guidance: </b> How do you package it? Social
                        media? A blog? Newsletters? Where's your audience? Do
                        they prefer long or short-form content?
                      </li>
                      <li className=" mb-4 text-base">
                        <b>Critical Feeback On Your Writing </b> So you'll know
                        what to do better and where you're already doing great.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="relative bg-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative p-5 rounded-sm">
                  <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <h6 className="font-semibold leading-5 mb-6">
                      What categories of content does the Guidance cover?
                    </h6>
                  </div>
                  <p className="mb-2 text-base text-secondary">
                    With this subscription, you get proofreading, editing, and
                    necessary revisions to:
                  </p>
                  <p className="mb-2  text-secondary">
                    <ul className="ml-4 list-disc">
                      <li className=" mb-4 text-base">Your blog posts</li>
                      <li className=" mb-4 text-base">Your articles</li>
                      <li className=" mb-4 text-base">Your newsletters</li>
                      <li className=" mb-4 text-base">
                        Your social media content
                      </li>
                      <li className=" mb-4 text-base">
                        Your fictional/non-fictional stories.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-8 my-12 row-gap-5 ss:grid-cols-2 lg:grid-cols-4">
              <div className="relative  bg-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative p-5 rounded-sm">
                  <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <h6 className="font-semibold mb-6 leading-5">
                      Am I still in control?
                    </h6>
                  </div>
                  <p className="mb-2 text-sm text-secondary">
                    <ul className="ml-4 list-disc">
                      <li className=" mb-4 text-base">
                        Yes. How much revision your write-up undergoes is up to
                        you. I make the suggestions; you reserve the right to
                        approve or reject them.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="relative bg-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative p-5 rounded-sm">
                  <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <h6 className="font-semibold leading-5 mb-6">
                      How do we communicate?
                    </h6>
                  </div>

                  <p className="mb-2  text-secondary">
                    <ul className="ml-4 list-disc">
                      <li className=" mb-4 text-base">
                        We communicate using collaborative technologies such as
                        Google docs and Dropbox. And if WhatsApp will be easier
                        for you, it works perfectly for me. Through these
                        technologies, you can track my suggestions and changes
                        and get to approve them.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="relative bg-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative p-5 rounded-sm">
                  <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <h6 className="font-semibold leading-5 mb-6">
                      How much is the subscription?
                    </h6>
                  </div>

                  <p className="mb-2  text-secondary">
                    <ul className="ml-4 list-disc">
                      <li className=" mb-4 text-base">
                        15,000 naira per month.
                      </li>
                      <li className=" mb-4 text-base">
                        12,000 naira per month when you pay a full year's
                        subscription at once.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="relative bg-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative p-5 rounded-sm">
                  <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <h6 className="font-semibold leading-5 mb-6">
                      How do we communicate?
                    </h6>
                  </div>

                  <p className="mb-2  text-secondary">
                    <ul className="ml-4 list-disc">
                      <li className=" mb-4 text-base">
                        We communicate using collaborative technologies such as
                        Google docs and Dropbox. And if WhatsApp will be easier
                        for you, it works perfectly for me. Through these
                        technologies, you can track my suggestions and changes
                        and get to approve them.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* // */}
          <div className=" bg-extraClr dark:bg-black py-12 mx-auto md:max-w-full lg:max-w-screen-xl md:px-24 xx:px-6 ss:px-12 lg:py-20">
            <div className="grid gap-8 my-12 row-gap-5 ss:grid-cols-2 lg:grid-cols-3">
              <div className="relative  bg-primary dark:bg-secondary text-secondary dark:text-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative p-5 rounded-sm">
                  <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <h6 className="font-semibold mb-6 leading-5">
                      Is there a limit to the number of write-ups I can send?
                    </h6>
                  </div>
                  <p className="mb-2 text-sm">
                    <ul className="ml-4 list-disc">
                      <li className=" mb-4 text-base">
                        You can send up to 20 write-ups in a month (blog posts,
                        newsletters, articles, social media content,
                        fictional/non-fictional stories). If you need to have me
                        edit more than 20 write-ups, you will be charged a
                        slight premium.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="relative bg-primary dark:bg-secondary text-secondary dark:text-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative p-5 rounded-sm">
                  <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <h6 className="font-semibold leading-5 mb-6">
                      Can I get a refund of my monthly subscription?
                    </h6>
                  </div>

                  <p className="mb-2 ">
                    <ul className="ml-4 list-disc">
                      <li className=" mb-4 text-base">No you can't</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="relative bg-primary dark:bg-secondary text-secondary dark:text-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative p-5 rounded-sm">
                  <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <h6 className="font-semibold leading-5 mb-6">
                      What if I want you to ghostwrite for me?
                    </h6>
                  </div>

                  <p className="mb-2 ">
                    <ul className="ml-4 list-disc">
                      <li className=" mb-4 text-base">
                        We'd need to discuss it outside this package. This
                        Guidance package doesn't cover ghostwriting. It only
                        covers the editing of the writing you've already done.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>

              {/* 3 */}
              <div className="relative  bg-primary dark:bg-secondary text-secondary dark:text-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative p-5 rounded-sm">
                  <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <h6 className="font-semibold leading-5 mb-6">
                      Can a friend use this service based on my subscription?
                    </h6>
                  </div>

                  <p className="mb-2 ">
                    <ul className="ml-4 list-disc">
                      <li className=" mb-4 text-base">
                        No. Once a month is gone, the subscription for that
                        month expires, and the unused slots also expire.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="relative bg-primary dark:bg-secondary text-secondary dark:text-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative p-5 rounded-sm">
                  <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <h6 className="font-semibold leading-5 mb-6">
                      This package is only for Christian writers?
                    </h6>
                  </div>

                  <p className="mb-2 ">
                    <ul className="ml-4 list-disc">
                      <li className=" mb-4 text-base">
                        Yes. This very one is a faith-based package.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="relative bg-primary dark:bg-secondary text-secondary dark:text-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative p-5 rounded-sm">
                  <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <h6 className="font-semibold leading-5 mb-6">
                      Can you post my write-ups for me after editing them?
                    </h6>
                  </div>

                  <p className="mb-2 ">
                    <ul className="ml-4 list-disc">
                      <li className=" mb-4 text-base">
                        No. This Guidance package doesn't include social media,
                        blog, website, or newsletter management. It focuses on
                        ensuring your write-up is clean, sharp, and ready to
                        run. You or someone else will handle the posting or
                        uploads.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-8 row-gap-5 sm:grid-cols-2">
              <div className="relative  bg-primary dark:bg-secondary text-secondary dark:text-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative p-5 rounded-sm">
                  <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <h6 className="font-semibold mb-6 leading-5">
                      Do I gain extra points for referring someone?
                    </h6>
                  </div>
                  <p className="mb-2 text-sm">
                    <ul className="ml-4 list-disc">
                      <li className=" mb-4 text-base">
                        Yes. You get 5 extra write-up slots (in a month) for
                        every person you refer.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="relative bg-primary dark:bg-secondary text-secondary dark:text-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative p-5 rounded-sm">
                  <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <h6 className="font-semibold leading-5 mb-6">
                      Is there a discount on the monthly subscription?
                    </h6>
                  </div>

                  <p className="mb-2 ">
                    <ul className="ml-4 list-disc">
                      <li className=" mb-4 text-base">
                        Yes. You get a 20% discount if you take out an annual
                        subscription at once. This is obtainable from July 1st,
                        2024, where instead of paying 15,000 naira a month for a
                        year's subscription, you pay 12,000 naira a month
                        instead.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Ask your questions */}
        <div className="">
          <Email />
        </div>
      </div>
    </>
  );
};

export default GuidianceForSolopreneur;
