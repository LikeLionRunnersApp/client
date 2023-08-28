import Form from "@components/SignIn/Form";

export default {
  title: "Component/Login/Form/",
  component: Form,
};

export const Default = (args: any) => {
  return <Form {...args} />;
};
