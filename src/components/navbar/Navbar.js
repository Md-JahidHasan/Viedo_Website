import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const Navbar = () => {
    return (
        <nav className="bg-slate-100 shadow-md">
            <div
                className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
            >
                <Link to="/" className='flex items-center'>
                    <img
                        className="h-10"
                        src="https://static.vecteezy.com/system/resources/previews/009/797/431/original/streaming-icon-broadcast-icon-for-your-web-site-design-logo-app-ui-live-streaming-symbol-video-streaming-sign-vector.jpg"
                        alt="Learn with Sumit"
                    />
                    <h1 className='font-bold text-3xl'><span className='text-5xl'>VD</span>Box</h1>
                </Link>
                <div
                    className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
                >
                    {/* <!-- search --> */}
                    <Search></Search>
                    
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;