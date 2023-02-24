import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const Navbar = () => {
    return (
        <nav class="bg-slate-100 shadow-md">
            <div
                class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
            >
                <Link to="/" className='flex items-center'>
                    <img
                        class="h-10"
                        src="https://static.vecteezy.com/system/resources/previews/009/797/431/original/streaming-icon-broadcast-icon-for-your-web-site-design-logo-app-ui-live-streaming-symbol-video-streaming-sign-vector.jpg"
                        alt="Learn with Sumit"
                    />
                    <h1 className='font-bold text-3xl'><span className='text-5xl'>VD</span>Box</h1>
                </Link>
                <div
                    class="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
                >
                    {/* <!-- search --> */}
                    <Search></Search>
                    
                    <img
                        class="inline h-5 cursor-pointer"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DRetqdDRnICCWL2dS77eHXv4Zx26wDq6tg&usqp=CAU"
                        alt="Search"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;