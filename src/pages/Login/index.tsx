import { BaseLayout } from "@components/Common";
import { Container } from "@components/Common";
import LoginHeader from "@components/Login/LoginHeader";
import Form from "@components/Login/Form";
import Navigate from "@components/Login/Navigate";
import SocialLogin from "@components/Login/SocialLogin";
import styled from "@emotion/styled";

const Login = () => {
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

export default Login;
