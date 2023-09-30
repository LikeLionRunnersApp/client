import { Recruitment } from '@/types'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchGetRecruitmentList } from '@/apis/home'

export interface RecruitmentState {
  data: Recruitment[]
  isLoading: boolean
  error: string | null
}

const initialState: RecruitmentState = {
  data: [],
  isLoading: false,
  error: null as string | null,
}

export const fetchRecruitmentList = createAsyncThunk(
  'recruitment/getList',
  async (date: string) => {
    const res = await fetchGetRecruitmentList(date)
    return res
  },
)

export const recruitmentSlice = createSlice({
  name: 'recruitment',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchRecruitmentList.pending, (state: RecruitmentState) => {
        state.isLoading = true
      })
      .addCase(
        fetchRecruitmentList.fulfilled,
        (state: RecruitmentState, action: PayloadAction<Recruitment[]>) => {
          state.isLoading = false
          state.data = action.payload
        },
      )
      .addCase(
        fetchRecruitmentList.rejected,
        (state: RecruitmentState, action) => {
          state.isLoading = false
          state.data = []
          state.error = action.payload as string
        },
      ),
})
