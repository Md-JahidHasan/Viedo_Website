import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideo } from "./videoAPI"

const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: ''
}

// thunk function 
export const fetchVideo = createAsyncThunk('video/fetchVideo', async (id)=>{
    const video = await getVideo(id);
    return video;
})


const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers:{
        like:(state, action)=>{
            if(state.video.unlikes > 0){
                state.video.unlikes--
            }
            else if(state.video.unlikes === 0 ){
                state.video.likes ++
            }
        },
        dislike:(state, action)=>{
            if (state.video.likes > 0){
                state.video.likes --
            }
            else if (state.video.likes === 0){
                state.video.unlikes ++
            }
            
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchVideo.pending, (state)=>{
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchVideo.fulfilled, (state, action)=>{
            state.isLoading =false;
            state.video = action.payload;
        })
        .addCase(fetchVideo.rejected, (state, action)=>{
            state.isError = true;
            state.isLoading = false;
            state.video = {};
            state.video = action.error.message;
        })
    }
})

export const {like, dislike} = videoSlice.actions;
export default videoSlice.reducer;