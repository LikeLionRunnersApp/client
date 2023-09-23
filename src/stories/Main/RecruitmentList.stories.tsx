import RecruitmentList from '@/components/Main/RecruitmentList/RecruitmentList'

export default {
  title: 'Component/Main/RecruitmentList',
  component: RecruitmentList,
}

export const Default = (args: any) => {
  return <RecruitmentList {...args} />
}
