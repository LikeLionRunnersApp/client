import location from './location.svg'
import personnel from './personnel.svg'
import time from './time.svg'
import date from './date.svg'

export interface IListIcon {
  [key: string]: string
}

export const ListIcon: IListIcon = { location, personnel, time, date }
