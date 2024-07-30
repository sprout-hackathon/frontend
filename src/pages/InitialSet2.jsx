import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Dropdown from "../components/initialset/Dropdown";
import useProfileStore from "../store/useProfileStore";


const InitialSet2 = () => {
    const navigator = useNavigate();
    const [view, setView] = useState(false); 
 
    const {
        id,
        password,
        nickname,
        nationCode,
        languageCode,
        proficiency,
        hasCertification,
        certificationCode,
        workHistories,
        setId,
        setPassword,
        setNickname,
        setNationCode,
        setLanguageCode,
        setProficiency,
        setHasCertification,
        setCertificationCode,
        setWorkHistories,
        addWorkHistory,
        updateWorkHistory,
        removeWorkHistory,
      } = useProfileStore();

    console.log(nickname, nationCode,languageCode)

    // const onChangeHandler = (e, label) => {
    //     setNationCode({
    //         ...InitialData,
    //         [label]: e.target.value
    //     })
    // }

    return(
        <div className='-mb-20 h-dvh overflow-y-auto grid justify-items-center'>
            <div className="border-2 h-[80px] w-screen gird content-center">
                <div className="text-3xl font-extralight ml-6 text-gray-500"
                onClick={()=>navigator('/signup/initialset')}>
                    &lt;
                </div>
            </div>
            <div className="w-screen pl-6 mb-4">
                <h1 className='mt-24 text-xl font-bold text-black'>
                    반가워요,<br/> 서비스에 오신 걸 환영해요!
                </h1>
            </div>

            <div className="w-screen pl-9 pb-2">
                <h1 className="font-semibold">
                    국가이름
                </h1>
            </div>

            <input
                type='nickname'
                className='w-[324px] mb-4 h-[49px] grow rounded-lg border bg-gray-100 px-3 py-2 text-sm focus:outline-none'
                placeholder="닉네임을 입력해주세요"
                onChange={(e) => setNationCode(e.target.value)}
                value={nationCode}
                required
            />
            <div>
                <h1 className="font-semibold mb-2">
                    사용언어(한국어 제외)
                </h1>
                <Dropdown languageCode = {languageCode} setLanguageCode = {setLanguageCode}/>
            </div>

            <button className="mt-48 pb-8" onClick={()=>{
                navigator('/signup/initialset3')
                }}>
                <div className='w-[324px] rounded-lg h-[49px] grid content-center font-semibold bg-blue text-white hover:bg-[#3b5998]/90'>다음</div>
            </button>
        </div>
    )
}

export default InitialSet2