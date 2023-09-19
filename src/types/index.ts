export interface User<T extends string = string> {
  memberId: T
  password: T
}

export interface UserInfo<T extends string = string> extends User<T> {
  phoneNum: T
  name: T
}
