import mainLogo from '../assets/icons/main-intro-logo.png'

const Intro = () => {
    return (
        <div className='border-4 grid justify-items-center w-[378px] h-[812px]'>
            <div className="mt-[268px] h-[19px] grid justify-items-center">
                <h1 className='text-base font-semibold text-blue'>내 곁의 요양보호사 도우미</h1>
                <h1 className='text-[32px] font-black text-blue'>서비스명</h1>
                <img src={mainLogo} alt='main logo'/>
            </div>
        </div>
    )
}

export default Intro;