import React from 'react';

export const LayoutHeader = () => {
    return (
        <header id="app-header" className="app-header p-2 bg-main-orange ml-0 mt-0 z-10 flex w-full">
                <svg width="20" height="20" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3659 0C5.53639 0 0 5.53639 0 12.3659V28.1942H13.8748V9.19228H28.1942V0H12.3659Z" fill="white"/>
                    <path d="M28.1942 13.1685H18.7837V19.321H28.1942V13.1685Z" fill="white"/>
                    <path d="M28.1942 23.2809H18.7837V28.1942H28.1942V23.2809Z" fill="white"/>
                </svg>
            <div className="bg-transparent pl-2 text-main-white font-semibold flex">
                <span className="mb-0 mt-auto">Firza</span>
            </div>
        </header>
    )
}

export default LayoutHeader;
