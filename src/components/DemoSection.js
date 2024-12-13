import SparklesIcon from "./SparklesIcon";


export default function DemoSection () {
    return (
        <section className="flex justify-around mt-8 sm:mt-12 items-center">
        <div className="hidden sm:block bg-gray-800/50 w-[240px] h-[480px] rounded-xl">
        <video className="w-full h-full object-cover rounded-xl" src="/vids/without-captions.mp4" type="video/mp4" muted autoPlay loop></video>
        </div>
        <div className="hidden sm:block">
        <SparklesIcon/>
        </div>
        <div className="bg-gray-800/50 w-[240px] h-[480px] rounded-xl">
        <video className="w-full h-full object-cover rounded-xl" src="/vids/with-captions.mp4" type="video/mp4" muted autoPlay loop></video>
        </div>
      </section>
    )
}