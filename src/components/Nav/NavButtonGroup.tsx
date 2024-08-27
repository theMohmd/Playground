import { ChevronDown } from "lucide-react";
import { ReactNode, useState } from "react";

type NavButtonGroupProps = { name: string; children: ReactNode };

const NavButtonGroup = ({ name, children }: NavButtonGroupProps) => {
  const [expanded, setexpanded] = useState(false);
  return (
    <div>
      <div className="bg-gradient-to-tr rounded-md from-primary p-[2px] to-darkPrimary min-h-10">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setexpanded((prev) => !prev);
          }}
          className="flex gap-2 items-center p-2 bg-darkPrimary size-full rounded-[4px]"
        >
          <ChevronDown
            className={`${expanded ? "-rotate-90 " : null} duration-200`}
          />
          {name}
        </button>
      </div>
      <div
        style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
        className={`grid grid-rows-1 duration-200 pl-5 ${
          expanded ? "pt-2" : null
        }`}
      >
        <div
          style={{ visibility: expanded ? "visible" : "hidden" }}
          className="flex overflow-hidden flex-col gap-2"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default NavButtonGroup;
