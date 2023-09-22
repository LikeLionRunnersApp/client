import { useState, useCallback } from 'react'

interface Props {
  initialMemberId?: string
  initialPassword?: string
  initialConfirmPassword?: string
  initialPhoneNumber?: string
}

export default function useFormValidation({
  initialMemberId,
  initialPassword,
  initialConfirmPassword,
  initialPhoneNumber,
}: Props) {
  const [memberId, setMemberId] = useState(initialMemberId || '')
  const [password, setPassword] = useState(initialPassword || '')
  const [confirmPassword, setConfirmPassword] = useState(
    initialConfirmPassword || '',
  )
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber || '')

  const isEmailValidate = memberId.includes('@')
  const isPasswordValidate = () => {
    if (password.length < 8) return false

    const hasLetter = /[a-zA-Z]/.test(password)
    const hasNumber = /[0-9]/.test(password)
    const hasSpecialChar = /[!@#$%^&*()_+=[\]{};':"|,.<>/?]+/.test(password)

    return hasLetter && hasNumber && hasSpecialChar
  }
  const isPhoneNumberValidate = /^\d{3}-\d{4}-\d{4}$/

  const memberIdValidate = useCallback(() => {
    return isEmailValidate ? true : false
  }, [memberId])

  const passwordValidate = useCallback(() => {
    return isPasswordValidate() ? true : false
  }, [password])

  const confirmPasswordValidate = useCallback(() => {
    return password === confirmPassword
  }, [password, confirmPassword])

  const phoneNumberValidate = useCallback(() => {
    return isPhoneNumberValidate.test(phoneNumber)
  }, [phoneNumber])

  const isValidate = useCallback(() => {
    return isEmailValidate && isPasswordValidate() && confirmPasswordValidate()
      ? true
      : false
  }, [memberId, password])

  const handleMemberIdChange = (newEmail: string) => {
    setMemberId(newEmail)
  }

  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword)
  }

  const handleConfirmPasswordChange = (newConfirmPassword: string) => {
    setConfirmPassword(newConfirmPassword)
  }

  const handlePhoneNumberChange = (newPhoneNumber: string) => {
    setPhoneNumber(newPhoneNumber)
  }

  return {
    memberId,
    password,
    confirmPassword,
    phoneNumber,
    memberIdValid: memberIdValidate(),
    passwordValid: passwordValidate(),
    confirmPasswordValid: confirmPasswordValidate(),
    phoneNumberValid: phoneNumberValidate(),
    validate: isValidate(),
    handleMemberIdChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handlePhoneNumberChange,
  }
}
