import React from "react";

const Login = () => {

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
            />
            <h5 className="w-[324px] text-xl font-extrabold">Password</h5>
            <input
            type='text'
            className='mb-4 w-[324px] h-[49px] grow rounded-lg border bg-gray-100 px-3 py-2 text-sm focus:outline-none'
            placeholder="비밀번호를 입력해주세요"
            />

            <button>
                <div className='w-[324px] mt-[30px] mb-2 rounded-lg h-[49px] grid content-center font-semibold bg-blue text-white hover:bg-[#3b5998]/90'>로그인</div>
                <div className='w-[324px] rounded-lg h-[49px] hover:bg-[#808080]/90 grid content-center font-semibold'>회원가입</div>
            </button>
        </div>
    );
};


export default Login;