import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useProfileStore from "../store/useProfileStore";

const InitialSet = () => {
    const navigator = useNavigate();
    
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

    console.log(nickname, nationCode)

    return(
        <div className='-mb-20 h-dvh overflow-y-auto grid justify-items-center'>
            <div className="border-2 h-[80px] w-screen gird content-center">
                <div className="text-3xl font-extralight ml-6 text-gray-500"
                onClick={()=>navigator('/signup')}>
                    &lt;
                </div>
            </div>
            <div className="w-screen pl-6">
                <h1 className='mt-24 text-xl font-bold text-black'>
                    반가워요,<br/> 서비스에 오신 걸 환영해요!
                </h1>
            </div>
            <h1 className='mt-5 mb-[29px] text-sm font-normal text-gray-500'>
                    닉네임을 입력해주세요.
            </h1>

            <div className="w-screen pl-9 pb-2">
                <h1 className="font-bold">
                    닉네임
                </h1>
            </div>

            <input
                type='nickname'
                className='w-[324px] h-[49px] grow rounded-lg border bg-gray-100 px-3 py-2 text-sm focus:outline-none'
                placeholder="닉네임을 입력해주세요"
                onChange={(e) => setNickname(e.target.value)}
                value={nickname}
                required
            />
            <button className="mt-48 mb-8" onClick={()=>{
                navigator('/signup/Initialset2')
                }}>
                <div className='w-[324px] rounded-lg h-[49px] grid content-center font-semibold bg-blue text-white hover:bg-[#3b5998]/90'>다음</div>
            </button>
        </div>
    )
}

export default InitialSet