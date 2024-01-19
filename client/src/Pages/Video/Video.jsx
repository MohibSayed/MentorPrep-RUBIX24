import React, { useState, useRef, useEffect } from "react";
import RecordRTC from "recordrtc";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import "./Video.css";
const Video = () => {
  const { roomId } = useParams();
  const containerRef = useRef(null);
  // const [screenChange, setScreenChange] = useState(false);
  useEffect(() => {
    const myMeeting = async () => {
      const appID = 1897934674;
      const serverSecret = "e428acd59fb530b6450af6997631931d";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        "Username"
      );

      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      //   setScreenChange(true);
      // start the call
      zp.joinRoom({
        container: containerRef.current,
        userName: "Username",
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
      });
    };

    myMeeting();
  }, [roomId]);

  const [recordingVideo, setRecordingVideo] = useState(false);
  const [recordingAudio, setRecordingAudio] = useState(false);
  const recordRTCVideoRef = useRef(null);
  const recordRTCAudioRef = useRef(null);

  const startRecordingVideo = async () => {
    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      const audioStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      const combinedStream = new MediaStream();
      combinedStream.addTrack(screenStream.getVideoTracks()[0]);
      combinedStream.addTrack(audioStream.getAudioTracks()[0]);

      const recorder = RecordRTC(combinedStream, {
        type: "video",
        mimeType: "video/webm",
      });

      recorder.startRecording();
      setRecordingVideo(true);

      recordRTCVideoRef.current = recorder;
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  };

  const stopRecordingVideoAndDownload = () => {
    if (recordRTCVideoRef.current) {
      recordRTCVideoRef.current.stopRecording(() => {
        const blob = recordRTCVideoRef.current.getBlob();

        // Create a download link for the video
        const videoDownloadLink = document.createElement("a");
        videoDownloadLink.href = URL.createObjectURL(blob);
        videoDownloadLink.download = "screen-recording.webm";
        document.body.appendChild(videoDownloadLink);
        videoDownloadLink.click();
        document.body.removeChild(videoDownloadLink);

        setRecordingVideo(false);
      });
    }
  };

  const startRecordingAudio = async () => {
    try {
      const audioStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      const recorder = RecordRTC(audioStream, {
        type: "audio",
        mimeType: "audio/wav",
      });

      recorder.startRecording();
      setRecordingAudio(true);

      recordRTCAudioRef.current = recorder;
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  };
  // https://github.com/MohibSayed/MentorPrep-RUBIX24/blob/798deec737e4bdf063c3365fd9dd6809034abc3b/client/src/Assets/logo.png
  const stopRecordingAudioAndDownload = () => {
    if (recordRTCAudioRef.current) {
      recordRTCAudioRef.current.stopRecording(async () => {
        const blob = recordRTCAudioRef.current.getBlob();

        // Create a download link for the audio
        const audioDownloadLink = document.createElement("a");
        audioDownloadLink.href = URL.createObjectURL(blob);
        audioDownloadLink.download = "audio-recording.wav";
        document.body.appendChild(audioDownloadLink);
        audioDownloadLink.click();
        document.body.removeChild(audioDownloadLink);
        console.log(audioDownloadLink.href);
        setRecordingAudio(false);

        const resp = await fetch("https://api.symbl.ai/oauth2/token:generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "application",
            appId:
              "3879654f366d3270675371516136655541636f4a587931465749745346676233",
            appSecret:
              "513268714b416573326350765453426631395a387769427a363277634974765f46434b726c387a32626c6f6a733470586756444769784c444d585f352d615844",
          }),
        });
        const data = resp.json();
        console.log(data)
        const accessToken = data.accessToken;
        const resp2 = await fetch("https://api.symbl.ai/oauth2/token:generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "application",
            appId:
              "3879654f366d3270675371516136655541636f4a587931465749745346676233",
            appSecret:
              "513268714b416573326350765453426631395a387769427a363277634974765f46434b726c387a32626c6f6a733470586756444769784c444d585f352d615844",
          }),
        });
      });
    }
  };
  return (
    <div className="room-page">
      {/* {screenChange && (<h1>Mentor Prep - Start your session!</h1>)} */}
      <div className="video-container" ref={containerRef}></div>
      <button
        onClick={startRecordingVideo}
        disabled={recordingVideo || recordingAudio}
      >
        Start Recording Video
      </button>
      <button
        onClick={stopRecordingVideoAndDownload}
        disabled={!recordingVideo}
      >
        Stop Recording and Download Video
      </button>
      <br />
      <button
        onClick={startRecordingAudio}
        disabled={recordingVideo || recordingAudio}
      >
        Start Recording Audio
      </button>
      <button
        onClick={stopRecordingAudioAndDownload}
        disabled={!recordingAudio}
      >
        Stop Recording and Download Audio
      </button>
    </div>
  );
};

export default Video;
