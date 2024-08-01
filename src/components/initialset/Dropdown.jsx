import React, { useState } from "react";
import searchicon from "../../assets/icons/search.png";

export default function Dropdown({textOptions, value, setValue, placeholder}){

    const [searchItem, setSearchItem] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [item, setItem] = useState('All');
    
    return (
        <div className=" w-100% pd-[20px]">
            <div className="w-[324px] py-[14px] px-[10px] mt-0 mb-[5px] border border-solid border-[var(--shadow)] rounded-[5px] bg-[var(--white)] leading-[15px] cursor-pointer relative"
                onClick={()=>{isOpen ? setIsOpen(false) : setIsOpen(true)}}
            >
                {item || placeholder}
                <div className="absolute top-[14px] left-[calc(100%-22px)] text-[0.6em]">▼</div>
            </div>
            {isOpen ?  
                <div className="w-[324px] pb-[10px] border border-solid border-[var(--shadow)] rounded-[5px] bg-[var(--white)] leading-[15px] relative shadow-[0_1px_1px_0_var(--shadow),0_1px_5px_0_var(--grey-light)]">
                    <div className="m-[5px] absolute top-[8px] left-[5px] w-[12px]"> 
                    <img src={searchicon} className=""/>
                    </div>
                    <input className="w-[324px] ml-[30px] py-[10px] pr-[10px] pb-[5px] rounded-[5px] bg-[var(--white)] leading-[15px] focus:outline-none"
                        type="text"
                        placeholder={placeholder}
                        onChange={(e)=>{
                            setSearchItem(e.target.value);
                        }}
               
                    ></input><hr/>
                    
                    {textOptions.name.filter((data)=> {
                        if(searchItem == ''){
                            return data
                        }else if(data.toLowerCase().includes(searchItem.toLowerCase())){
                            return data
                        }
                    }).map((data) => {
                        return <div className="w-full p-[10px] bg-[var(--white)] leading-[15px] cursor-pointer hover:bg-[var(--white-second)]" onClick={()=>{setValue(textOptions.id[textOptions.name.indexOf(data)]);setItem(data); setIsOpen(false); setSearchItem("");}}>{data}</div>;
                    })
                
                    }
                    
                </div>
            :''}
        
        </div>
    );
}
