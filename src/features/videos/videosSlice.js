import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideos } from "./VideoAPI"

const initialState = {
    isLoading: false,
    isError: false,
    videos:[],
    error:''
}


export const fetchVideos = createAsyncThunk('videos/fetchVideos', async ({selectedTags, searchText})=>{
    const videos = await getVideos(selectedTags, searchText)
    return videos;
})

const videosSlice = createSlice({
    name:'videos',
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchVideos.pending, (state)=>{
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchVideos.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.videos = action.payload;
        })
        .addCase(fetchVideos.rejected, (state, action)=>{
            state.isError = true;
            state.videos = [];
            state.isLoading = false;
            state.error = action.error?.message
        })
    }
})

export default videosSlice.reducer;