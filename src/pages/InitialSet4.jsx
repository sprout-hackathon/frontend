import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useProfileStore from "../store/useProfileStore";

const InitialSet4 = () => {
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

    console.log(hasCertification)

    return(
        <div className='-mb-20 h-dvh grid justify-items-center'>
            <div className="border-2 h-[80px] w-screen gird content-center">
                <div className="text-3xl font-extralight ml-6 text-gray-500"
                onClick={()=>navigator('/signup/initial-nation')}>
                    &lt;
                </div>
            </div>  
            <p className="text-2xl mb-6 px-14 font-bold">
            외국인 요양보호사 자격증을 가지고 계신가요?
            </p>

            <div className="w-[324px] flex content-center space-x-5 mb-6">
                <div
                    className={`px-4 py-2 border-2 w-full h-14 rounded-xl grid justify-center content-center ${
                    hasCertification === true ? 'bg-blue-light' : 'bg-white'
                    }`}
                    onClick={() => setHasCertification(true)}
                >네</div>
                <div
                    className={`px-4 py-2 border-2 w-full h-14 rounded-xl grid justify-center content-center ${
                        hasCertification === false ? 'bg-blue-light' : 'bg-white'
                    }`}
                    onClick={() => setHasCertification(false)}
                >
                    아니요
                </div>
            </div>

            <button className=" mb-8" onClick={()=>{
                if (hasCertification === true){
                    navigator('/signup/initial-certification-number')
                }else {
                    navigator('/complete-page')
                }
                }}>
                <div className='w-[324px] rounded-lg h-[49px] grid content-center font-semibold bg-blue text-white hover:bg-[#3b5998]/90'>다음</div>
            </button>

    </div>
    )
}

export default InitialSet4