import React from "react";
import { useNavigate } from "react-router-dom";
import useProfileStore from "../store/useProfileStore";



const InitialSet5 = () => {
    const navigator = useNavigate()
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
        <div className='-mb-20 h-dvh grid justify-items-center'>
            <div className="border-2 h-[80px] w-screen gird content-center">
                <div className="text-3xl font-extralight ml-6 text-gray-500"
                onClick={()=>navigator('/signup/initial-certification')}>
                    &lt;
                </div>
            </div>  
            <h1 className="text-2xl font-semibold">
                요양보호사 자격증의 <br/>인증번호를 입력해주세요.
            </h1>
            <p className="text-sm text-blue">
                 승인 후 요양보호사 인증 배지를 달아드려요.
            </p>
            <div className="w-screen pl-9 grid content-center">
                <h1 className="font-bold">
                    인증번호
                </h1>
            </div>
            <input
                type='nickname'
                className='w-[324px] h-[49px] grow rounded-lg border bg-gray-100 px-3 py-2 text-sm focus:outline-none'
                placeholder="인증번호를 입력해주세요"
                onChange={(e) => setCertificationCode(e.target.value)}
                value={certificationCode}
                required
            />

            <button className="mt-40 mb-4" onClick={()=>{
                navigator('/signup/initial-workhistory')
                }}>
                <div className='w-[324px] rounded-lg h-[49px] grid content-center font-semibold bg-blue text-white hover:bg-[#3b5998]/90'>다음</div>
            </button>
        </div>
    )

}

export default InitialSet5