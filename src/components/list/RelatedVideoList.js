import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos } from '../../features/relatedVideos/relatedVideosSlice';
import RelatedVideoListItem from './RelatedVideoListItem';

const RelatedVideoList = ({currentVideoId, tags}) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchRelatedVideos({tags, id:currentVideoId}))
    }, [dispatch, currentVideoId, tags]);

    const {relatedVideos, isLoading, isError, error} = useSelector((state)=>state.relatedVideos);

    let content = null;

    if (isLoading) content = <div className="col-span-12">Data is loading</div>;
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>;
    if (!isLoading && !isError && relatedVideos.length === 0) content = <div className="col-span-12">No related Video found...</div>;
    if (!isLoading && !isError && relatedVideos.length > 0){
        content = 
            relatedVideos.map(video => <RelatedVideoListItem key={video.id} video={video}></RelatedVideoListItem>)
    }


    return (
        <div
            className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
        >
            {/* <!-- single related video --> */}
                {content}
        </div>
    );
};

export default RelatedVideoList;