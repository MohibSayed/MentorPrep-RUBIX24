import React, { useState, useRef } from 'react';
import RecordRTC from 'recordrtc';

const ScreenRecorder = () => {
    const [recordingVideo, setRecordingVideo] = useState(false);
    const [recordingAudio, setRecordingAudio] = useState(false);
    const recordRTCVideoRef = useRef(null);
    const recordRTCAudioRef = useRef(null);

    const startRecordingVideo = async () => {
        try {
            const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
            const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });

            const combinedStream = new MediaStream();
            combinedStream.addTrack(screenStream.getVideoTracks()[0]);
            combinedStream.addTrack(audioStream.getAudioTracks()[0]);

            const recorder = RecordRTC(combinedStream, {
                type: 'video',
                mimeType: 'video/webm',
            });

            recorder.startRecording();
            setRecordingVideo(true);

            recordRTCVideoRef.current = recorder;
        } catch (error) {
            console.error('Error accessing media devices:', error);
        }
    };

    const stopRecordingVideoAndDownload = () => {
        if (recordRTCVideoRef.current) {
            recordRTCVideoRef.current.stopRecording(() => {
                const blob = recordRTCVideoRef.current.getBlob();

                // Create a download link for the video
                const videoDownloadLink = document.createElement('a');
                videoDownloadLink.href = URL.createObjectURL(blob);
                videoDownloadLink.download = 'screen-recording.webm';
                document.body.appendChild(videoDownloadLink);
                videoDownloadLink.click();
                document.body.removeChild(videoDownloadLink);

                setRecordingVideo(false);
            });
        }
    };

    const startRecordingAudio = async () => {
        try {
            const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });

            const recorder = RecordRTC(audioStream, {
                type: 'audio',
                mimeType: 'audio/wav',
            });

            recorder.startRecording();
            setRecordingAudio(true);

            recordRTCAudioRef.current = recorder;
        } catch (error) {
            console.error('Error accessing media devices:', error);
        }
    };

    const stopRecordingAudioAndDownload = () => {
        if (recordRTCAudioRef.current) {
            recordRTCAudioRef.current.stopRecording(() => {
                const blob = recordRTCAudioRef.current.getBlob();

                // Create a download link for the audio
                const audioDownloadLink = document.createElement('a');
                audioDownloadLink.href = URL.createObjectURL(blob);
                audioDownloadLink.download = 'audio-recording.wav';
                document.body.appendChild(audioDownloadLink);
                audioDownloadLink.click();
                document.body.removeChild(audioDownloadLink);

                setRecordingAudio(false);
            });
        }
    };

    return (
        <div>
            <button onClick={startRecordingVideo} disabled={recordingVideo || recordingAudio}>
                Start Recording Video
            </button>
            <button onClick={stopRecordingVideoAndDownload} disabled={!recordingVideo}>
                Stop Recording and Download Video
            </button>
            <br />
            <button onClick={startRecordingAudio} disabled={recordingVideo || recordingAudio}>
                Start Recording Audio
            </button>
            <button onClick={stopRecordingAudioAndDownload} disabled={!recordingAudio}>
                Stop Recording and Download Audio
            </button>
        </div>
    );
};

export default ScreenRecorder;