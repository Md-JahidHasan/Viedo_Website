import axios from '../../utils/axios';

export const getRelatedVideos = async({tags, id})=>{
    const limit = 5;
    const filterString = tags.length > 0 ? tags.map(tag => `tags_like=${tag}`).join('&') + `&id_ne=${id}&_limit=${limit}` : `&id_ne=${id}&_limit=${limit}` ;
    // console.log(filterString);

    const response = await axios.get(`/videos?${filterString}`);
    return response.data;
}