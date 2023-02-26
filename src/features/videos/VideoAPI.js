import axios from "../../utils/axios"

export const getVideos = async(selectedTags, searchText)=>{
    // console.log(selectedTags);
    let queryText = '';
    if(selectedTags?.length > 0){
        queryText += selectedTags.map(tag=>`tags_like=${tag}`).join('&')
    }
    if(searchText !== ''){
        queryText += `&q=${searchText}`
    }
    console.log('--',queryText);
    const response = await axios.get(`/videos/?${queryText}`);
    return response.data;
}