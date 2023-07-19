import styled from "@emotion/styled";
import theme from "../../../assets/styles/theme";

interface TodayDateProps {
  color: keyof typeof theme.palette;
}

function handleFormatedDate(): string {
  const today: Date = new window.Date();
  const year: number = today.getFullYear();
  const month: number = today.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
  const day: number = today.getDate();

  const formattedMonth: string = month < 10 ? `0${month}` : `${month}`;
  const formattedDay: string = day < 10 ? `0${day}` : `${day}`;

  const formattedDate: string = `${year}-${formattedMonth}-${formattedDay}`;
  return formattedDate;
}

const Date = () => {
  const todayDate: string = handleFormatedDate();

  return (
    <DateContainer>
      <DateTitle>Today</DateTitle>
      <TodayDate color={"darkGray"}>{todayDate}</TodayDate>
    </DateContainer>
  );
};

export default Date;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const TodayDate = styled.strong<TodayDateProps>`
  font-size: 12px;
  color: ${({ color, theme }) =>
    color && theme.palette[color] ? theme.palette[color] : "black"};
  line-height: 14.32px;
`;

const DateTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  line-height: 35.8px;
`;
