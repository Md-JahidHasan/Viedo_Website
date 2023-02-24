import React from 'react';

const LikeUnlike = () => {
    return (
        <div class="flex gap-10 w-48">
            <div class="flex gap-1 h-7">
                <div class="shrink-0">
                    <img
                        class="w-6 hover:w-7 block"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQvvF51OCLl0yVGbB-5K74Lep_GPNwJ2Ydw&usqp=CAU"
                        alt="Like"
                    />
                </div>
                <div
                    class="text-sm leading-[1.7142857] text-slate-600"
                >
                    100K
                </div>
            </div>
            <div class="flex gap-1 h-7">
                <div class="shrink-0">
                    <img
                        class="w-6 hover:w-7 block"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfgWSvoimQJNO1tqTXRnxxgVKC3jbLv3Jkyg&usqp=CAU"
                        alt="Unlike"
                    />
                </div>
                <div
                    class="text-sm leading-[1.7142857] text-slate-600"
                >
                    100K
                </div>
            </div>
        </div>
    );
};

export default LikeUnlike;