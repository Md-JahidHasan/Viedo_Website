import React from 'react';
import Search from './Search';

const Navbar = () => {
    return (
        <nav class="bg-slate-100 shadow-md">
            <div
                class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
            >
                <a href="/" className='flex items-center'>
                    <img
                        class="h-10"
                        src="https://static.vecteezy.com/system/resources/previews/009/797/431/original/streaming-icon-broadcast-icon-for-your-web-site-design-logo-app-ui-live-streaming-symbol-video-streaming-sign-vector.jpg"
                        alt="Learn with Sumit"
                    />
                    <h1 className='font-bold text-3xl'><span className='text-5xl'>V</span>Box</h1>
                </a>
                <div
                    class="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
                >
                    {/* <!-- search --> */}
                    <Search></Search>
                    
                    <img
                        class="inline h-4 cursor-pointer"
                        src="./assets/search.svg"
                        alt="Search"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;