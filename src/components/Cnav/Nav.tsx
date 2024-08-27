//import { NavLink, useLocation } from "react-router-dom";
import NavButton from "./NavButton";
import { useEffect, useRef, useState } from "react";
import NavDropdown from "./NavDropdown";

//Nav component
const Nav = () => {
  //pathname
  //const location = useLocation();
  //ref to indicator that moves under nav
  const indicatorRef = useRef<HTMLSpanElement | null>(null);
  //demo
  const [index, setindex] = useState(0);

  //move indicator
  // useEffect(() => {
  //   const path = location.pathname.split("/");
  //   if (!indicatorRef.current) return;
  //   if (path[1] === "1") indicatorRef.current.style.left = `${0 * (112 + 8)}px`;
  //   if (path[1] === "2") indicatorRef.current.style.left = `${1 * (112 + 8)}px`;
  //   if (path[1] === "3") indicatorRef.current.style.left = `${2 * (112 + 8)}px`;
  //   if (path[1] === "4") indicatorRef.current.style.left = `${3 * (112 + 8)}px`;
  //   if (path[1] === "5") indicatorRef.current.style.left = `${4 * (112 + 8)}px`;
  // }, [location]);

  useEffect(() => {
    if (!indicatorRef.current) return;
    if (index === 0) indicatorRef.current.style.left = `${0 * (112 + 8)}px`;
    if (index === 1) indicatorRef.current.style.left = `${1 * (112 + 8)}px`;
    if (index === 2) indicatorRef.current.style.left = `${2 * (112 + 8)}px`;
    if (index === 3) indicatorRef.current.style.left = `${3 * (112 + 8)}px`;
    if (index === 4) indicatorRef.current.style.left = `${4 * (112 + 8)}px`;
  }, [index]);
  return (
    <div className="flex bg-white flex-col justify-center items-center border-b border-b-violet-200">
      {/*Nav links********************************************************************************/}
      <div className="flex relative top-1 gap-2 px-2 [&>*]:w-28">
        <NavButton onClick={() => setindex(0)} to="1">
          Home
        </NavButton>
        <NavButton onClick={() => setindex(1)} to="2">
          Lorem
        </NavButton>
        <NavButton onClick={() => setindex(2)} to="3">
          Ipsum
        </NavButton>
        <NavButton onClick={() => setindex(3)} to="4">
          Dolor
        </NavButton>
        <NavDropdown title="Sit">
          {/* should be NavLink ********************************************************************************/}
          <a
            className="flex justify-center items-center p-2"
            onClick={() => setindex(4)}
          >
            Amet
          </a>
          <a
            className="flex justify-center items-center p-2"
            onClick={() => setindex(4)}
          >
            Consectetur
          </a>
          <a
            className="flex justify-center items-center p-2"
            onClick={() => setindex(4)}
          >
            Adipisicing
          </a>
        </NavDropdown>
      </div>

      {/*Sliding indicator*****************************************************************************
       *                      nav item count                                                          *
       *                      ^                                                                       */}
      <div className="w-[calc(5*(8px+112px)+8px)] h-1 relative z-10 ">
        <span
          ref={indicatorRef}
          className="absolute mx-2 w-28 h-full bg-violet-400 duration-200"
        />
      </div>
    </div>
  );
};

export default Nav;
