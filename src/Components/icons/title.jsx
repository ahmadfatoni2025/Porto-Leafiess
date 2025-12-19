// @ts-nocheck
import React from 'react'
import TextPressure from './TextPressure';

const Title = () => {
    return (
        <div className="relative h-[300px] w-full my-20 px-6">
            <TextPressure
                text="LEAFIESS"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={36}
            />
        </div>
    )
}

export default Title;
