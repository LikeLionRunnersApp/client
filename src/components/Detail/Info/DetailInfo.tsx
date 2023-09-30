import styled from '@emotion/styled'

import { IListIcon, ListIcon } from '@assets/images/ListIcon'

const DetailInfo = () => {
  return (
    <Detail icon={ListIcon}>
      <dt>personnel</dt>
      <dd>6/6</dd>
      <dd>장대동 학사마을 다리 밑</dd>
      <dt>date</dt>
      <dt>time</dt>
      <dd>40min</dd>
      <dt>each play time</dt>
      <dd>뛰기 1min / 걷기 3min</dd>
      <dt>location</dt>
      <dd>2023-07-04 / pm 22:00</dd>
    </Detail>
  )
}

export default DetailInfo

const Detail = styled.dl<{ icon: IListIcon }>`
  opacity: 50%;
  font-size: 9px;
  margin: 11px 0px;

  dt {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    border: 0;
    clip: rect(0, 0, 0, 0);
  }

  dd {
    display: inline-block;
    width: 50%;
    align-items: center;
    margin: 0;
    margin-bottom: 8px;
  }

  dd:last-of-type {
    margin-bottom: 0;
  }

  dd::before {
    display: inline-block;
    content: '';
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    width: 9.086px;
    height: 10.571px;
    margin-right: 4px;
  }

  dd:nth-of-type(3) {
    display: inline-block;
    width: 15%;
  }

  dd:nth-of-type(4) {
    display: inline-block;
    width: 35%;
  }

  dd:first-of-type:before {
    background-image: url(${({ icon }) => icon.personnel});
  }

  dd:nth-of-type(2):before {
    background-image: url(${({ icon }) => icon.time});
  }

  dd:nth-of-type(3):before {
    background-image: url(${({ icon }) => icon.location});
  }

  dd:last-of-type:before {
    background-image: url(${({ icon }) => icon.date});
  }
`
