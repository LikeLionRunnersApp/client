import { BaseLayout } from "@components/Common";
import { Container } from "@components/Common";
import LoginHeader from "@components/Login/LoginHeader";
import Form from "@components/Login/Form";
import styled from "@emotion/styled";

const Login = () => {
  return (
    <BaseLayout>
      <Container>
        <LoginHeader />
        <Form />
      </Container>
    </BaseLayout>
  );
};

export default Login;
