import { BaseLayout } from "@components/Common";
import { Container } from "@components/Common";
import LoginHeader from "@components/SignIn/LoginHeader";
import Form from "@components/SignIn/Form";
import Navigate from "@components/SignIn/Navigate";
import SocialLogin from "@components/SignIn/SocialLogin";

const SignIn = () => {
  return (
    <BaseLayout>
      <Container>
        <LoginHeader />
        <Form />
        <Navigate />
        <SocialLogin />
      </Container>
    </BaseLayout>
  );
};

export default SignIn;
