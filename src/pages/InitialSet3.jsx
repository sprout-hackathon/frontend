import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useProfileStore from "../store/useProfileStore";


const InitialSet3 = () => {
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
        workDuration,
        hospitalId,
        setId,
        setPassword,
        setNickname,
        setNationCode,
        setLanguageCode,
        setProficiency,
        setHasCertification,
        setCertificationCode,
        setWorkDuration,
        setHospitalId
        } = useProfileStore();


    return(
        <div className='-mb-20 h-dvh overflow-y-auto grid justify-items-center'>
            <div className="border-2 h-[80px] w-screen gird content-center">
                <div className="text-3xl font-extralight ml-6 text-gray-500"
                onClick={()=>navigator('/signup/initial-nation')}>
                    &lt;
                </div>
            </div>
            <h1 className="text-xl font-bold mb-2">
                한국어 능숙도 정도를 체크해 주세요.
            </h1>
            <p className="text-sm text-blue">
                능숙한 정도에 따라 1~5점 중 체크해 주세요.
            </p>
    
            <div className="flex justify-between items-center mb-6">
                <span>매우 <br/> 서툴러요</span>
                <div className="flex space-x-2 px-5">
                {[1, 2, 3, 4, 5].map((level) => (
                    <button
                    key={level}
                    className={`w-8 h-8 rounded-full ${
                        proficiency === level ? 'bg-blue' : 'bg-gray-300'
                    }`}
                    onClick={() => setProficiency(level)}
                    ></button>
                ))}
                </div>
                <span>매우 <br/>능숙해요</span>
            </div>
    
            <button className=" mt-16" onClick={()=>{
                navigator('/signup/initial-certification')
                }}>
                <div className='w-[324px] rounded-lg h-[49px] grid content-center font-semibold bg-blue text-white hover:bg-[#3b5998]/90'>다음</div>
            </button>
        </div>
    )
}

export default InitialSet3