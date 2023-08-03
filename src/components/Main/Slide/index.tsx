import Carousel from "react-material-ui-carousel";
import SlideItem from "./SlideItem";

const items = [
  {
    flag: "interval",
    title: "뉴비 환영!! 아기사자 모여라",
    date: "2023-07-04",
    time: "22:00",
  },
  {
    flag: "run",
    title: "뛰슈 참여하고 싶은 분들 참여해주세요!",
    date: "2023-07-04",
    time: "22:00",
  },
  {
    flag: "work",
    title: "걷슈 나랑 한번 걸을테슈?",
    date: "2023-07-06",
    time: "23:00",
  },
];

const Slide = () => {
  return (
    <Carousel
      autoPlay={false}
      animation="slide"
      indicators={false}
      duration={500}
    >
      {items.map((item, i) => (
        <SlideItem key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default Slide;
