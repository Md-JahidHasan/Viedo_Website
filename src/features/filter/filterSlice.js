const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    selectedTags : [],
    searchText : ''
};


const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers:{
        addTag:(state, action)=>{
            state.selectedTags.push(action.payload)
        },
        removeTag:(state, action)=>{
            const indexToRemove = state.selectedTags.indexOf(action.payload);
            if(indexToRemove !== -1){
                state.selectedTags.splice(indexToRemove, 1)
            }
        },
        searched:(state, action)=>{
            state.searchText = action.payload;
        }
    }
})

export const {addTag, removeTag, searched} = filterSlice.actions
export default filterSlice.reducer;
 