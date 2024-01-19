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

  const [recording, setRecording] = useState(false);
  const recordRTCRef = useRef(null);

  const startRecording = async () => {
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
      setRecording(true);

      recordRTCRef.current = recorder;
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  };
  const stopRecording = () => {
    if (recordRTCRef.current) {
      recordRTCRef.current.stopRecording(() => {
        const blob = recordRTCRef.current.getBlob();

        // Create a download link
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = "screen-recording.webm";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        setRecording(false);
      });
    }
  };

  return (
    <div className="room-page">
      {/* {screenChange && (<h1>Mentor Prep - Start your session!</h1>)} */}
      <div className="video-container" ref={containerRef}></div>
      <button onClick={startRecording} disabled={recording}>
                Start Recording
            </button>
            <button onClick={stopRecording} disabled={!recording}>
                Stop Recording and Download
            </button>
    </div>
  );
};

export default Video;
