import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import useProfileStore from "../store/useProfileStore";
import Dropdown from "../components/initialset/Dropdown";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const keyword = "";  // 검색할 키워드



const InitialSet6 = () => {
    const navigator = useNavigate();
    const [data, setData] = useState([]);

    const fetchHospitals = async (keyword) => {
        const response = await axios.get(`${BASE_URL}/api/hospitals`, {
          headers: {
            Accept: '*/*',  // 서버에서 모든 형식을 허용하도록 설정
          },
          params: {
            keyword: keyword,  // 한글 키워드를 적절히 URL 인코딩
          },
        });
        setData(response.data)
      };
    
    const {isError, isLoading, error } = useQuery({
    queryKey: ['hospitals'],
    queryFn: async() => fetchHospitals(keyword),  // queryFn
    });

    const textOptions = {
        name : data.map((e) => e.name),
        id : data.map((e) => e.hospitalId)
    }

    const registerfetching = async (credentials) => {
        const response = await axios.post(`${BASE_URL}/api/users/register`, credentials);
        return response.data;
    };

    const mutation = useMutation({
    mutationFn: registerfetching,
    onSuccess: (data) => {
        console.log("로그인 성공 및 토큰 저장:", data);
    },
    onError: (error) => {
        console.error("로그인 실패:", error);
    },
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        mutation.mutate({
            "id": id,
            "password": password,
            "nickname": nickname,
            "nationCode": nationCode,
            "languageCode": languageCode,
            "proficiency": proficiency,
            "hasCertification": true,
            "certificationCode": certificationCode,
            "workHistories": [
                {
                    "workDuration": workDuration,
                    "hospitalId": hospitalId,
                }
            ]
        });
        navigator('/complete-page')
    };
    const handleSubmitskip = (event) => {
        event.preventDefault();

        mutation.mutate({
            "id": id,
            "password": password,
            "nickname": nickname,
            "nationCode": nationCode,
            "languageCode": languageCode,
            "proficiency": proficiency,
            "hasCertification": true,
            "certificationCode": certificationCode,
            "workHistories": []
        });
        navigator('/complete-page')
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

    return(
        
        <div className='-mb-20 h-dvh grid justify-items-center'>
            <div className="border-2 h-[80px] w-screen gird content-center">
                <div className="text-3xl font-extralight ml-6 text-gray-500"
                onClick={()=>navigator('/signup/initial-certification-number')}>
                    &lt;
                </div>
            </div> 
            <p className="text-2xl mb-6 px-14 font-bold">
            근무 이력이 있으시다면,<br/>관련 정보를 입력해주세요.
            </p>
            <div className="w-screen pl-9 grid content-center">
                <h1 className="font-bold mb-1">
                    병원 검색하기
                </h1>
                <Dropdown textOptions={textOptions} value={hospitalId} setValue={setHospitalId} placeholder={"병원을 검색해주세요"} />
            </div>
            <div className="w-screen pl-9 grid content-center">
                <h1 className="font-bold mb-1">
                    근무 기간
                </h1>
                <input
                type='nickname'
                className='w-[324px] mb-4 h-[49px] grow rounded-lg border bg-gray-100 px-3 py-2 text-sm focus:outline-none'
                placeholder="근무기간을 입력해주세요"
                onChange={(e) => setWorkDuration(e.target.value)}
                value={workDuration}
                required
            />

            <button className="mt-16" onClick={handleSubmitskip}>
                <div className='w-[324px] rounded-lg h-[49px] grid content-center font-semibold bg-gray-200 text-black hover:bg-blue-light/90'>건너뛰기</div>
            </button>

            <button className="mt-3 pb-3" onClick={handleSubmit}>
                <div className='w-[324px] rounded-lg h-[49px] grid content-center font-semibold bg-blue text-white hover:bg-[#3b5998]/90'>다음</div>
            </button>
            </div>

        </div>
    )

}


export default InitialSet6;