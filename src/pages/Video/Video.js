import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Player from '../../components/description/Player';
import VideoDescription from '../../components/description/VideoDescription';
import RelatedVideoList from '../../components/list/RelatedVideoList';
import { fetchVideo } from '../../features/video/videoSlice';

const Video = () => {
    const { videoId } = useParams();


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchVideo(videoId))
    }, [dispatch, videoId])


    const { video, isLoading, isError, error } = useSelector((state)=>state.video);

    let content = null;

    if (isLoading) content = <div className="col-span-12">Video Is Loading</div>
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && !video?.id) content = <div className="col-span-12">Video Not Fount</div>
    if (!isLoading && !isError && video?.id){
    content =
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
                {/* <!-- video player --> */}
                <Player video={video}></Player>

                {/* <!-- video description --> */}
                <VideoDescription video={video}></VideoDescription>
            </div>

            {/* <!-- related videos --> */}
            <RelatedVideoList currentVideoId={video.id} tags={video.tags}></RelatedVideoList>
        </div>
    }

    return (
        <div>

            <section className="pt-6 pb-20">
                <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                    {content}
                </div>
            </section>

        </div>
    );
};

export default Video;