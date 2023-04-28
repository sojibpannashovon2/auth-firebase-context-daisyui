import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content flex justify-between gap-4 font-bold text-2xl p-5 rounded-lg">
                <a className="btn btn-ghost normal-case font-bold text-2xl">Auth-firebase-Context</a>
                <div className='flex gap-4'>
                    <Link className='btn btn-ghost normal-case font-bold text-xl ' to='/'>Home</Link>
                    <Link className='btn btn-ghost normal-case font-bold text-xl ' to='/login'>Log-In</Link>
                    <Link className='btn btn-ghost normal-case font-bold text-xl ' to='/register'>Register</Link>
                    {/* Knowing about login Information !!! */}
                    <div>
                        {
                            user ? <p className='flex justify-center items-center gap-4'>
                                <span className='bg-white p-2 rounded-md text-green-400'>{user.email}</span>
                                <button onClick={handleLogOut} className="btn btn-outline  btn-md btn-error bg-yellow-300">Log-Out</button> </p> : <Link to='/login' className='btn btn-success hover:bg-white'>Log-In</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;