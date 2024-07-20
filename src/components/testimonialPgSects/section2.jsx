/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef } from "react";
// import swcData from "../../data/swcData";

const Section2 = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);
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

  // const handleSlideClick = (index) => {
  //   setCurrentSlide(index);
  // };

  return (
    <div style={{ cursor: "pointer" }} id="section2">
      <section id="mySlider" className="py-16 ss:px-12 xs:px-6 xx:px-2">
        <div className="relative">
          <div className="">
            <h2 className="text-center text-2xl mb-12 font-bold text-gray-800 dark:text-white md:text-4xl">
              Story Writing Coaching Testimonials
            </h2>
          </div>

          <div id="slider-container" ref={sliderRef}>
            {/* {swcData.map((items, index) => (
              <div
                key={items.id}
                className={`slide ${
                  index === currentSlide ? "active" : ""
                } relative bg-primary rounded dark:bg-black`}
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
                    <h6 className="text-secondary dark:text-primary">
                      {items.name}
                    </h6>
                    <p className="text-secondary dark:text-primary">
                      {items.title}
                    </p>
                  </div>
                </div>
                <p className="text-secondary dark:text-primary text-base xx:text-sm">
                  {items.content}
                </p>
              </div>
            ))} */}
            {/*Sarah-Sesi-Godonu */}
            <div
              id="Sarah-Sesi-Godonu"
              className={`relative bg-primary rounded shadow-md dark:bg-black`}
              // onClick={() => handleSlideClick()}
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
                <div className="mb-2">
                  <h6 className="text-secondary dark:text-primary">
                    Sarah-Sesi-Godonu
                  </h6>
                  <p className="text-secondary dark:text-primary">...</p>
                </div>
              </div>
              <div className="text-secondary dark:text-primary">
                <p className="mb-4">
                  "I never knew I would need to sharpen my writing skills. It
                  had never crossed my mind to take a writing class because I
                  thought it was for only aspiring writers. That fateful week,
                  Coach Brown reached out to me, because she felt led to send
                  the information to me when the scholarship application was
                  ongoing. I searched my heart, and I remembered that that same
                  week I was to help my sister reply to her client. I noticed
                  her choice of words and searched my heart again. Then I found
                  out that I really needed to sharpen my writing and
                  communication skills.
                </p>
                <p className="mb-4">
                  The Course began February 12, 2024. My expectations were to
                  learn the Art, Style and Discipline of writings that can pass
                  an accurate and captivating information to my clients and
                  mentees. And also to be able to communicate better with
                  people, learning how to use the right expressions from my mind
                  and thoughts. And also stun my world with beautiful write-ups.
                  After the course: March 9, 2024. When she started this class
                  with us, she began to introduce us to the elements of writing
                  a story.
                </p>
                <p className="mb-4">
                  {" "}
                  From our Audience, to Attention, to Focus, to Emotions,
                  Illustrations, Relatability, Finding a story, SMS method, CTA.
                  Then she gave us submissions alongside to help us practice. At
                  a point when I saw the submissions, I would faint and wake up
                  again encouraging myself that I needed this skill. 😂 I am
                  into the Fashion Business. And I discovered that this class
                  was helping me also in paying attention to intrinsic details
                  of my clients’ preferences. So, as the classes went on, I
                  found out that it was helping me also to pay close attention
                  to sketches and shapes.
                </p>
                <p className="mb-4">
                  I know this has nothing to do with write-ups, but it did
                  something to my sight. Along the line, I discovered that I
                  used to have one passion that had been discarded for a long
                  time — to write books and share my life experiences with
                  stories. As we went deeper in the classes, the passion came
                  back. Especially the day we were taught about 'Emotions'.
                  There's one particular line I hold dearly from this class:
                  Inside you is the most authentic story no one else can write.
                  So I have decided not to hold all of these stories back to
                  myself. No one is ever going to hear them until I write them
                  out.
                </p>
                <p className="mb-4">
                  {" "}
                  When we started our LIRI journey, I realized how bad my
                  sentence construction was. Thank God! I first wrote the
                  chapter by pen in my book, then I typed it again. I knew it
                  was a tedious work for me, but I had to do it that way.
                  Because I know it will improve my writing. And it actually
                  did! Doing my resubmissions, my eyes were following all the
                  wrong things I had been doing in my write-ups, especially my
                  punctuation marks. It was so bad. But now it has changed.
                </p>
                <p className="mb-4">
                  Talking about being able to make write-ups that can stun my
                  world, the cheat code I have been using for any write-up task
                  is just to pay attention to the events around me. Writing it
                  the way it played out! No emotions held back. I've found out
                  that every day is a story! Thank you, Coach Brown Patience,
                  for introducing me into this class. Thank you for pouring your
                  all to see that we all attained the goals for which we signed
                  up for this class. And not to discard this, thank you for
                  being patient with us all.“Come and take all my flowers in the
                  garden” like you normally say.",
                </p>
              </div>
            </div>
            {/*Bukola-Adewuyi.*/}
            <div
              id="Bukola-Adewuyi."
              className={`relative bg-primary rounded shadow-md dark:bg-black`}
              // onClick={() => handleSlideClick()}
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
                <div className="mb-2">
                  <h6 className="text-secondary dark:text-primary">
                    Bukola Adewuyi.
                  </h6>
                  <p className="text-secondary dark:text-primary">...</p>
                </div>
              </div>
              <div className="text-secondary dark:text-primary">
                <p className="mb-4">
                  "The course began Feb 12, 2024. My expectation was that the
                  class will take me a step further in fulfilling God's plan for
                  my life by making me a great story teller. After the course:
                  19th April, 2024. I make bold to see that my expectations have
                  been met and surpassed.
                </p>
                <p className="mb-4">
                  I say this because not only have I learnt to be a great
                  storyteller, I've also been taught to *believe* in me and my
                  message. Before I took the class, I was struggling with
                  putting out the things I was writing. I just didn't see the
                  need to share them with anyone. But now I know better. I've
                  learnt that the world needs to hear the message I have to
                  share. I've learnt to share my message, with courage.",
                </p>
              </div>
            </div>
            {/*    Olamilekan Adenus*/}
            <div
              id="Olamilekan-Adenus"
              className={`relative bg-primary rounded shadow-md dark:bg-black`}
              // onClick={() => handleSlideClick()}
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
                <div className="mb-2">
                  <h6 className="text-secondary dark:text-primary">
                    Olamilekan Adenus
                  </h6>
                  <p className="text-secondary dark:text-primary">...</p>
                </div>
              </div>
              <div className="text-secondary dark:text-primary">
                <p className="mb-4">
                  "The Course began February 12, 2024. And I was expecting to
                  learn how to effectively pen down all that my mind saw,
                  pondered, and reflected upon. I had no idea what you would be
                  teaching us when I started this course—except that I should
                  know how to write compelling stories in the end. It's April
                  15.
                </p>
                <p className="mb-4">
                  And I've learnt so much that I now feel confident when
                  writing—although the impersonating Lekan occasionally
                  resurfaces. But I feel different. I feel like a writer. I'm
                  beginning to think more like a writer. And henceforth, I won't
                  just write. But I'll pay attention to what I write: my
                  emotions; my choice of illustrations; my punctuations; my
                  paragraphs.
                </p>
                <p className="mb-4">
                  I'll also be more observant. And with more deliberate
                  practice, and with time, I'll hone this art. I'll be better at
                  it. Like you, I'd also inspire others. I'd be very good at
                  this thing.So, yes! This course has served me well. Even
                  beyond my expectations. And I have you to thank for that.",
                </p>
              </div>
            </div>
            {/*Bukola-Adewuyi.*/}
            <div
              id="Bukola-Adewuyi."
              className={`relative bg-primary rounded shadow-md dark:bg-black`}
              // onClick={() => handleSlideClick()}
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
                <div className="mb-2">
                  <h6 className="text-secondary dark:text-primary">
                    Bukola Adewuyi.
                  </h6>
                  <p className="text-secondary dark:text-primary">...</p>
                </div>
              </div>
              <div className="text-secondary dark:text-primary">
                <p className="mb-4">
                  "The course began Feb 12, 2024. My expectation was that the
                  class will take me a step further in fulfilling God's plan for
                  my life by making me a great story teller. After the course:
                  19th April, 2024. I make bold to see that my expectations have
                  been met and surpassed.
                </p>
                <p className="mb-4">
                  I say this because not only have I learnt to be a great
                  storyteller, I've also been taught to *believe* in me and my
                  message. Before I took the class, I was struggling with
                  putting out the things I was writing. I just didn't see the
                  need to share them with anyone. But now I know better. I've
                  learnt that the world needs to hear the message I have to
                  share. I've learnt to share my message, with courage.",
                </p>
              </div>
            </div>
            {/*Bukola-Adewuyi.*/}
            <div
              id="Bukola-Adewuyi."
              className={`relative bg-primary rounded shadow-md dark:bg-black`}
              // onClick={() => handleSlideClick()}
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
                <div className="mb-2">
                  <h6 className="text-secondary dark:text-primary">
                    Bukola Adewuyi.
                  </h6>
                  <p className="text-secondary dark:text-primary">...</p>
                </div>
              </div>
              <div className="text-secondary dark:text-primary">
                <p className="mb-4">
                  "The course began Feb 12, 2024. My expectation was that the
                  class will take me a step further in fulfilling God's plan for
                  my life by making me a great story teller. After the course:
                  19th April, 2024. I make bold to see that my expectations have
                  been met and surpassed.
                </p>
                <p className="mb-4">
                  I say this because not only have I learnt to be a great
                  storyteller, I've also been taught to *believe* in me and my
                  message. Before I took the class, I was struggling with
                  putting out the things I was writing. I just didn't see the
                  need to share them with anyone. But now I know better. I've
                  learnt that the world needs to hear the message I have to
                  share. I've learnt to share my message, with courage.",
                </p>
              </div>
            </div>
            {/*Bukola-Adewuyi.*/}
            <div
              id="Bukola-Adewuyi."
              className={`relative bg-primary rounded shadow-md dark:bg-black`}
              // onClick={() => handleSlideClick()}
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
                <div className="mb-2">
                  <h6 className="text-secondary dark:text-primary">
                    Bukola Adewuyi.
                  </h6>
                  <p className="text-secondary dark:text-primary">...</p>
                </div>
              </div>
              <div className="text-secondary dark:text-primary">
                <p className="mb-4">
                  "The course began Feb 12, 2024. My expectation was that the
                  class will take me a step further in fulfilling God's plan for
                  my life by making me a great story teller. After the course:
                  19th April, 2024. I make bold to see that my expectations have
                  been met and surpassed.
                </p>
                <p className="mb-4">
                  I say this because not only have I learnt to be a great
                  storyteller, I've also been taught to *believe* in me and my
                  message. Before I took the class, I was struggling with
                  putting out the things I was writing. I just didn't see the
                  need to share them with anyone. But now I know better. I've
                  learnt that the world needs to hear the message I have to
                  share. I've learnt to share my message, with courage.",
                </p>
              </div>
            </div>
            {/*Bukola-Adewuyi.*/}
            <div
              id="Bukola-Adewuyi."
              className={`relative bg-primary rounded shadow-md dark:bg-black`}
              // onClick={() => handleSlideClick()}
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
                <div className="mb-2">
                  <h6 className="text-secondary dark:text-primary">
                    Bukola Adewuyi.
                  </h6>
                  <p className="text-secondary dark:text-primary">...</p>
                </div>
              </div>
              <div className="text-secondary dark:text-primary">
                <p className="mb-4">
                  "The course began Feb 12, 2024. My expectation was that the
                  class will take me a step further in fulfilling God's plan for
                  my life by making me a great story teller. After the course:
                  19th April, 2024. I make bold to see that my expectations have
                  been met and surpassed.
                </p>
                <p className="mb-4">
                  I say this because not only have I learnt to be a great
                  storyteller, I've also been taught to *believe* in me and my
                  message. Before I took the class, I was struggling with
                  putting out the things I was writing. I just didn't see the
                  need to share them with anyone. But now I know better. I've
                  learnt that the world needs to hear the message I have to
                  share. I've learnt to share my message, with courage.",
                </p>
              </div>
            </div>
            {/*Bukola-Adewuyi.*/}
            <div
              id="Bukola-Adewuyi."
              className={`relative bg-primary rounded shadow-md dark:bg-black`}
              // onClick={() => handleSlideClick()}
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
                <div className="mb-2">
                  <h6 className="text-secondary dark:text-primary">
                    Bukola Adewuyi.
                  </h6>
                  <p className="text-secondary dark:text-primary">...</p>
                </div>
              </div>
              <div className="text-secondary dark:text-primary">
                <p className="mb-4">
                  "The course began Feb 12, 2024. My expectation was that the
                  class will take me a step further in fulfilling God's plan for
                  my life by making me a great story teller. After the course:
                  19th April, 2024. I make bold to see that my expectations have
                  been met and surpassed.
                </p>
                <p className="mb-4">
                  I say this because not only have I learnt to be a great
                  storyteller, I've also been taught to *believe* in me and my
                  message. Before I took the class, I was struggling with
                  putting out the things I was writing. I just didn't see the
                  need to share them with anyone. But now I know better. I've
                  learnt that the world needs to hear the message I have to
                  share. I've learnt to share my message, with courage.",
                </p>
              </div>
            </div>
            {/*Bukola-Adewuyi.*/}
            <div
              id="Bukola-Adewuyi."
              className={`relative bg-primary rounded shadow-md dark:bg-black`}
              // onClick={() => handleSlideClick()}
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
                <div className="mb-2">
                  <h6 className="text-secondary dark:text-primary">
                    Bukola Adewuyi.
                  </h6>
                  <p className="text-secondary dark:text-primary">...</p>
                </div>
              </div>
              <div className="text-secondary dark:text-primary">
                <p className="mb-4">
                  "The course began Feb 12, 2024. My expectation was that the
                  class will take me a step further in fulfilling God's plan for
                  my life by making me a great story teller. After the course:
                  19th April, 2024. I make bold to see that my expectations have
                  been met and surpassed.
                </p>
                <p className="mb-4">
                  I say this because not only have I learnt to be a great
                  storyteller, I've also been taught to *believe* in me and my
                  message. Before I took the class, I was struggling with
                  putting out the things I was writing. I just didn't see the
                  need to share them with anyone. But now I know better. I've
                  learnt that the world needs to hear the message I have to
                  share. I've learnt to share my message, with courage.",
                </p>
              </div>
            </div>
            {/*Bukola-Adewuyi.*/}
            <div
              id="Bukola-Adewuyi."
              className={`relative bg-primary rounded shadow-md dark:bg-black`}
              // onClick={() => handleSlideClick()}
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
                <div className="mb-2">
                  <h6 className="text-secondary dark:text-primary">
                    Bukola Adewuyi.
                  </h6>
                  <p className="text-secondary dark:text-primary">...</p>
                </div>
              </div>
              <div className="text-secondary dark:text-primary">
                <p className="mb-4">
                  "The course began Feb 12, 2024. My expectation was that the
                  class will take me a step further in fulfilling God's plan for
                  my life by making me a great story teller. After the course:
                  19th April, 2024. I make bold to see that my expectations have
                  been met and surpassed.
                </p>
                <p className="mb-4">
                  I say this because not only have I learnt to be a great
                  storyteller, I've also been taught to *believe* in me and my
                  message. Before I took the class, I was struggling with
                  putting out the things I was writing. I just didn't see the
                  need to share them with anyone. But now I know better. I've
                  learnt that the world needs to hear the message I have to
                  share. I've learnt to share my message, with courage.",
                </p>
              </div>
            </div>
            {/*Bukola-Adewuyi.*/}
            <div
              id="Bukola-Adewuyi."
              className={`relative bg-primary rounded shadow-md dark:bg-black`}
              // onClick={() => handleSlideClick()}
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
                <div className="mb-2">
                  <h6 className="text-secondary dark:text-primary">
                    Bukola Adewuyi.
                  </h6>
                  <p className="text-secondary dark:text-primary">...</p>
                </div>
              </div>
              <div className="text-secondary dark:text-primary">
                <p className="mb-4">
                  "The course began Feb 12, 2024. My expectation was that the
                  class will take me a step further in fulfilling God's plan for
                  my life by making me a great story teller. After the course:
                  19th April, 2024. I make bold to see that my expectations have
                  been met and surpassed.
                </p>
                <p className="mb-4">
                  I say this because not only have I learnt to be a great
                  storyteller, I've also been taught to *believe* in me and my
                  message. Before I took the class, I was struggling with
                  putting out the things I was writing. I just didn't see the
                  need to share them with anyone. But now I know better. I've
                  learnt that the world needs to hear the message I have to
                  share. I've learnt to share my message, with courage.",
                </p>
              </div>
            </div>
            {/*Bukola-Adewuyi.*/}
            <div
              id="Bukola-Adewuyi."
              className={`relative bg-primary rounded shadow-md dark:bg-black`}
              // onClick={() => handleSlideClick()}
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
                <div className="mb-2">
                  <h6 className="text-secondary dark:text-primary">
                    Bukola Adewuyi.
                  </h6>
                  <p className="text-secondary dark:text-primary">...</p>
                </div>
              </div>
              <div className="text-secondary dark:text-primary">
                <p className="mb-4">
                  "The course began Feb 12, 2024. My expectation was that the
                  class will take me a step further in fulfilling God's plan for
                  my life by making me a great story teller. After the course:
                  19th April, 2024. I make bold to see that my expectations have
                  been met and surpassed.
                </p>
                <p className="mb-4">
                  I say this because not only have I learnt to be a great
                  storyteller, I've also been taught to *believe* in me and my
                  message. Before I took the class, I was struggling with
                  putting out the things I was writing. I just didn't see the
                  need to share them with anyone. But now I know better. I've
                  learnt that the world needs to hear the message I have to
                  share. I've learnt to share my message, with courage.",
                </p>
              </div>
            </div>
            {/*Bukola-Adewuyi.*/}
            <div
              id="Bukola-Adewuyi."
              className={`relative bg-primary rounded shadow-md dark:bg-black`}
              // onClick={() => handleSlideClick()}
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
                <div className="mb-2">
                  <h6 className="text-secondary dark:text-primary">
                    Bukola Adewuyi.
                  </h6>
                  <p className="text-secondary dark:text-primary">...</p>
                </div>
              </div>
              <div className="text-secondary dark:text-primary">
                <p className="mb-4">
                  "The course began Feb 12, 2024. My expectation was that the
                  class will take me a step further in fulfilling God's plan for
                  my life by making me a great story teller. After the course:
                  19th April, 2024. I make bold to see that my expectations have
                  been met and surpassed.
                </p>
                <p className="mb-4">
                  I say this because not only have I learnt to be a great
                  storyteller, I've also been taught to *believe* in me and my
                  message. Before I took the class, I was struggling with
                  putting out the things I was writing. I just didn't see the
                  need to share them with anyone. But now I know better. I've
                  learnt that the world needs to hear the message I have to
                  share. I've learnt to share my message, with courage.",
                </p>
              </div>
            </div>
            {/*Bukola-Adewuyi.*/}
            <div
              id="Bukola-Adewuyi."
              className={`relative bg-primary rounded shadow-md dark:bg-black`}
              // onClick={() => handleSlideClick()}
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
                <div className="mb-2">
                  <h6 className="text-secondary dark:text-primary">
                    Bukola Adewuyi.
                  </h6>
                  <p className="text-secondary dark:text-primary">...</p>
                </div>
              </div>
              <div className="text-secondary dark:text-primary">
                <p className="mb-4">
                  "The course began Feb 12, 2024. My expectation was that the
                  class will take me a step further in fulfilling God's plan for
                  my life by making me a great story teller. After the course:
                  19th April, 2024. I make bold to see that my expectations have
                  been met and surpassed.
                </p>
                <p className="mb-4">
                  I say this because not only have I learnt to be a great
                  storyteller, I've also been taught to *believe* in me and my
                  message. Before I took the class, I was struggling with
                  putting out the things I was writing. I just didn't see the
                  need to share them with anyone. But now I know better. I've
                  learnt that the world needs to hear the message I have to
                  share. I've learnt to share my message, with courage.",
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
