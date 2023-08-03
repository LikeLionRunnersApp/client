import styled from "@emotion/styled";

import RecruitmentListItem from "./RecruitmentListItem";

export interface IListItem {
  id: number;
  flag: "interval" | "run" | "work";
  image: string;
  title: string;
  limit: number;
  participation: number;
  play_time: number;
  location: string;
  date: string;
  time: string;
  status: "start" | "participation" | "complete";
}

const RecruitmentList = () => {
  const listItem: IListItem[] = [
    {
      id: 1,
      flag: "interval",
      image: "",
      title: "뉴비 환영!! 아기사자 모여라",
      limit: 6,
      participation: 3,
      play_time: 40,
      location: "장대동 학사마을 다리 밑",
      date: "2023-07-04",
      time: "22:00",
      status: "start",
    },
    {
      id: 2,
      flag: "interval",
      image: "",
      title: "뉴비 환영!! 아기사자 모여라",
      limit: 6,
      participation: 3,
      play_time: 40,
      location: "장대동 학사마을 다리 밑",
      date: "2023-07-04",
      time: "22:00",
      status: "start",
    },
    {
      id: 3,
      flag: "interval",
      image: "",
      title: "뉴비 환영!! 아기사자 모여라",
      limit: 6,
      participation: 3,
      play_time: 40,
      location: "장대동 학사마을 다리 밑",
      date: "2023-07-04",
      time: "22:00",
      status: "start",
    },
    {
      id: 4,
      flag: "interval",
      image: "",
      title: "뉴비 환영!! 아기사자 모여라",
      limit: 6,
      participation: 3,
      play_time: 40,
      location: "장대동 학사마을 다리 밑",
      date: "2023-07-04",
      time: "22:00",
      status: "start",
    },
    {
      id: 5,
      flag: "interval",
      image: "",
      title: "뉴비 환영!! 아기사자 모여라",
      limit: 6,
      participation: 3,
      play_time: 40,
      location: "장대동 학사마을 다리 밑",
      date: "2023-07-04",
      time: "22:00",
      status: "start",
    },
    {
      id: 6,
      flag: "interval",
      image: "",
      title: "뉴비 환영!! 아기사자 모여라",
      limit: 6,
      participation: 3,
      play_time: 40,
      location: "장대동 학사마을 다리 밑",
      date: "2023-07-04",
      time: "22:00",
      status: "start",
    },
    {
      id: 7,
      flag: "interval",
      image: "",
      title: "뉴비 환영!! 아기사자 모여라",
      limit: 6,
      participation: 3,
      play_time: 40,
      location: "장대동 학사마을 다리 밑",
      date: "2023-07-04",
      time: "22:00",
      status: "start",
    },
    {
      id: 8,
      flag: "interval",
      image: "",
      title: "뉴비 환영!! 아기사자 모여라",
      limit: 6,
      participation: 3,
      play_time: 40,
      location: "장대동 학사마을 다리 밑",
      date: "2023-07-04",
      time: "22:00",
      status: "start",
    },
  ];

  return (
    <Container>
      {listItem.map((item) => (
        <RecruitmentListItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default RecruitmentList;

const Container = styled.div`
  height: 500px;
  overflow: scroll;
`;
