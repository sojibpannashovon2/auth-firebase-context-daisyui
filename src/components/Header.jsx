import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content flex justify-between gap-4 font-bold text-2xl p-5 rounded-lg">
                <a className="btn btn-ghost normal-case font-bold text-2xl">Auth-firebase-Context</a>
                <div className='flex gap-10'>
                    <Link className='btn btn-ghost normal-case font-bold text-xl ' to='/'>Home</Link>
                    <Link className='btn btn-ghost normal-case font-bold text-xl ' to='/login'>Log-In</Link>
                    <Link className='btn btn-ghost normal-case font-bold text-xl ' to='/register'>Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;