import { ReactNode } from "react";

type CircularCarouselButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    active: boolean;
    children: ReactNode;
};
const CircularCarouselButton = ({
    onClick,
    active,
    children,
}: CircularCarouselButtonProps) => {
    return (
        <button
            disabled={!active}
            className="flex opacity-50 hover:opacity-80 justify-center items-center w-10 h-10 bg-black bg-opacity-20 rounded-full border border-white transition-all hover:border-opacity-70 hover:scale-150 active:scale-125 group backdrop-blur-[100px]"
            onClick={onClick}
        >
            <div>{children}</div>
        </button>
    );
};

export default CircularCarouselButton;
