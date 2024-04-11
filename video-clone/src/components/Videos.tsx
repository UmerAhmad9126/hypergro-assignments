import React from 'react';

interface VideosProps {
    el: {
        postId: string;
        submission: {
            thumbnail: string;
            title: string;
            description:string;
        }
    };
    handlePlayVideo: (id: string) => void;

}

const Videos: React.FC<VideosProps> = ({ el, handlePlayVideo }) => {
    return (
        <div className="p-4 cursor-pointer" >
            <img src={el.submission.thumbnail} alt={el.submission.title} className="w-full h-fit" onClick={() => handlePlayVideo(el.postId)} />
            <h1 className='text-center mt-3 font-bold '>{el.submission.title}</h1>
            <p className='text-center  mt-3'>{el.submission.description.substring(0,60)}...</p>
        </div>
    );
};

export default Videos;
