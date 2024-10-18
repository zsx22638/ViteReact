import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 创建一个 slice
const channelStore = createSlice({
    name: "channel",
    initialState: {
        channels: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        setChannels: (state, action) => {
            state.channels = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

// 导出 action creators
export const { setChannels, setLoading, setError } = channelStore.actions;

// 创建异步 thunk 函数
export const fetchChannels = () => async (dispatch) => {
    dispatch(setLoading(true)); // 在请求开始时设置 loading 状态
    try {
        const response = await axios.get("http://geek.itheima.net/v1_0/channels");
        console.log(response);
        dispatch(setChannels(response.data.data.channels)); // 设置 channels
        dispatch(setLoading(false)); // 请求成功后设置 loading 状态为 false
    } catch (error) {
        console.log(error);
        dispatch(setError(error.message)); // 设置错误信息
        dispatch(setLoading(false)); // 请求失败后设置 loading 状态为 false
    }
};

export default channelStore.reducer;
