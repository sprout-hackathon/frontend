import { useNavigate } from 'react-router-dom';
import leftChevronIcon from '../assets/icons/left-chevron.svg';
import sendIcon from '../assets/icons/send-gray.svg';
import ChatbotMessage from '../components/chatbot/ChatbotMessage';
import { useEffect, useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import UserMessage from '../components/chatbot/UserMessage';
import { postCreateChatRoom, postSendMessage } from '../api/chats';
import useAuth from '../hooks/useAuth';

const firstMessage = `반가워요!
저는 인공지능 표준어 변환 봇이에요.
요양보호사 활동 중 음성으로 어르신의 목소리를 저에게 보내주면, 이해하기 쉽도록 표준어로 바꿔드려요.`;


const ChatVoice = () => {
    const [messageList, setMessageList] = useState([]);
    const chatRoomId = useRef();
    const navigate = useNavigate();
    const [isRecording, setIsRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState(null);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const startTimeRef = useRef(new Date().getTime());
    const [recordingDuration, setRecordingDuration] = useState('');
  

  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const { mutate: createChatroom, createIsPending } = useMutation({
    mutationFn: (title) => postCreateChatRoom(title),
    onSuccess: (data) => {
      chatRoomId.current = data.chatRoomId;
      setMessageList((list) => [
        ...list,
        { content: data.content, isBot: data.bot },
      ]);
    },
    onError: (err) => console.log(err),
  });

  const { mutate: sendMessage, sendIsPending } = useMutation({
    mutationFn: (content) => postSendMessage(chatRoomId.current, content),
    onSuccess: (data) => {
      setMessageList((list) => [
        ...list,
        { content: data.content, isBot: data.bot },
      ]);
    },
  });

  const handleSendMessage = (content) => {
    setMessageList((list) => [...list, { duration:recordingDuration , isBot: false }]);
    if (messageList.length === 0) {
      createChatroom(content); // 채팅방 생성
    } else {
      sendMessage(content); // 채팅 메세지 전송
    }
  };

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
            console.log(newAudioUrl)
            const endTime = new Date().getTime();
            const duration = endTime - startTimeRef.current;
            // const minutes = Math.floor(duration / 60000);
            const seconds = Math.floor((duration % 60000) / 1000);
            setRecordingDuration(`00:0${seconds}`);

            const sound = new File([newAudioUrl], "soundBlob", { lastModified: new Date().getTime(), type: "audio" });
            setAudioUrl(newAudioUrl);
       
            audioChunksRef.current = []; // Clear the chunks for next recording
            setRecordingDuration.current = []
            startTimeRef.current = new Date().getTime()
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

    console.log(recordingDuration)

  return (
    <div className='flex h-dvh flex-col'>
      <div className='flex w-full flex-row border-b px-5 py-4'>
        <button onClick={() => navigate(-1)}>
          <img src={leftChevronIcon} alt='back icon' />
        </button>
        <h1 className='mx-auto text-lg font-semibold'>음성으로 이해하기</h1>
      </div>
      <div className='flex grow flex-col gap-3 overflow-y-auto p-4'>
        <ChatbotMessage key={0} text={firstMessage} />
        {messageList.map((msg) =>
          msg.isBot ? (
            <ChatbotMessage key={msg.content} text={msg.content} />
          ) : (
            <UserMessage key={msg.duration} text={msg.duration} />
          )
        )}
        {(createIsPending || sendIsPending) && (
          <ChatbotMessage key={-1} text={'...'} />
        )}
      </div>
      <div className='flex flex-row border-y p-3 bg-gray-100 rounded-3xl'>

        <div className='grid justify-items-center w-full space-y-3 bg-gray-100 rounded-3xl'>
                <div>
                    <h3 className='font-semibold mt-2'>어르신 목소리를 들려주세요</h3>
                </div>
                <div className='gird justify-center content-center space-x-4 space-y-3'>
                    {audioUrl && (
                        <audio className='w-[341px] bg-blue rounded-3xl p-2' controls src={audioUrl} />
                    )}
                    {audioUrl&&(
                            <button onClick={() => {setAudioUrl(null); startTimeRef.current=new Date().getTime();}}>
                                <div className='border-3 font-semibold text-gray-500'>
                                    다시 녹음해보기  
                                </div>
                            </button> 
                        )}
                    <button onClick={isRecording ? stopRecording : startRecording}>
                    {isRecording ? 
                    <div>
                        <h3 className='font-semibold mb-3'>녹음중...</h3>
                        <div className='w-[69px] h-[69px] border-2 bg-gray-300 rounded-full grid justify-center content-center'>
                            <div className='w-[35px] h-[35px] bg-blue'></div>
                        </div>

                    </div>
                    : 
                    <div className=' flex space-x-8'>
                        <div className='w-[69px] h-[69px] border-2 bg-gray-300 rounded-full grid justify-center content-center'>
                            <div className='w-[49px] h-[49px] rounded-full bg-red'></div>
                        </div>
                    </div>
                    }
                    </button>
                    {audioUrl&&(
                        <button onClick={() => handleSendMessage(audioUrl)}>
                            <div className='font-semibold text-gray-500'>
                                챗봇에게 보내기
                            </div>
                        </button> 
                    )}

                </div>
        </div>
      </div>
      
    </div>
  );
};

export default ChatVoice;