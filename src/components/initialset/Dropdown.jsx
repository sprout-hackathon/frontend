import React, { useState } from "react";

export default function Dropdown({languageCode, setLanguageCode}){
    const textOptions = [
        "汉语",
        "English",
        "Español",
        "हिन्दी",
        "العربية",
        "Deutsch",
        "한국어"
    ];

    const [searchItem, setSearchItem] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [item, setItem] = useState('All');
    // const onChangeSelect = ();

    return (
        <div className=" w-100% pd-[20px]">
            <div className="w-[324px] py-[14px] px-[10px] mt-0 mb-[5px] border border-solid border-[var(--shadow)] rounded-[5px] bg-[var(--white)] leading-[15px] cursor-pointer relative"
                onClick={()=>{isOpen ? setIsOpen(false) : setIsOpen(true)}}
            >
                {languageCode || "Select a language"}
                <div className="absolute top-[14px] left-[calc(100%-22px)] text-[0.6em]">▼</div>
            </div>
            {isOpen ?  
                <div class="w-[324px] pb-[10px] border border-solid border-[var(--shadow)] rounded-[5px] bg-[var(--white)] leading-[15px] relative shadow-[0_1px_1px_0_var(--shadow),0_1px_5px_0_var(--grey-light)]">
                    <div class="m-[5px] absolute top-[8px] left-[5px] w-[12px]"></div>
                    <input class="w-[324px] ml-[20px] py-[10px] pr-[10px] pb-[5px] rounded-[5px] bg-[var(--white)] leading-[15px]"
                        type="text"
                        placeholder="사용언어를 선택해주세요"
                        onChange={(e)=>{
                            setSearchItem(e.target.value);
                        }}
               
                    ></input><hr/>
                    
                    {textOptions.filter((data)=> {
                        if(searchItem == ''){
                            return data
                        }else if(data.toLowerCase().includes(searchItem.toLowerCase())){
                            return data
                        }
                    }).map(data => {
                        return <div class="w-full p-[10px] bg-[var(--white)] leading-[15px] cursor-pointer hover:bg-[var(--white-second)]" onClick={()=>{setLanguageCode(data); setIsOpen(false); setSearchItem("");}}>{data}</div>;
                    })
                
                    }
                    
                </div>
            :''}
        
        </div>
    );
}
