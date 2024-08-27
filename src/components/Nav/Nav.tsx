import { motion } from "framer-motion";
import NavButton from "./NavButton";
import NavButtonGroup from "./NavButtonGroup";
import { XIcon } from "lucide-react";
type NavProps = { hide: () => void };
const Nav = ({ hide }: NavProps) => {
  return (
    <motion.div
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ type: "just" }}
      className="flex overflow-auto border-r border-r-primary flex-col gap-2 p-5 text-white bg-darkerPrimary backdrop-blur-md noScrollBar"
      onClick={hide}
    >
      <button className="lg:hidden p-4" onClick={hide}>
        <XIcon />
      </button>
      <NavButton to="/">Home</NavButton>
      <NavButtonGroup name="Carousel">
        <NavButton to="carousel/1">Circular</NavButton>
      </NavButtonGroup>
      <NavButton to="stafflist">Staff list</NavButton>
      <NavButton to="nav">Nav</NavButton>
      <NavButton to="scroll">Infinite Scroll</NavButton>
      <NavButton to="animatepath">Animate Path</NavButton>
    </motion.div>
  );
};

export default Nav;
