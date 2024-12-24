'use client'
import DemoSection from "../components/DemoSection";
import PageHeaders from "../components/PageHeaders";
import UploadForm from "../components/UploadForm";


export default function Home() {
  return (
    <>
      <PageHeaders
      h1text = 'Add captions to your Video'
      h2text = 'Just upload the video and we will do the rest!'
      />
      <div className="text-center mx-auto">
      <UploadForm/>
      </div>
      <DemoSection/>
    </>
  );
}
