import { useState, useCallback } from "react";

interface Props {
  initialEmail: string;
  initialPassword: string;
}

export default function useFormValidation({
  initialEmail,
  initialPassword,
}: Props) {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);

  const isEmailValidate = email.includes("@");
  const isPasswordValidate = () => {
    if (password.length < 8) return false;

    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
      password
    );

    return hasLetter && hasNumber && hasSpecialChar;
  };

  const emailValidate = useCallback(() => {
    return isEmailValidate ? true : false;
  }, [email]);

  const passwordValidate = useCallback(() => {
    return isPasswordValidate() ? true : false;
  }, [password]);

  const isValidate = useCallback(() => {
    return isEmailValidate && isPasswordValidate() ? true : false;
  }, [email, password]);

  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail);
  };

  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
  };

  return {
    email,
    password,
    emailValid: emailValidate(),
    passwordValid: passwordValidate(),
    validate: isValidate(),
    handleEmailChange,
    handlePasswordChange,
  };
}
