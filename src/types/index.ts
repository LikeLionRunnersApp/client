export interface User<T extends string = string> {
  memberId: T
  password: T
}

export interface UserInfo<T extends string = string> extends User<T> {
  phoneNum: T
  name: T
}

export interface Weeks {
  id: number
  flag: 'interval' | 'run' | 'work'
  image: string
  title: string
  totalMember: number
  joinMember: number
  play_time: number
  location: string
  time: string
  status: 'start' | 'participation' | 'complete'
}

export interface Params {
  serviceKey: string
  pageNo: string
  numOfRows: string
  dataType: string
  base_date: string
  base_time: string
  nx: string
  ny: string
}
