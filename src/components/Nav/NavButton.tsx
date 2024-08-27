import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type NavButtonProps = { to: string; children: ReactNode };

const NavButton = ({ to, children }: NavButtonProps) => {
  return (
    <div className="from-primary p-1 to-darkPrimary bg-gradient-to-tr h-10 rounded-md">
      <NavLink
        className={({ isActive }) =>
          `size-full rounded-[4px] py-2 px-4 flex items-center ${isActive ? "bg-primary" : "bg-darkPrimary "}`
        }
        to={to}
      >
        {children}
      </NavLink>
    </div>
  );
};

export default NavButton;
