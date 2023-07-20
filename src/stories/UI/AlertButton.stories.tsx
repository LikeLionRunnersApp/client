import AlertButton from "../../components/Common/UI/AlertButton";
import GlobalThemeProvider from "../../assets/styles/GlobalThemeProvider";

export default {
  title: "Component/UI/AlertButton",
  component: AlertButton,
};

export const Default = () => {
  return (
    <GlobalThemeProvider>
      <AlertButton />
    </GlobalThemeProvider>
  );
};
