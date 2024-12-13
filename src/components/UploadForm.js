'use client';
import { useState } from "react";
import UploadIcon from "./UploadIcon";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function UploadForm() {
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  async function upload(ev) {
    ev.preventDefault();
    const file = ev.target.files[0];

    if (file) {
      setIsUploading(true);

      try {
        // Step 1: Get Presigned URL
        const res = await axios.post("/api/upload", {
          name: file.name,
          type: file.type,
        });
        const { presignedUrl, newName } = res.data;
        // console.log(presignedUrl);
        // Step 2: Upload file directly to S3
        await axios.put(presignedUrl, file, {
          headers: {
            "Content-Type": file.type,
          },
        });

        setIsUploading(false);

        // Navigate to the new file page
        router.push("/" + newName);
      } catch (error) {
        
        console.error("File upload failed:", error);
        setIsUploading(false);
      }
    }
  }

  return (
    <>
      {isUploading && (
        <div className="bg-black/90 text-white inset-0 fixed flex items-center">
          <h2 className="w-full text-center text-2xl">
            Please wait while the file gets uploaded...
          </h2>
        </div>
      )}

      <label className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-purple-700/50 cursor-pointer">
        <UploadIcon />
        <span>Choose file</span>
        <input onChange={upload} type="file" className="hidden" />
      </label>
    </>
  );
}
