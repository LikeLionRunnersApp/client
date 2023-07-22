import Button from "@components/Common/UI/Button";

export default {
  title: "Component/UI/Button",
  component: Button,
  argTypes: {
    size: { control: "radio", options: ["sm", "lg"] },
  },
};

export const Default = (args: any) => {
  return (
    <Button {...args} type="button">
      참여하기
    </Button>
  );
};
