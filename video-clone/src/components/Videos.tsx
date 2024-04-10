import React from 'react';

interface VideosProps {
    el: {
        postId: string;
        submission: {
            thumbnail: string;
            title: string;
        }
    };
    handlePlayVideo: (id: string) => void;

}

const Videos: React.FC<VideosProps> = ({ el, handlePlayVideo }) => {
    return (
        <div className="p-4 cursor-pointer" >
            <img src={el.submission.thumbnail} alt={el.submission.title} className="w-full h-fit" onClick={() => handlePlayVideo(el.postId)} />
        </div>
    );
};

export default Videos;
