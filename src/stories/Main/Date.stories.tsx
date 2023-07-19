import Date from "../../components/Main/Date";
import GlobalThemeProvider from "../../assets/styles/GlobalThemeProvider";

export default {
  title: "Component/Date",
  component: Date,
};

export const Default = () => {
  return (
    <GlobalThemeProvider>
      <Date />
    </GlobalThemeProvider>
  );
};
