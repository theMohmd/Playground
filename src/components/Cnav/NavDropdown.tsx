import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";

//NavDropdown component
type NavDropdownProps = { children: ReactNode; title: string };
const NavDropdown = ({ children, title }: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="flex relative z-20 justify-center items-center"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <span className="pb-1">{title}</span>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute bg-white divide-y overflow-hidden flex flex-col justify-start top-full w-full rounded-b-md px-2 border-violet-300 duration-200 ${
              isOpen ? "border" : null
            } border-t-white`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default NavDropdown;
