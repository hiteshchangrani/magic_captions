import SparklesIcon from "./components/SparklesIcon";


export default function Home() {
  return (
    <main className="p-4 mx-auto max-w-2xl">
      <header className="flex justify-between my-8">
        <a className="flex gap-1" href="">
          <SparklesIcon/>
          <span>EpicCaptions</span>
        </a>
        <nav className="flex gap-6 text-white/90">
          <a href="">Home</a>
          <a href="">Pricing</a>
          <a href="">Contact</a>
        </nav>
      </header>
      <div className="text-center mt-24 mb-8">
        <h1 className="text-3xl" style={{textShadow: '3px 3px 0 rgba(0, 0, 0, .4)'}}>Add Epic captions to your Video</h1>
        <h2 className="text-white/75">Just upload the video and we will do the rest!</h2>
      </div>
      <div className="text-center mx-auto">
      <button className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-purple-700/50 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </svg>
        <span>Choose file</span>
      </button>
      </div>
      <div className="flex justify-around mt-12 items-center">
        <div className="bg-gray-800/50 w-[240px] h-[480px] rounded-xl"></div>
        <div>
          <SparklesIcon/>
        </div>
        <div className="bg-gray-800/50 w-[240px] h-[480px] rounded-xl"></div>
      </div>
    </main>
  );
}
