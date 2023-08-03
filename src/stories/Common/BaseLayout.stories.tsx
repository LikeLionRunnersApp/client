import GlobalThemeProvider from "@assets/styles/GlobalThemeProvider";
import BaseLayout from "@components/Common/UI/BaseLayout";

export default {
  title: "Component/Common/BaseLayout",
  component: BaseLayout,
};

export const Default = (args: any) => {
  return (
    <GlobalThemeProvider>
      <BaseLayout {...args} />
    </GlobalThemeProvider>
  );
};
