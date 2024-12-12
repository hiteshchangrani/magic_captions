'use client'
import { useState } from "react";
import UploadIcon from "./UploadIcon";
import axios from "axios";
import { useRouter } from "next/navigation";


export default function UploadForm () {

    const [isUploading, setIsUploading] = useState(false);
    const router = useRouter();
    
    async function upload(ev) {
        ev.preventDefault();
        console.log(ev);
        const files = ev.target.files;
        if (files.length > 0) {
            const file = files[0];
            setIsUploading(true);


            const res = await axios.postForm('/api/upload',{
                file,
            });
            setIsUploading(false);
            const newName = res.data.newName;
            router.push('/'+ newName);
        }
    }

    return (
        <>
        {isUploading && (
            <div className="bg-black/90 text-white inset-0 fixed flex items-center">
                <h2 className="w-full text-center text-2xl">Please wait while file gets uploaded...</h2>
            </div>
        )}

        <label className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-purple-700/50 cursor-pointer">
        <UploadIcon/>  
        <span>Choose file</span>
        <input onChange={upload} type="file" className="hidden"/>
        </label>
      </>
    )
}