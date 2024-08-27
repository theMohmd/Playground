//import { useQuery } from "@tanstack/react-query";
//import axios from "axios";
import CircularCarousel from "./CircularCarousel";
//import Loading from "../ui/Loading";
const data = [
  "/0.jpg",
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
];
const CircularCarouselContainer = () => {
  // const { data, isLoading, error } = useQuery({
  //     queryFn: async () => {
  //         return await axios
  //             .get(
  //                 "https://api.unsplash.com/photos/random?orientation=landscape&count=4&client_id=f-e30G8XW1TdP2ua4Vq0qRocjPhCoNOhw6BuGxTt-tQ"
  //             )
  //             .then((res) => res.data.map((item) => item.urls.regular));
  //     },
  //     queryKey: ["Ccarousel"],
  //     staleTime: Infinity,
  //     refetchIntervalInBackground: false,
  // });
  // if (error) return <p> error </p>;
  // if (isLoading) return <Loading />;
  // if (data) return <CircularCarousel data={data} />;
  return <CircularCarousel data={data} />;
};

export default CircularCarouselContainer;
