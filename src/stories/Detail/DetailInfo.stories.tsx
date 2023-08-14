import DetailInfo from "@components/Detail/Info/DetailInfo";

export default {
  title: "Component/Detail/DetailInfo",
  component: DetailInfo,
};

export const Default = (args: any) => {
  return <DetailInfo {...args} />;
};
