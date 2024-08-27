import { motion } from "framer-motion";

//InfiniteScroll component
//data below can be props
const images = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png",
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/2078px-Vitejs-logo.svg.png",
  "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/1022px-Vimlogo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png",
];
const itemSize = 80;
const duration = 10;
const InfiniteScroll = () => {
  return (
    <div
      style={{ height: itemSize }}
      className="flex overflow-hidden relative gap-8 justify-center items-center w-full bg-white"
    >
      <div
        style={{ maxWidth: itemSize * (images.length + 1) }}
        className="flex overflow-hidden relative w-full h-full"
      >
        {images.map((item, index) => (
          <motion.img
            animate={{ left: [-itemSize, itemSize * (images.length + 1)] }}
            transition={{
              duration: duration,
              delay: (index * duration) / images.length,
              repeat: Infinity,
              ease: "linear",
            }}
            className="object-contain absolute left-0 p-1 logos"
            style={{ height: itemSize, width: itemSize }}
            src={item}
            key={item + index}
          />
        ))}
        <div className="absolute bg-gradient-to-r from-white via-transparent to-white size-full via-[percentage:20%_80%]"></div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
