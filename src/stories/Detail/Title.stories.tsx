import Title from "@components/Detail/Title";

export default {
  title: "Component/Detail/Title",
  component: Title,
};

export const Default = (args: any) => {
  return <Title {...args} />;
};
