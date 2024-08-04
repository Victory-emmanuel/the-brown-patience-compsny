import { useEffect, useState } from "react";
import { ColorMode, Footer, NavBar, Socials } from "./components/components";
import {
  Home,
  Blog,
  About,
  Book,
  Community,
  BlogContentPg,
  GuidianceForSolopreneur,
  CoachingForAuthors,
  Editing,
  ContentWriting,
  TestimonialPg,
  CoachingForWriters,
} from "./pages/pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("light");
  const element = document.documentElement;

  const options = [
    { icon: "sunny-outline", text: "light" },
    { icon: "moon-outline", text: "dark" },
  ];

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [element.classList, theme]);
  return (
    <BrowserRouter>
      <div className="app relative dark:bg-secondary  duration-100">
        <div
          id=""
          className="fixed lg:top-5 lg:right-10 xs:top-[45px] xs:right-[90px]  xx:top-[21px] xx:right-[60px]  z-20  duration-100  bg-transparent rounded"
        >
          {options?.map((opt) => (
            <button
              key={opt.text}
              onClick={() => setTheme(opt.text)}
              className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${
                theme === opt.text && "  text-accent"
              }`}
            >
              <ion-icon name={opt.icon}></ion-icon>
            </button>
          ))}
        </div>
        <ColorMode />
        <NavBar />
        <Socials />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/book" element={<Book />} />

          <Route
            path="/guidianceForSolopreneur"
            element={<GuidianceForSolopreneur />}
          />
          <Route path="/coachingForAuthors" element={<CoachingForAuthors />} />
          <Route path="/editing" element={<Editing />} />
          <Route path="/contentWriting" element={<ContentWriting />} />
          <Route path="/coachingForWriters" element={<CoachingForWriters />} />
          <Route path="/testimonialPg" element={<TestimonialPg />} />
          <Route path="/community" element={<Community />} />
          <Route path="/blogContentPg" element={<BlogContentPg />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
