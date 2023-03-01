import { createAsyncThunk } from "@reduxjs/toolkit";

const loginByUsername = createAsyncThunk(
    'login/loginByUsername',
    async (userId: number, thunkAPI) => {
      const response = await userAPI.fetchById(userId)
      return response.data
}