import GlobalThemeProvider from "@assets/styles/GlobalThemeProvider";
import Icon from "@components/Common/UI/Icon";

export default {
  title: "Component/UI/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: "radio",
      options: ["alert", "hamberger", "edit", "share", "cheering"],
    },
    on: {
      control: "boolean",
    },
  },
};

export const Default = (args: any) => {
  return (
    <GlobalThemeProvider>
      <Icon {...args} />
    </GlobalThemeProvider>
  );
};
