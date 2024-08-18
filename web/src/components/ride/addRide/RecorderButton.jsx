import React, { useState, useRef } from 'react';

import { MdKeyboardVoice, MdSettingsVoice } from "react-icons/md";

const RecorderButton = () => {
    const [recording, setRecording] = useState(false);
    const mediaRecorderRef = useRef(null);
    const chunksRef = useRef([]);

    const handleClick = (event) => {
        event.stopPropagation();
        // e.preventDefault()

        if (recording) {
            stopRecording();
        } else {
            startRecording();
        }
    };

    const handleLongPress = () => {
        if (!recording) {
            startRecording();
        }
    };

    const startRecording = () => {
        setRecording(true);

        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
            mediaRecorderRef.current = new MediaRecorder(stream);
            mediaRecorderRef.current.ondataavailable = (event) => {
                chunksRef.current.push(event.data);
            };

            mediaRecorderRef.current.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: 'audio/wav' });
                sendRecordingToServer(blob);
                chunksRef.current = [];
            };

            mediaRecorderRef.current.start();
        });
    };

    const stopRecording = () => {
        setRecording(false);
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
        }
    };

    const sendRecordingToServer = (blob) => {
        const formData = new FormData();
        formData.append('audio', blob, 'recording.wav');
        fetch('/upload', {
        method: 'POST',
        body: formData,
        }).then((response) => {
        if (response.ok) {
            alert('Recording uploaded successfully!');
        } else {
            alert('Failed to upload recording.');
        }
        });
    };

  return (
    <div 
    onMouseDown={handleClick}
    onTouchStart={handleLongPress}
    onMouseUp={handleClick}
    onTouchEnd={handleClick}
    >
        {
            recording ?
            <MdSettingsVoice color={'red'} />
            :
            <MdKeyboardVoice color={'green'} />
        }
    </div>
  );
};

export default RecorderButton;
