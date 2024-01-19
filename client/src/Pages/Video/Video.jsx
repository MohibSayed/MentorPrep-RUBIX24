import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import './Video.css';
const Video = () => {
    const { roomId } = useParams();
    const containerRef = useRef(null);
    const email = localStorage.getItem("email");

    useEffect(() => {
        const myMeeting = async () => {
            const appID = 1897934674;
            const serverSecret = "e428acd59fb530b6450af6997631931d";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Hamza");

            // Create instance object from Kit Token.
            const zp = ZegoUIKitPrebuilt.create(kitToken);
            // start the call
            zp.joinRoom({
                container: containerRef.current,
                userName: {email},
                scenario: {
                    mode: ZegoUIKitPrebuilt.VideoConference,
                },
            });
        };

        myMeeting();
    }, [roomId]);

    return (
        <div className='room-page'>
            <div ref={containerRef}></div>
        </div>
    );
}

export default Video;