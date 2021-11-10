import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';

export const LandingPage = () => {
    const [spinStatus, setSpinStatus] = useState(false);

    const onClickButton = () => {
            setSpinStatus(!spinStatus)
    }
    return (
        <div className="flex h-full pt-16 justify-center">
            <div>
                <img alt="profile_image" className="mx-auto" width={150} height={150} src={`${process.env.PUBLIC_URL}/assets/img/profile.png`} />
                <div className="text-main-dark_gray text-5xl mt-4 flex justify-center">Yusril Firza</div>
                <div className="flex justify-center">
                    <div className="mt-3 bg-main-purple flex justify-between w-60 items-center py-2 pr-2 pl-4 rounded-2xl">
                        <span className="text-main-white text-lg">Frontend Developer</span>
                        <button className="bg-main-white rounded-xl py-1 px-2" onClick={onClickButton}>
                            <FontAwesomeIcon icon={faAdjust} className="text-main-dark_gray" spin={spinStatus} />
                        </button>
                    </div>
                </div>
                <div className="mt-3 text-main-dark_gray w-full px-32">
                    <p className="text-center">
                        I build website application interface and digital experience from existing design. Currently working at Netmonk as Frontend Developer.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
