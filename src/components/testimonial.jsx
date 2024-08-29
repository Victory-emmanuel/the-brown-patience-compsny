/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Slider from "react-slick";
// import gTD from "../data/generalTstmData";

import { HashLink } from "react-router-hash-link";

const Testimonial = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "absolute",
          borderRadius: "100%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "absolute" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div style={{ cursor: "grab" }} id="testimonial">
        <section className="py-16 bg-extraClr dark:bg-secondary xx:px-0 md:px-12">
          <div className=" m-auto  text-secondary dark:text-gray-300 xx:px-6 md:px-12 xl:px-6">
            <div className="mb-20 space-y-4 ss:px-6 md:px-0">
              <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                Writing Can Save Lives
              </h2>
              <p className=" text-gray-800 dark:text-white text-center">
                If you’re wondering why you should go ahead and write, here’s
                your writing fire! Books can save lives. These are real people
                testifying of real impact.
              </p>
            </div>

            <div className=" relative slider-container">
              <Slider {...settings}>
                {/* {gTD.map((items) => (
                  <div
                    key={items.id}
                    className="aspect-auto ss:p-8 xx:p-2 border h-full  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl"
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
                      <div>
                        <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                          {items.name}
                        </h6>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {items.title}
                        </p>
                      </div>
                    </div>
                    <p className="mt-8 bg-white  dark:bg-secondary ss:p-8 xx:p-4 rounded-lg content  ">
                      <p className=" ss:line-clamp-4 xx:line-clamp-5">
                        {items.content}...
                      </p>
                      <Link to="/testimonialPg">
                        <span className="text-accent">See More...</span>
                      </Link>
                    </p>
                  </div>
                ))} */}
                {/* //// */}
                {/* Oluwakemi-O. */}
                <div
                  id="Oluwakemi-O."
                  className="aspect-auto ss:p-8 xx:p-2 border h-full  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl"
                >
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/t4wVD9bk/41044-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Oluwakemi O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ...
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 bg-white  dark:bg-secondary ss:p-8 xx:p-4 rounded-lg content  ">
                    <p className=" ss:line-clamp-4 xx:line-clamp-4">
                      "“I read ‘Love, the Way to Victory’ by Kenneth E. Hagin
                      and it taught me what love really means. I learnt that
                      Love is a person and I can become that person. It changed
                      my perspective on how I see people. It taught me that
                      there’s a better way to dispense love to people—including
                      people who have hurt me.”",
                    </p>
                    <HashLink to="/testimonialPg#Oluwakemi-O.">
                      <span className="text-accent">See More...</span>
                    </HashLink>
                  </div>
                </div>
                {/* Brown P. */}
                <div
                  id="Brown-P."
                  className="aspect-auto ss:p-8 xx:p-2 border h-full  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl"
                >
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/tgMtZ79N/2151100151-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Brown P.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ...
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 bg-white  dark:bg-secondary ss:p-8 xx:p-4 rounded-lg content  ">
                    <p className=" ss:line-clamp-4 xx:line-clamp-5">
                      “It took reading ‘Created to be His Helpmeet’ by Debi
                      Pearl for me to see and understand God’s instruction on
                      the role of wives in marriage. It’s a big book; it sent me
                      to the Bible. And through that book, God prepared me for
                      the next phase of my life—which I didn’t even know was
                      around the corner!”
                    </p>
                    <HashLink to="/testimonialPg#Brown-P.">
                      <span className="text-accent">See More...</span>
                    </HashLink>
                  </div>
                </div>
                {/*Omodolapo L. */}
                <div
                  id="Omodolapo-L."
                  className="aspect-auto ss:p-8 xx:p-2 border h-full  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl"
                >
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/t4wVD9bk/41044-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Omodolapo L.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ...
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 bg-white  dark:bg-secondary ss:p-8 xx:p-4 rounded-lg content  ">
                    <p className=" ss:line-clamp-4 xx:line-clamp-5">
                      "“In reading ‘Atomic Habits’ by James Clear, I was able to
                      learn about bad behaviors and principle steps to adopting
                      good ones. I got to understand why small habits can make a
                      big difference. I got to learn the importance of habit
                      tracking and how to build healthy habits. I also learnt
                      the importance of accountability. This particular one was
                      an amazing reminder for me.”",
                    </p>
                    <HashLink to="/testimonialPg#Omodolapo-L.">
                      <span className="text-accent">See More...</span>
                    </HashLink>
                  </div>
                </div>
                {/*Clementina O. */}
                <div
                  id="Clementina-O."
                  className="aspect-auto ss:p-8 xx:p-2 border h-full  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl"
                >
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/Pxvbmhxs/2150797626-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Clementina O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ...
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 bg-white  dark:bg-secondary ss:p-8 xx:p-4 rounded-lg content  ">
                    <p className=" ss:line-clamp-4 xx:line-clamp-5">
                      "“If you have an assignment that has to do with destiny,
                      just ensure the people who work closest with you are those
                      who know, understand, and are familiar with your Source,
                      the well you drink from and the Originator of the idea.
                      I'd never even thought I’d work with Brown Patience and
                      what I can say is phew! She understands. I don’t even have
                      to explain too much.” “Reading ‘Chimamanda’ by Brown
                      Patience, I have seen that I might have developed walls
                      around my heart, and how the Lord tenderly brings down
                      those bricks one after the other. Without these walls
                      being brought down, I definitely cannot enjoy the many
                      blessings around me. I have seen that closing my heart to
                      pain means closing my heart to healing and beauty.”"
                    </p>
                    <HashLink to="/testimonialPg#Clementina-O.">
                      <span className="text-accent">See More...</span>
                    </HashLink>
                  </div>
                </div>
                {/*Ireoluwa O. */}
                <div
                  id="Ireoluwa-O."
                  className="aspect-auto ss:p-8 xx:p-2 border h-full  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl"
                >
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/c1V9kkyB/2151100221-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Ireoluwa O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ...
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 bg-white  dark:bg-secondary ss:p-8 xx:p-4 rounded-lg content  ">
                    <p className=" ss:line-clamp-4 xx:line-clamp-5">
                      "“One of the books I really love is Francine Rivers’ ‘The
                      Scarlet Thread’. It’s a combination of two stories that
                      are somehow linked but I only read one. I learned how to
                      let go. Ah! I’m still learning it, but that’s where l
                      started the learning process from. The woman had to let
                      her cheating husband go for God to fix her and fix their
                      marriage. She really grew, as she went through God’s
                      dealings with her. I think about her sometimes when it’s
                      difficult for me to let something go. If Sierra (that’s
                      her name) can do it, I can.
                    </p>
                    <HashLink to="/testimonialPg#Ireoluwa-O.">
                      <span className="text-accent">See More...</span>
                    </HashLink>
                  </div>
                </div>
                {/*Tobiloba O. */}
                <div
                  id="Tobiloba-O."
                  className="aspect-auto ss:p-8 xx:p-2 border h-full  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl"
                >
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/h47Mm8zz/2150709932-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Tobiloba O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ...
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 bg-white  dark:bg-secondary ss:p-8 xx:p-4 rounded-lg content  ">
                    <p className=" ss:line-clamp-4 xx:line-clamp-5">
                      "“I once hit rock bottom emotionally. It seemed like
                      nothing was working and even the days rolled by
                      hopelessly. On one of the hopeless days, I was led by
                      God’s Spirit to read a particular chapter of a book l had
                      inherited from my sister. That particular chapter
                      addressed my situation at the time and literally spoke to
                      my soul, reassuring me that there are lots of feats to
                      attain whether situations around seem like it or not. In
                      tears, I kept reading till my whole being accepted the
                      message of the book. That book was ‘Break Out’ by Joel
                      Osteen.”"
                    </p>
                    <HashLink to="/testimonialPg#Tobiloba-O.">
                      <span className="text-accent">See More...</span>
                    </HashLink>
                  </div>
                </div>
                {/*Brown P.2*/}
                <div
                  id="Brown-P.2"
                  className="aspect-auto ss:p-8 xx:p-2 border h-full  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl"
                >
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/tgMtZ79N/2151100151-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Brown P.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ...
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 bg-white  dark:bg-secondary ss:p-8 xx:p-4 rounded-lg content  ">
                    <p className=" ss:line-clamp-4 xx:line-clamp-5">
                      "“I read Francine River’s ‘Atonement Child’ for the second
                      time and the emotions l’d been feeling just around that
                      time came into perspective. Yeah, I was confused quite
                      alright; confused because I was letting my emotions take
                      the lead. I knew what God had told me to do but it didn’t
                      add up. Instead of walking in faith, I succumbed to
                      despair. It morphed into other things and sank me into a
                      pit so deep l believed I wouldn’t even be able to describe
                      it. Reading that book helped me make sense of the chaos.
                      It also encouraged me to turn back to and stand firm in
                      faith. As Joe said in one chapter, God knows what’s best
                      for me. It’s alright to trust, and follow.”
                    </p>
                    <HashLink to="/testimonialPg#Brown-P.2">
                      <span className="text-accent">See More...</span>
                    </HashLink>
                  </div>
                </div>
                {/*David I. */}
                <div
                  id="David-I."
                  className="aspect-auto ss:p-8 xx:p-2 border h-full  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl"
                >
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/h47Mm8zz/2150709932-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        David I.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ...
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 bg-white  dark:bg-secondary ss:p-8 xx:p-4 rounded-lg content  ">
                    <p className=" ss:line-clamp-4 xx:line-clamp-5">
                      "“Atomic Habits’ by James Clears would be top of the list
                      of the books that have heavily impacted me. Made me become
                      more intentional about how I spend my time and the new
                      habits I’m tryna build.”"
                    </p>
                    <HashLink to="/testimonialPg#David-I.">
                      <span className="text-accent">See More...</span>
                    </HashLink>
                  </div>
                </div>
                {/*Omodolapo L.2 */}
                <div
                  id="Omodolapo-L.2"
                  className="aspect-auto ss:p-8 xx:p-2 border h-full  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl"
                >
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/t4wVD9bk/41044-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Omodolapo L.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ...
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 bg-white  dark:bg-secondary ss:p-8 xx:p-4 rounded-lg content  ">
                    <p className=" ss:line-clamp-4 xx:line-clamp-5">
                      "“Reading John C. Maxwell’s ‘The Power of Your
                      Leadership’, I got to understand how to combine personal
                      passion and leadership without one affecting the other. I
                      got to understand the 5 levels of leadership which are
                      Position, Permission, Production, People Development, and
                      Pinnacle. I learnt how they can be applied in our daily
                      lives.”"
                    </p>
                    <HashLink to="/testimonialPg#Omodolapo-L.2">
                      <span className="text-accent">See More...</span>
                    </HashLink>
                  </div>
                </div>
                {/*Ireoluwa O.2*/}
                <div
                  id="Ireoluwa-O.2"
                  className="aspect-auto ss:p-8 xx:p-2 border h-full  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl"
                >
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/c1V9kkyB/2151100221-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Ireoluwa O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ...
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 bg-white  dark:bg-secondary ss:p-8 xx:p-4 rounded-lg content  ">
                    <p className=" ss:line-clamp-4 xx:line-clamp-5">
                      "“Your patience and consistency in making sure my book was
                      properly and thoroughly put together was very encouraging
                      and highly inspiring. Thank you.”“Several books have
                      impacted me. When I read a book—any book—I relate with at
                      least one of the characters, or more than one. I put
                      myself in their shoes and personalize their experiences.
                      It’s what makes reading very real to me I think a lot of
                      my favorite books are written by Francine Rivers. One of
                      her books is titled ‘The Masterpiece’. I learned quite a
                      lot from it. Grace, one of the main characters, had a
                      tough life. I could relate to that. But it didn’t shake
                      her faith in God, not at all. I also learned assertiveness
                      from her. Before reading the book, I would see something I
                      didn’t like and I still wouldn’t say anything. But I
                      learned to stand against things that don’t align to my
                      values.”"
                    </p>
                    <HashLink to="/testimonialPg#Ireoluwa-O.2">
                      <span className="text-accent">See More...</span>
                    </HashLink>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonial;
