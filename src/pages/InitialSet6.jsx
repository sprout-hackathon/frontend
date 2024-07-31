import React from "react"
import { useNavigate } from "react-router-dom";
import useProfileStore from "../store/useProfileStore";
import Dropdown from "../components/initialset/Dropdown";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";


const InitialSet6 = () => {
    const navigator = useNavigate();
    const queryClient = useQueryClient();
    const accessToken = "abcd"

    // const fetchHospitals = async (keyword) => {
    //     const response = await axios.get('http://3.107.17.104:8080/api/hospitals', {
    //       headers: {
    //         Accept: '*/*',  // 서버에서 모든 형식을 허용하도록 설정
    //       },
    //       params: {
    //         keyword: keyword,  // 한글 키워드를 적절히 URL 인코딩
    //       },
    //     });
    //     console.log(response.data)
    //     return response.data;
    //   };
    // const keyword = "병원";  // 검색할 키워드
    
    // const { data, isError, isLoading, error } = useQuery({
    //     queryKey: ['hospitals', keyword],
    //     queryFn: async() => fetchHospitals(keyword),  // queryFn
    //     });
    
    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }
     
    // if (isError) {
    //     return <div>Error: {error.message}</div>;
    // }


    const textOptions = [
        "서울 요양",
        "부산 요양",
        "경희 요양",
        "연세 요양",
        "경기 요양"
    ]

    
    

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

    console.log(id, password, nickname, nationCode, languageCode, proficiency,hasCertification, certificationCode, workDuration, hospitalId )

    return(
        
        <div className='-mb-20 h-dvh grid justify-items-center'>
            <div className="border-2 h-[80px] w-screen gird content-center">
                <div className="text-3xl font-extralight ml-6 text-gray-500"
                onClick={()=>navigator('/signup/initial-nation')}>
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

            <button className="mt-16" onClick={()=>{
                navigator('/complete-page')
                }}>
                <div className='w-[324px] rounded-lg h-[49px] grid content-center font-semibold bg-gray-200 text-black hover:bg-blue-light/90'>건너뛰기</div>
            </button>

            <button className="mt-3 pb-8" onClick={()=>{
                navigator('/complete-page')
                }}>
                <div className='w-[324px] rounded-lg h-[49px] grid content-center font-semibold bg-blue text-white hover:bg-[#3b5998]/90'>다음</div>
            </button>
            </div>

        </div>
    )

}


export default InitialSet6;