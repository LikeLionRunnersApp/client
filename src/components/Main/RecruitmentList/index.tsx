import styled from "@emotion/styled";

import RecruitmentListItem from "./RecruitmentListItem";
import { IWeeks } from "@pages/Main";

interface Props {
  weeks: IWeeks[];
  date: string;
}

const RecruitmentList = ({ weeks, date }: Props) => {
  return (
    <Container>
      {weeks.map((week) => (
        <RecruitmentListItem key={week.id} week={week} date={date} />
      ))}
    </Container>
  );
};

export default RecruitmentList;

const Container = styled.div`
  height: 73vh;
  overflow: scroll;
`;
