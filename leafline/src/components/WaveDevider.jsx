import React from "react";

export default function WaveDivider({ color = "#f0fdf4" }) {
    return (
        <svg
            className="w-full h-24"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
        >
            <path
                fill={color}
                d="M0,160L48,186.7C96,213,192,267,288,266.7C384,267,480,213,576,197.3C672,181,768,203,864,213.3C960,224,1056,224,1152,192C1248,160,1344,96,1392,64L1440,32L1440,0L0,0Z"
            />
        </svg>
    );
}
