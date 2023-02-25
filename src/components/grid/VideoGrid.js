import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../features/videos/videosSlice';
import VideoGridItem from './VideoGridItem';

const VideoGrid = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchVideos())
    }, [dispatch]);

    const {videos, isLoading, isError, error} = useSelector((state)=>state.videos);

    let content;

    if (isLoading) content = <div className="col-span-12">Data is Loading</div>
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if(!isError && !isLoading && videos.length>0){
        content = videos.map(video => <VideoGridItem key={video.id} video={video}></VideoGridItem>)
    }
    if (!isError && !isLoading && videos.length === 0) content = <div className="col-span-12">Data is Loading</div>


    return (
        <section className="pt-12">
            <section className="pt-12">
                <div
                    className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                >
                    {/* <!-- single video --> */}
                    {content}

                    {/* <div className="col-span-12">some error happened</div> */}
                </div>
            </section>
        </section>
    );
};

export default VideoGrid;