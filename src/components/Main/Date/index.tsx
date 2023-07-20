import styled from "@emotion/styled";
import theme from "../../../assets/styles/theme";
import useDate from "../../../hooks/useDate";

interface TodayDateProps {
  color: keyof typeof theme.palette;
}

const Date = () => {
  const todayDate: string[] = useDate();
  const year = todayDate[0]
  const month = todayDate[1]
  const day = todayDate[2]
  const formattedDate: string = `${year}-${month}-${day}`;

  return (
    <DateContainer>
      <DateTitle>Today</DateTitle>
      <TodayDate color={"darkGray"}>{formattedDate}</TodayDate>
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
