import Flag from "@components/Common/UI/Flag";

export default {
  title: "Component/UI/Flag",
  component: Flag,
  argsType: {
    type: { control: "radio", option: ["interval", "run", "work"] },
  },
};

export const Default = ({ type, ...args }: any) => {
  return <Flag {...args} type={type} />;
};
