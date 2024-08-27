import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

//NavButton component
type NavButtonProps = {
  to: string;
  children: ReactNode;
  onClick: () => void; //demo
};
const NavButton = ({ to, children, onClick }: NavButtonProps) => {
  return (
    <button
      className="flex justify-center duration-200 items-center py-2 hover:text-violet-800 border-b-4 hover:border-b-violet-300 border-b-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
  return (
    <NavLink
      className="flex justify-center duration-200 items-center py-2 hover:text-violet-800 border-b-4 hover:border-b-violet-300 border-b-white"
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default NavButton;
