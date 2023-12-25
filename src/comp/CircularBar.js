import React from 'react';
import '../Pages/Skilss.css';

export const CircularBar = ({ percentage, circleWidth, imagesrc }) => {
    const dashArray = (circleWidth / 2 - 7.5) * Math.PI * 2;  // 7.5, stroke genişliği için bir düzeltmedir
    const dashOffset = dashArray - (dashArray * percentage) / 100;

    return (
        <div >
            <svg
                width={circleWidth * 2}
                height={circleWidth * 2}
                viewBox='0 0 100 100'
            >
                <defs>
                    <linearGradient id='circle-gradient'>
                        <stop offset="20%" stop-color='#A04053' />
                        <stop offset="60%" stop-color='#C27C8A' />
                        <stop offset="90%" stop-color='#DBA5B0' />
                        <stop offset="100%" stop-color='#F8CED7' />

                    </linearGradient>
                </defs>
                <circle
                    cx={circleWidth / 2}
                    cy={circleWidth / 2}
                    strokeWidth={"10px"}
                    r={40}
                    style={{
                        fill: 'none',
                        stroke: 'white'
                    }}

                />
                <circle
                    cx={circleWidth / 2}
                    cy={circleWidth / 2}
                    strokeWidth={"10px"}
                    r={40}
                    className='circle-progress'
                    style={{
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset,
                        fill: 'none',

                        strokeLinecap: 'round',
                        strokeLinejoin: 'round'
                    }}
                    stroke="url(#circle-gradient)"
                    transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`} />
                <image
                    href={imagesrc}
                    x={circleWidth / 2 - 30 / 2}  // x koordinatı
                    y={circleWidth / 2 - 30 / 2}  // y koordinatı
                    width={30}
                    height={30}
                />
            </svg>
        </div>
    )
}

/*  />
                <text
                    x={circleWidth / 2}  // x koordinatı
                    y={circleWidth / 2}  // y koordinatı
                    textAnchor="middle"  // metni ortalamak için
                    alignmentBaseline="middle"  // metni ortalamak için
                    style={{
                        fill: 'white',
                        fontSize: '12px',
                        dominantBaseline: 'middle',  // metni ortalamak için
                    }}
                >
                    cldksnflrkn
                </text> */