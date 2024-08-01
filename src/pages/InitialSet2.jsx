import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Dropdown from "../components/initialset/Dropdown";
import useProfileStore from "../store/useProfileStore";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;


const InitialSet2 = () => {
    const navigator = useNavigate();
    const [lang, setLang] = useState([]);
    const [nation, setNation] = useState([])

    const fetchNations = async() => {
        const response = await axios.get(`${BASE_URL}/api/nations`, {
          headers: {
            Accept: '*/*',  // 서버에서 모든 형식을 허용하도록 설정
          },
        });
        setNation(response.data)
      };

    const _ = useQuery({
        queryKey: ['nation'],
        queryFn: async() => fetchNations(),  // queryFn
    });

    const textOptionsNation = {
        name : nation.map(e => e.nationOriginName),
        id : nation.map(e => e.nationCode),
    };
 



    
    const fetchLanguage = async() => {
        const response = await axios.get(`${BASE_URL}/api/nations/languages`, {
          headers: {
            Accept: '*/*',  // 서버에서 모든 형식을 허용하도록 설정
          },
        });
        setLang(response.data)
      };

    const __ = useQuery({
        queryKey: ['lang'],
        queryFn: async() => fetchLanguage(),  // queryFn
    });



    const textOptionsLang = {
        name : lang.map(e => e.languageOriginName),
        id : lang.map(e => e.languageCode),
    };
 
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

    console.log(nationCode, languageCode)
    return(
        <div className='-mb-20 h-dvh overflow-y-auto grid justify-items-center'>
            <div className="border-2 h-[80px] w-screen gird content-center">
                <div className="text-3xl font-extralight ml-6 text-gray-500"
                onClick={()=>navigator('/signup/initial-nickname')}>
                    &lt;
                </div>
            </div>
            <div className="w-screen pl-6 mb-4">
                <h1 className='mt-20 text-xl font-bold text-black'>
                    반가워요,<br/> 서비스에 오신 걸 환영해요!
                </h1>
            </div>

            <div className="w-screen pl-9">
                <h1 className="font-semibold">
                    국가이름
                </h1>
            </div>
            <Dropdown textOptions = {textOptionsNation} value = {nationCode} setValue = {setNationCode} placeholder={"국적을 선택해주세요."}/>
            <div className="mb-10">
                <h1 className="font-semibold mb-2">
                    사용언어(한국어 제외)
                </h1>
                <Dropdown textOptions = {textOptionsLang} value = {languageCode} setValue = {setLanguageCode} placeholder={"사용하시는 언어를 선택해주세요."}/>
            </div>

            <button className="mt-18 pb-4" onClick={()=>{
                navigator('/signup/initial-prof')
                }}>
                <div className='w-[324px] rounded-lg h-[49px] grid content-center font-semibold bg-blue text-white hover:bg-[#3b5998]/90'>다음</div>
            </button>
        </div>
    )
}

export default InitialSet2