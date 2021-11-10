import React from 'react';
import { LayoutSidebar } from '../sidebar';

export const LayoutBase = (props) => {
    const { children } = props;
    return (
        <div className="h-full w-full landing-page absolute">
            <LayoutSidebar />
            <div className="ml-14 p-8">
                {children}
            </div>
        </div>
    )
}

export default LayoutBase;
