import styled from "@emotion/styled";

import { IListIcon, ListIcon } from "@assets/images/ListIcon";

import Flag from "@components/Common/UI/Flag";
import Icon from "@components/Common/UI/Icon";
import Button from "@components/Common/UI/Button";
import { useState } from "react";

interface IListItem {
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

const RecruitmentListItem = () => {
  const [cheering, setCheering] = useState(false);

  const listItem: IListItem = {
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
  };

  const handleClickCheeringButton = () => {
    setCheering((prev) => !prev);
    console.log(cheering);
  };

  return (
    <Container>
      <IconContainer onClick={handleClickCheeringButton}>
        <Icon name="cheering" />
      </IconContainer>
      <ButtonContainer>
        <Button type="button" variant={listItem.status} size="sm">
          {listItem.status === "start"
            ? "시작하기"
            : listItem.status === "participation"
            ? "참여하기"
            : "신청완료"}
        </Button>
      </ButtonContainer>
      <ImageContainer>
        <img src={listItem.image} alt={listItem.title} />
      </ImageContainer>
      <ContentContainer>
        <Header>
          <Flag type={listItem.flag} />
          <h1>뉴비 환영!! 아기사자 모여라</h1>
        </Header>
        <Detail icon={ListIcon}>
          <dt>personnel</dt>
          <dd>
            {listItem.participation}/{listItem.limit}
          </dd>
          <dt>time</dt>
          <dd>{listItem.play_time}min</dd>
          <dt>location</dt>
          <dd>{listItem.location}</dd>
          <dt>date</dt>
          <dd>
            {listItem.date} / pm {listItem.time}
          </dd>
        </Detail>
      </ContentContainer>
    </Container>
  );
};

export default RecruitmentListItem;

const Container = styled.div`
  width: 327px;
  padding: 8px;
  position: relative;
  display: flex;
  background-color: #fff;
  border-radius: 8px;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const ImageContainer = styled.div`
  height: 96px;
  width: 96px;
  background-color: #d9d9d9;
  border-radius: 6px;
  margin-right: 8px;
`;

const ContentContainer = styled.div``;

const Header = styled.div`
  h1 {
    font-size: 12px;
    margin: 0;
    margin-top: 4px;
  }
  margin-bottom: 10px;
`;

const Detail = styled.dl<{ icon: IListIcon }>`
  opacity: 50%;
  font-size: 9px;

  dt {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    border: 0;
    clip: rect(0, 0, 0, 0);
  }

  dd {
    display: flex;
    align-items: center;
    margin: 0;
    margin-bottom: 5px;
  }

  dd:last-of-type {
    margin-bottom: 0;
  }

  dd::before {
    display: inline-block;
    content: "";
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    width: 9.086px;
    height: 10.571px;
    margin-right: 4px;
  }

  dd:first-of-type {
    display: inline-block;
    width: 50%;
  }

  dd:nth-of-type(2) {
    display: inline-block;
    width: 50%;
  }

  dd:first-of-type:before {
    background-image: url(${({ icon }) => icon["personnel"]});
  }

  dd:nth-of-type(2):before {
    background-image: url(${({ icon }) => icon["time"]});
  }

  dd:nth-of-type(3):before {
    background-image: url(${({ icon }) => icon["location"]});
  }

  dd:last-of-type:before {
    background-image: url(${({ icon }) => icon["date"]});
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 8px;
  bottom: 8px;
`;
