/* eslint-disable react/no-unescaped-entities */
// const BlogContentPg = () => {
//   const blogContentData = [
//     {
//       id: 1,
//       title: "Blog 1",
//       desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, facilis! Distinctio eum fugit praesentium obcaecati!",
//       coverImg: "https://i.postimg.cc/vmW76GpB/20231213-074326.jpg",
//       content:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt adquo magnam facere provident vitae cupiditate, eaque voluptates,expedita aliquid facilis quae eligendi quia earum in hic. Fugafacere ab cupiditate excepturi non magnam placeat officiis, ducimus,voluptate quam exercitationem esse assumenda accusantium dictalaudantium. Dolores sapiente assumenda quos vitae. Rem, vitae.Accusantium architecto maxime et excepturi nihil optio delenitiducimus tempore? Ipsum unde error omnis sapiente voluptatemexplicabo labore ut impedit officiis! Nemo quisquam laudantiumdolore error fugit minus cupiditate quas, alias vel deserunt undeimpedit aut quia tenetur voluptatibus architecto ipsa quod quibusdamamet facere repellat doloremque voluptas!",
//       authorName: "Brown Patience",
//       authorImg: "https://i.postimg.cc/t4wVD9bk/41044-1.jpg",
//       authorDesc: "Ghost Writer / Author",
//     },
//   ];
//   return (
//     <>
//       <div className="" id="blog-content">
//         <div className="w-full text-secondary bg-extraClr py-24">
//           <div className="max-w-[1240px] mx-auto">
//             {blogContentData.map((item) => (
//               <div
//                 key={item.id}
//                 className="grid lg:grid-cols-3 sm:grid-cols-1 ss-grid-cols-1   gap-8 px-4 text-secondary"
//               >
//                 <div
//                   key={item.id}
//                   className="bg-primary rounded-lg col-span-2 overflow-hidden drop-shadow-md "
//                 >
//                   <img
//                     className="h-[30rem] w-full object-cover"
//                     src={item.coverImg}
//                     alt=""
//                   />
//                   <div className="p-8">
//                     <h3 className="font-bold text-accent text-2xl my-1">
//                       {item.title}
//                     </h3>
//                     <h6 className="text-xl my-6">{item.desc}</h6>
//                     <p className="">{item.content}</p>
//                   </div>
//                 </div>

//                 <div className="w-full rounded-lg overflow-hidden sm-mx-auto bg-primary py-5 drop-shadow-md max-h-[17.625rem] ">
//                   <div className="">
//                     <img
//                       src={item.authorImg}
//                       alt="Author"
//                       className="p-2 w-32 h-32 rounded-full object-cover mx-auto"
//                     />
//                     <h1 className="text-center text-2xl font-bold mt-3">
//                       {item.authorName}
//                     </h1>
//                     <p className="text-center p-4 m-4 bg-accent rounded-lg text-primary text-lg font-medium mt-3">
//                       {item.authorDesc}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogContentPg;
import { Link } from "react-router-dom";
const BlogContentPg = () => {
  // const blogContentData = [
  //   {
  //     id: 1,
  //     title: "Blog 1",
  //     desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, facilis! Distinctio eum fugit praesentium obcaecati!",
  //     coverImg: "https://i.postimg.cc/vmW76GpB/20231213-074326.jpg",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt adquo magnam facere provident vitae cupiditate, eaque voluptates,expedita aliquid facilis quae eligendi quia earum in hic. Fugafacere ab cupiditate excepturi non magnam placeat officiis, ducimus,voluptate quam exercitationem esse assumenda accusantium dictalaudantium. Dolores sapiente assumenda quos vitae. Rem, vitae.Accusantium architecto maxime et excepturi nihil optio delenitiducimus tempore? Ipsum unde error omnis sapiente voluptatemexplicabo labore ut impedit officiis! Nemo quisquam laudantiumdolore error fugit minus cupiditate quas, alias vel deserunt undeimpedit aut quia tenetur voluptatibus architecto ipsa quod quibusdamamet facere repellat doloremque voluptas!",
  //     authorName: "Brown Patience",
  //     authorImg: "https://i.postimg.cc/t4wVD9bk/41044-1.jpg",
  //     authorDesc: "Ghost Writer / Author",
  //   },
  // ];
  return (
    <>
      <div className="" id="blog-content">
        <div className="w-full text-secondary bg-primary py-24">
          <div className="max-w-[1240px] mx-auto">
            <div className="grid lg:grid-cols-3 xx:grid-cols-1 xx:gap-y-4 ss:gap-y-8 lg:place-items-start ss:place-items-start xx:place-items-center lg:gap-8 xs:px-4 xx:px-2 text-secondary">
              <div className="bg-primary shadow-lg rounded-lg col-span-2 overflow-hidden drop-shadow-md ">
                <img
                  className="h-[30rem] w-full object-cover"
                  src="https://i.postimg.cc/ryd3Q9BD/Whats-App-Image-2024-07-12-at-08-26-21-1.jpg"
                  alt=""
                />
                <div className="ss:p-8 xx:px-4">
                  <h3 className="font-bold text-accent text-2xl my-1">
                    Coaching for Authors
                  </h3>

                  <div className="my-6">
                    <p className="mb-4">
                      Will you write that book this second half? If yes, you
                      should plan how you'll do it from today.
                    </p>
                    <ul className="mb-4 pl-4 list-disc">
                      <li className=""> At least a chapter a week.</li>
                      <li className="">
                        Getting yourself an accountability partner (I volunteer
                        to be your accountability partner).
                      </li>
                      <li className="">
                        Scheduling some weekends where you'll go away and do
                        nothing but write.
                      </li>
                      <li className="">
                        Taking a two-week vacation somewhere in this second half
                        to enable your write at length.
                      </li>
                      <li className="">
                        Contacting a ghostwriter or writing coach.
                      </li>
                    </ul>
                    {/* <h5 className="mb-2">What is Dark Matter?</h5> */}
                    <p className="mb-4">
                      When desire finally becomes reality, it is fulfilling. May
                      that fulfilment be yours this second half.
                    </p>
                    <p className="mb-4">
                      The <strong> "Coaching for Authors"</strong> package may
                      be the boost you need. It's where you write your book,
                      with me as your guide, chapter by chapter.
                    </p>
                    <ul className="mb-4 pl-4 list-disc">
                      <li className=""> We draw out a plan.</li>
                      <li className=""> You start writing.</li>
                      <li className="">
                        I go through it, make adjustments if necessary.
                      </li>
                      <li className=""> You send the next chapter.</li>
                      <li className=""> I go through it. . .</li>
                    </ul>
                    {/* <h5 className="mb-2">Why is Dark Matter Important?</h5> */}
                    <Link
                      to={"https://wa.me/p/7815273445160700/2348140170221"}
                      className="mb-4"
                    >
                      Learn more about it
                      <strong className="text-accent ml-1 underline">
                        here
                      </strong>
                    </Link>
                    <p className="my-4">With love, Brown Patience. </p>
                  </div>
                </div>
              </div>

              <div className="lg:w-full w-fit rounded-lg overflow-hidden sm-mx-auto bg-primary py-5 drop-shadow-md xs:max-h-[17.625rem] xx:max-h-[18.625rem] ">
                <div className="">
                  <img
                    src="https://i.postimg.cc/t4wVD9bk/41044-1.jpg"
                    alt="Author"
                    className="p-2 xs:w-32 xs:h-32 xx:w-24 xx:h-24 rounded-full object-cover mx-auto"
                  />
                  <h1 className="text-center xs:text-2xl xx:text-xl font-bold mt-3">
                    Brown Patience
                  </h1>
                  <p className="text-center  p-4 m-4 bg-accent rounded-lg text-primary xs:text-lg xx:text-base  font-medium mt-3">
                    Ghostwriter. Editor. Writing Coach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContentPg;
