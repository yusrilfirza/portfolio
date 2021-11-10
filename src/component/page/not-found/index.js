import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNotEqual } from '@fortawesome/free-solid-svg-icons';

export const PageNotFound = () => {
    return (
        <div className="flex h-full pt-36 justify-center">
            <div>
                <div className="flex justify-center">
                    <FontAwesomeIcon icon={faNotEqual} className="text-main-dark_gray text-8xl mb-4" />
                </div>
                <div className="flex justify-center text-3xl text-main-dark_gray">Page Not Found</div>
            </div>
        </div>
    )
}

export default PageNotFound;
