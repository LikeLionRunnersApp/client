import GlobalThemeProvider from "@assets/styles/GlobalThemeProvider";
import Calendar from "@components/Main/Calendar";

export default {
  title: "Component/Main/Calendar",
  component: Calendar,
};

export const Default = (args: any) => {
  return (
    <GlobalThemeProvider>
      <Calendar {...args} />
    </GlobalThemeProvider>
  );
};
