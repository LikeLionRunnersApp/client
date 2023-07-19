import GlobalThemeProvider from "../../assets/styles/GlobalThemeProvider";
import Whether from "../../components/Main/Whether";

export default {
  title: "Component/Whether",
  component: Whether,
};

export const Default = () => {
  return (
    <GlobalThemeProvider>
      <Whether />
    </GlobalThemeProvider>
  );
};
