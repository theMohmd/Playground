import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import CircularCarouselElement from "./CircularCarouselElement";
import CircularCarouselButton from "./CircularCarouselButton";
import { ChevronLeft, ChevronRight } from "lucide-react";

type cType = {
    ease: string;
    duration: number;
    onComplete: () => void;
};
type dType = {
    fromValue: {
        opacity: number;
        rotate: number;
    };
    toValue: cType & {
        opacity: number;
        rotate: number;
    };
    fromValue2: {
        opacity: number;
        rotate: number;
    };
    toValue2: cType & {
        opacity: number;
        rotate: number;
    };
};
const prevDirection: (input: cType) => dType = (common: cType) => ({
    fromValue: {
        opacity: 1,
        rotate: 0,
    },
    toValue: {
        ...common,
        opacity: 0,
        rotate: -180,
    },
    fromValue2: {
        opacity: 0,
        rotate: 180,
    },
    toValue2: {
        ...common,
        opacity: 1,
        rotate: 0,
    },
});

const nextDirection: (input: cType) => dType = (common: cType) => ({
    fromValue: {
        opacity: 1,
        rotate: 0,
    },
    toValue: {
        ...common,
        opacity: 0,
        rotate: 180,
    },
    fromValue2: {
        opacity: 0,
        rotate: -180,
    },
    toValue2: {
        ...common,
        opacity: 1,
        rotate: 0,
    },
});
type CircularCarouselProps = { data: string[] };
const CircularCarousel = ({ data }: CircularCarouselProps) => {
    const [index, setindex] = useState(0);
    const [flag, setflag] = useState(true);
    const [active, setactive] = useState(true);
    const [direction, setdirection] = useState<"next" | "prev">("next");

    const r1 = useRef<HTMLImageElement | null>(null);
    const r2 = useRef<HTMLImageElement | null>(null);
    const r3 = useRef<HTMLImageElement | null>(null);
    const r4 = useRef<HTMLImageElement | null>(null);
    const r5 = useRef<HTMLImageElement | null>(null);
    const r6 = useRef<HTMLImageElement | null>(null);

    const prevButtonAction = () => {
        setactive(false);
        setindex((prevState) =>
            prevState - 1 >= 0 ? prevState - 1 : data.length - 1
        );
        setdirection("prev");
    };
    const nextButtonAction = () => {
        setactive(false);
        setindex((prevState) =>
            prevState + 1 < data.length ? prevState + 1 : 0
        );
        setdirection("next");
    };
    const transition = (directionData: (input: cType) => dType) => {
        const t1 = flag ? r1 : r4;
        const t2 = flag ? r2 : r5;
        const t3 = flag ? r3 : r6;
        const t4 = flag ? r4 : r1;
        const t5 = flag ? r5 : r2;
        const t6 = flag ? r6 : r3;

        if (t4.current) t4.current.src = data[index];
        if (t5.current) t5.current.src = data[index];
        if (t6.current) t6.current.src = data[index];

        const common = {
            ease: "power2.inOut",
            duration: 2,
            onComplete: () => {
                setactive(true);
            },
        };
        gsap.fromTo(
            t1.current,
            directionData(common).fromValue,
            directionData(common).toValue
        );
        gsap.fromTo(t2.current, directionData(common).fromValue, {
            ...directionData(common).toValue,
            delay: 0.2,
        });
        gsap.fromTo(
            t3.current,
            { ...directionData(common).fromValue, scale: 1.5 },
            { ...directionData(common).toValue, delay: 0.4, scale: 10 }
        );

        gsap.fromTo(
            t4.current,
            directionData(common).fromValue2,
            directionData(common).toValue2
        );
        gsap.fromTo(t5.current, directionData(common).fromValue2, {
            ...directionData(common).toValue2,
            delay: 0.2,
        });
        gsap.fromTo(
            t6.current,
            { ...directionData(common).fromValue2, scale: 10 },
            { ...directionData(common).toValue2, delay: 0.4, scale: 1.5 }
        );
    };
    useGSAP(
        () => {
            setflag((prevState) => !prevState);
            direction === "next"
                ? transition(nextDirection)
                : transition(prevDirection);
        },
        { dependencies: [index, direction] }
    );
    return (
        <div className="grid min-h-0 h-full max-w-full w-auto overflow-hidden relative justify-center items-center place-self-center bg-black">
            <div className="absolute right-5 bottom-5 z-50">
                <CircularCarouselButton
                    onClick={nextButtonAction}
                    active={active}
                >
                    <ChevronRight className="text-white translate-x-[2px]" />
                </CircularCarouselButton>
            </div>

            <div className="absolute bottom-5 left-5 z-50">
                <CircularCarouselButton
                    onClick={prevButtonAction}
                    active={active}
                >
                    <ChevronLeft className="text-white translate-x-[-2px]" />
                </CircularCarouselButton>
            </div>

            <CircularCarouselElement ref1={r1} ref2={r2} ref3={r3} />

            <CircularCarouselElement ref1={r4} ref2={r5} ref3={r6} />
        </div>
    );
};

export default CircularCarousel;
