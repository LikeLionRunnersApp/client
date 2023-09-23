import { BaseLayout, Container } from '@components/Common'
import FormHeader from '@components/Common/FormHeader'
import { useState } from 'react'
import FindNavigator from '@components/FindUser/FindNavigator'
import FindId from '@/components/FindUser/FindId'

const FindUser = () => {
  const [tab, setTab] = useState('id')

  return (
    <>
      <BaseLayout>
        <FormHeader title="아이디/비밀번호 찾기" />
        <FindNavigator onTab={tabName => setTab(tabName)} />
        <Container>{tab === 'id' ? <FindId /> : null}</Container>
      </BaseLayout>
    </>
  )
}

export default FindUser
