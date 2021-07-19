import React from 'react';

export const LandingPage = () => {
    return (
        <div>
            <div className="flex">
                <div className="md:ml-20 mt-28 z-10 w-full md:w-2/3 lg:w-1/2 absolute p-4 md:p-0">
                    <span className="text-main-orange text-2xl font-semibold ml-2 md:ml-4">Hi, my name is</span>
                    <div className="flex md:pt-2 justify-center md:justify-start">
                        <span className="md:ml-2 text-6xl flex text-main-grey text-bebas-heading">
                            <div className=" h-auto w-4 mt-1 mb-3 mr-2 bg-main-orange hidden md:block" />
                            <span>
                                YUSRIL FIRZA
                            </span>
                        </span>
                    </div>
                    <div className="w-full flex justify-end md:justify-start">
                        <span className="text-base md:text-6xl ml-8 text-main-grey text-bebas-heading">FRONT-END DEVELOPER</span>
                    </div>
                    <div className="mt-4 w-full flex justify-center md:justify-start md:pl-8">
                        <button className="btn-outline mr-4">
                            Contact me
                        </button>
                        <button className="btn-main">
                            Download CV
                        </button>
                    </div>
                </div>
                <div className="w-full relative justify-end flex z-0 overflow-hidden">
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            <img alt="profile" className="profile-image absolute z-20 ml-auto right-0 top-0 invisible lg:visible" src={`${process.env.PUBLIC_URL}/assets/img/profile_image.png`} />
                            <div className="landing-page-bg absolute z-10 mr-0" />
                            <svg className="ml-auto" width="554" height="863" viewBox="0 0 594 803" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M666 288C666 407.846 569.07 505 449.5 505C329.93 505 233 407.846 233 288C233 168.154 329.93 71 449.5 71C569.07 71 666 168.154 666 288Z" fill="#D72A2A" fill-opacity="0.5"/>
                                <path d="M666 534C666 609.111 605.111 670 530 670C454.889 670 394 609.111 394 534C394 458.889 454.889 398 530 398C605.111 398 666 458.889 666 534Z" fill="#66D83E" fill-opacity="0.5"/>
                                <path d="M199 367C199 400.137 172.137 427 139 427C105.863 427 79 400.137 79 367C79 333.863 105.863 307 139 307C172.137 307 199 333.863 199 367Z" fill="#FAFF00" fill-opacity="0.5"/>
                                <path d="M334 607.5C334 690.067 267.067 757 184.5 757C101.933 757 35 690.067 35 607.5C35 524.933 101.933 458 184.5 458C267.067 458 334 524.933 334 607.5Z" fill="#2AD7C2" fill-opacity="0.5"/>
                                <g filter="url(#filter0_b)">
                                <path d="M0 61C0 27.3106 27.3106 0 61 0H577C610.689 0 638 27.3106 638 61V742C638 775.689 610.689 803 577 803H61C27.3106 803 0 775.689 0 742V61Z" fill="white" fill-opacity="0.02"/>
                                </g>
                                <defs>
                                <filter id="filter0_b" x="-40" y="-40" width="718" height="883" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImage" stdDeviation="20"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
