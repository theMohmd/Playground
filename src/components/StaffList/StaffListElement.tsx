import { motion } from "framer-motion";
type StaffListElementProps = {
    src: string;
    active: boolean;
    onClick: React.MouseEventHandler<HTMLDivElement>;
    i: number;
};
export const StaffListElement = ({
    src,
    active,
    onClick,
    i,
}: StaffListElementProps) => {
    const motionVariants = {
        initial: { x: "-1000%"},
        animate: {
            x: 0,
            transition: { duration: 0.5, delay: i * 0.1 },
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={motionVariants}
            className={`
                object-cover h-full relative cursor-pointer
                shrink-0
                opacity-100 overflow-hidden  ${
                    active ? "min-w-[100px]" : null
                }  rounded-xl transition-all duration-500 ease-out grow
                ${!active ? "grayscale" : null}`}
            style={{ zIndex: 100 - i, width: active ? "25%" : "10%" }}
            onClick={onClick}
        >
            <img src={src} className={` hue-rotate-0 size-full object-cover`} />

            <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-black"></div>
        </motion.div>
    );
};
