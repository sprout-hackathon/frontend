import React, { useState, useCallback, useRef } from "react";

const AudioRecorder = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState(null);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
  
    const startRecording = () => {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          const mediaRecorder = new MediaRecorder(stream);
          mediaRecorderRef.current = mediaRecorder;
  
          mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
              audioChunksRef.current.push(event.data);
            }
          };
  
          mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
            const newAudioUrl = URL.createObjectURL(audioBlob);
            setAudioUrl(newAudioUrl);
            audioChunksRef.current = []; // Clear the chunks for next recording
          };
  
          mediaRecorder.start();
          setIsRecording(true);
        })
        .catch(err => {
          console.error('Error accessing microphone: ', err);
        });
    };
  
    const stopRecording = () => {
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop();
      }
      setIsRecording(false);
    };
  
    return (
      <div>
        <button onClick={isRecording ? stopRecording : startRecording}>
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </button>
        {audioUrl && (
          <div>
            <h3>Recorded Audio:</h3>
            <audio controls src={audioUrl} />
          </div>
        )}
      </div>
    );
  };

export default AudioRecorder;

