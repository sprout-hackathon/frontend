import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();
    const [InitialData, setInitialData] = useState({
        loginId : '',
        password : '',
    })

    const onChangeHandler = (e, label) => {
        setInitialData({
            ...InitialData,
            [label]: e.target.value
        })
    }

    return(
        <div className='border-2 h-dvh -mb-20 overflow-y-auto grid justify-items-center'>
            <div className="w-[324px] mt-[59px] mb-[138px]">
                <h1 className='text-3xl font-bold text-black'>
                    회원가입
                </h1>
            </div>
            <h5 className=" w-[324px] h-min text-xl font-extrabold">ID</h5>
            <input
            type='loginID'
            className='mb-[26px] w-[324px] h-[49px] grow rounded-lg border bg-gray-100 px-3 py-2 text-sm focus:outline-none'
            placeholder="아이디를 입력해주세요"
            onChange={e => onChangeHandler(e, 'loginId')}
            value={InitialData.loginId}
            required
            />
            <h5 className=" w-[324px] h-min text-xl font-extrabold">Password</h5>
            <input
            type='Password'
            onChange={e => onChangeHandler(e, 'password')}
            value={InitialData.password}
            className='mb-4 w-[324px] h-[49px] grow rounded-lg border bg-gray-100 px-3 py-2 text-sm focus:outline-none'
            placeholder="비밀번호를 입력해주세요"
            />

            <button className="mt-20">
                <div className='w-[324px] rounded-lg h-[49px] grid content-center font-semibold bg-blue text-white hover:bg-[#3b5998]/90'>다음</div>
            </button>
            <div className='w-[324px]  rounded-lg h-[49px] grid justify-items-center content-center'>
                <p className=" group-hover:font-extrabold" 
                onClick={()=>{
                    navigate('/login')
                }}>
                    이미 회원이신가요? 로그인하기
                </p>
            </div>
        </div>
    )
}

export default Signup