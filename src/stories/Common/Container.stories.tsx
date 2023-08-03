import GlobalThemeProvider from "@assets/styles/GlobalThemeProvider";
import Container from "@components/Common/Container";

export default {
  title: "Component/Common/BaseLayout",
  component: Container,
};

export const Default = (args: any) => {
  return (
    <GlobalThemeProvider>
      <Container {...args} />
    </GlobalThemeProvider>
  );
};
