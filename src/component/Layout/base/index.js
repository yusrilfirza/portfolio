import React from 'react';

export const LayoutBase = (props) => {
    const { children } = props;
    return (
        <div className="h-full w-full landing-page absolute">
            {children}
        </div>
    )
}

export default LayoutBase;
