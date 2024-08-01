import React from "react";
import useProfileStore from "../store/useProfileStore";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { setCookie } from ".././api/Cookies";
import { jwtDecode} from "jwt-decode";
import { useNavigate } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const Login = () => {
    const navigator = useNavigate()

    const loginfetching = async (credentials) => {
        const response = await axios.post(`${BASE_URL}/api/users/login`, credentials);
        const token = response.data.accessToken
        setCookie('user', token, {path:'/'})
        return response.data;
    };

    const mutation = useMutation({
    mutationFn: loginfetching,
    onSuccess: (data) => {
        const { token } = data;
        console.log("로그인 성공 및 토큰 저장:", data);
        navigator('/')
    },
    onError: (error) => {
        console.error("로그인 실패:", error);
    },
    });

  
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
    
    const handleSubmit = (event) => {
        event.preventDefault();

        mutation.mutate({
            id: id,
            password: password,
          });
    };

return(
        <div className='-mb-20 pb-20 grid justify-items-center'>
            <h1 className='mt-[213px] mb-[29px] text-3xl font-black text-blue'>
                유니케어 Uni-Care
            </h1>
            <h5 className="w-[324px] text-xl font-extrabold">ID</h5>
            <input
            type='text'
            className='mb-[26px] w-[324px] h-[49px] grow rounded-lg border bg-gray-100 px-3 py-2 text-sm focus:outline-none'
            placeholder="아이디를 입력해주세요"
            value={id}
            onChange={(e)=>setId(e.target.value)}
            />
            <h5 className="w-[324px] text-xl font-extrabold">Password</h5>
            <input
            type='password'
            className='mb-4 w-[324px] h-[49px] grow rounded-lg border bg-gray-100 px-3 py-2 text-sm focus:outline-none'
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />

            <button
            onClick={handleSubmit}
            >
                <div className='w-[324px] mt-[30px] mb-2 rounded-lg h-[49px] grid content-center font-semibold bg-blue text-white hover:bg-[#3b5998]/90'>로그인</div>
                <div className='w-[324px] rounded-lg h-[49px] hover:bg-[#808080]/90 grid content-center font-semibold'>회원가입</div>
            </button>
        </div>
    );
};



export default Login;