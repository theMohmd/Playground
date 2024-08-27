type CircularCarouselElementProps = {
    ref1: React.LegacyRef<HTMLImageElement>;
    ref2: React.LegacyRef<HTMLImageElement>;
    ref3: React.LegacyRef<HTMLImageElement>;
};
const CircularCarouselElement = ({
    ref1,
    ref2,
    ref3,
}: CircularCarouselElementProps) => {
    return (
        <>
            <img
                ref={ref1}
                className="h-full object-cover z-30 col-start-1 row-start-1 scale-150 aspect-video"
                style={{ clipPath: "circle(15% at center)" }}
            />
            <img
                ref={ref2}
                className="h-full object-cover z-20 col-start-1 row-start-1 scale-150 brightness-90 aspect-video"
                style={{ clipPath: "circle(30% at center)" }}
            />
            <img
                ref={ref3}
                className="h-full object-cover z-10 col-start-1 row-start-1 scale-150 aspect-video"
            />
        </>
    );
};

export default CircularCarouselElement;
