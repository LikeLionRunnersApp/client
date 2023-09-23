import { BaseLayout, Container } from '@components/Common'
import FormHeader from '@components/Common/FormHeader'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import FindNavigator from '@components/FindUser/FindNavigator'

const FindUser = () => {
  const [tab, setTab] = useState('id')

  console.log(tab)

  return (
    <>
      <BaseLayout>
        <FormHeader title="아이디/비밀번호 찾기" />
        <FindNavigator onTab={tabName => setTab(tabName)} />
        <Container>
          {/* find-id or find-pw */}
          <Outlet />
        </Container>
      </BaseLayout>
    </>
  )
}

export default FindUser
