'use client';
import ResultVideo from "@/components/ResultVideo";
import TranscriptionEditor from "@/components/TranscriptionEditor";
import { clearTranscriptionItems } from "@/libs/awsTranscriptionHelpers";
import axios from "axios";
import { useEffect, useState } from "react";
import { use } from "react";

export default function FilePage({ params: paramsPromise }) {
    const params = use(paramsPromise); // Unwrap the promise
    const { filename } = params;

    const [isTranscribing, setIsTranscribing] = useState(false);
    const [isFetchingInfo, setIsFetchingInfo] = useState(false);
    const [awsTranscriptionItems, setAwsTranscriptionItems] = useState([]);

    useEffect(() => {
        getTranscription();
    }, [filename]);

    function getTranscription() {
        setIsFetchingInfo(true);
        axios.get('/api/transcribe?filename=' + filename).then(response => {
            setIsFetchingInfo(false);
            const status = response.data?.status;
            const transcription = response.data?.transcription;
            if (status === 'IN_PROGRESS') {
                setIsTranscribing(true);
                setTimeout(getTranscription, 3000);
            } else {
                setIsTranscribing(false);
                setAwsTranscriptionItems(
                    clearTranscriptionItems(transcription.results.items)
                );
            }
        });
    }

    if (isTranscribing) {
        return (
            <div>Transcribing your video...</div>
        );
    }

    if (isFetchingInfo) {
        return (
            <div>Fetching information...</div>
        );
    }

    return (
        <div>
            <div className="grid sm:grid-cols-2 gap-8 sm:gap-16">
                <div className="">
                    <h2 className="text-2xl mb-4 text-white/80">Transcription</h2>
                    <TranscriptionEditor 
                    awsTranscriptionItems={awsTranscriptionItems}
                    setAwsTranscriptionItems={setAwsTranscriptionItems} />

                </div>
                <div>
                    <h2 className="text-2xl mb-4 text-white/80">Result</h2>
                    <ResultVideo filename={filename}
                    transcriptionItems = {awsTranscriptionItems}
                    />
                </div>
            </div>
        </div>
    );
}
