import { useState, useEffect } from 'react';
import Pagination from './Pagination';
import axios from 'axios';
import Videos from './Videos';
import { IoMdArrowRoundBack } from "react-icons/io";


const VideoList = () => {
    const [posts, setPosts] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [playVideo, setPlayVideo] = useState<any>(null)

    useEffect(() => {
        fetchVideos();
    }, [currentPage]);

    const fetchVideos = async () => {
        try {
            const response = await axios.get(`https://internship-service.onrender.com/videos?page=${currentPage}`);
            console.log(response.data);
            setPosts(response.data.data.posts);
        } catch (error) {
            console.error('error:', error);
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        setPlayVideo(null);
    };

    const handlePlayVideo = (id: string) => {
        const video = posts.find((v) => v.postId === id);
        if (video) {
            setPlayVideo(video);
        }
    }


    return (
        <div>
            {playVideo ? (
                <>
                    <IoMdArrowRoundBack size={32} className='m-2' onClick={() => setPlayVideo(null)} />
                    <div className='w-100% h-100vh flex justify-center items-center'>
                        <video controls width="250" className='m-5'>
                            <source src={playVideo.submission.mediaUrl} type="video/webm" />
                            video.
                        </video>
                    </div>
                </>
            ) : (
                <>
                    <div className="grid grid-cols-4 gap-6 ">
                        {posts.map((el) => (
                            <Videos key={el.postId} el={el} handlePlayVideo={handlePlayVideo} />
                        ))}
                    </div>
                    <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
                </>
            )
            }

        </div>
    );
};

export default VideoList;
