import React from "react";
import serviceIcon from "../../src/assets/icons/serviceIcon.png"
import { useNavigate } from "react-router-dom";

const Final = () => {
    const navigator = useNavigate()

    return(
        <div className='-mb-20 h-dvh grid justify-items-center'>
            <div className="h-[200px] w-screen gird content-center">
                
            </div>
            <h1 class="text-l text-blue font-normal">내 곁의 요양보호사 도우미</h1>
            <h2 class="text-2xl text-blue font-bold">유니케어 Uni-Care</h2>
            <div class="mb-3">
                <img src={serviceIcon} alt="Service Icon" class="mx-auto mb-4 w-36 h-36" />
            </div>
            <p class="text-gray-800 text-xl mb-3">반가워요!<br/>서비스에 오신 걸 환영해요.</p>
            <button className="mt-3 pb-5" onClick={()=>{
                navigator('/login')
                }}>
                <div className='w-[324px] rounded-lg h-[49px] grid content-center font-semibold bg-blue text-white hover:bg-[#3b5998]/90'>메인페이지로 이동하기</div>
            </button>
        </div>


    )
}

export default Final;