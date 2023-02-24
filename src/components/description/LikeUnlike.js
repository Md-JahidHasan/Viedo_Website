import React from 'react';

const LikeUnlike = () => {
    return (
        <div className="flex gap-10 w-48">
            <div className="flex gap-1 h-7">
                <div className="shrink-0">
                    <img
                        className="w-6 duration-100 hover:w-7 block"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQvvF51OCLl0yVGbB-5K74Lep_GPNwJ2Ydw&usqp=CAU"
                        alt="Like"
                    />
                </div>
                <div
                    className="text-sm leading-[1.7142857] text-slate-600"
                >
                    100K
                </div>
            </div>
            <div className="flex gap-1 h-7">
                <div className="shrink-0">
                    <img
                        className="w-6 hover:w-7 block"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfgWSvoimQJNO1tqTXRnxxgVKC3jbLv3Jkyg&usqp=CAU"
                        alt="Unlike"
                    />
                </div>
                <div
                    className="text-sm leading-[1.7142857] text-slate-600"
                >
                    100K
                </div>
            </div>
        </div>
    );
};

export default LikeUnlike;