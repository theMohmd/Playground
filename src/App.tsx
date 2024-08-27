import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Cnav from "./components/Cnav/Nav";
import StaffList from "./components/StaffList/StaffList";
import CircularCarouselContainer from "./components/CircularCarousel/CircularCarouselContainer";
import { useEffect, useRef } from "react";
import { MenuIcon } from "lucide-react";
import InfiniteScroll from "./components/InfiniteScroll/InfiniteScroll";
import AnimatedPathDemo from "./components/AnimatedPath/AnimatedPathDemo";
import Landing from "./components/Landing/Landing";
const App = () => {
  const toggleNav = (input: boolean) => {
    if (input) {
      navRef.current?.classList.remove("translate-x-[-300px]");
      blurRef.current?.classList.remove("translate-x-[-100%]");
    } else {
      navRef.current?.classList.add("translate-x-[-300px]");
      blurRef.current?.classList.add("translate-x-[-100%]");
    }
  };
  const navRef = useRef<HTMLDivElement | null>(null);
  const blurRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    addEventListener("resize", () => {
      if (window.innerWidth > 1024) toggleNav(false);
    });
  }, []);

  return (
    <div className="grid grid-rows-1 backgroundPattern h-dvh lg:grid-cols-[300px_1fr] overflow-hidden">
      <div
        ref={blurRef}
        onClick={() => toggleNav(false)}
        className="backdrop-blur-xl h-dvh w-screen absolute translate-x-[-100%] z-[199] "
      ></div>
      <div
        ref={navRef}
        className="grid absolute lg:static duration-200 lg:translate-x-0 h-dvh w-[300px] z-[200] translate-x-[-300px]"
      >
        <Nav hide={() => toggleNav(false)} />
      </div>

      <div className="flex flex-col gap-5 justify-center items-center p-5 lg:p-10">
        <div className="flex lg:hidden relative justify-center items-center p-4 w-full font-bold text-white rounded-2xl lg:w-3/4 border border-primary bg-darkPrimary">
          <button
            onClick={() => toggleNav(true)}
            className="fixed left-4 lg:hidden pl-5"
          >
            <MenuIcon />
          </button>
          <p>PlayGround</p>
        </div>

        <div className="flex justify-center items-center max-h-full size-full p-5 border border-primary bg-darkPrimary rounded-2xl [&>*]:rounded-xl">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="carousel/1" element={<CircularCarouselContainer />} />
            <Route path="stafflist" element={<StaffList />} />
            <Route path="nav" element={<Cnav />} />
            <Route path="scroll" element={<InfiniteScroll />} />
            <Route path="animatepath" element={<AnimatedPathDemo />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default App;
