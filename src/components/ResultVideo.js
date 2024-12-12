import { useEffect, useState } from "react";
import SparklesIcon from "./SparklesIcon";

export default function ResultVideo({filename}){
    const [videoSrc, setVideoSrc] = useState('0');
        useEffect(()=>{
            setVideoSrc("https://project-magic-captions.s3.amazonaws.com/" + filename)
        }, [])
    
    
    return (
        <>
            <div className="mb-4">
                        <button className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-purple-700/50 cursor-pointer">
                            <SparklesIcon />
                            <span>Apply captions</span>
                        </button>
                    </div>
                    <div className="rounded-xl overflow-hidden">
                        <video
                            controls
                            data-video = {videoSrc}
                            src={videoSrc}>
                        </video>
                    </div>
        </>
    )
}