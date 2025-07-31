import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/login')
    }

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-green-700 shadow-md transition-all">
            <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4">

                {/* Logo */}
                <img
                    src={assets.logo}
                    alt="logo"
                    className="w-40 sm:w-44 cursor-pointer"
                    onClick={() => navigate('/')}
                />

                {/* Desktop Links */}
                <div className="hidden sm:flex items-center gap-8 text-green-700">
                    <button onClick={() => navigate('/')} className="hover:text-green-900">Home</button>
                    <button onClick={() => navigate('/about')} className="hover:text-green-900">About</button>
                    <button onClick={() => navigate('/contact')} className="hover:text-green-900">Contact</button>

                    {/* Search */}
                    <div className="hidden lg:flex items-center text-sm gap-2 border border-green-700 px-3 rounded-full">
                        <input
                            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-600 text-gray-900"
                            type="text"
                            placeholder="Search products"
                        />
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.836 10.615 15 14.695"
                                  stroke="green" strokeWidth="1.2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path clipRule="evenodd"
                                  d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
                                  stroke="green" strokeWidth="1.2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </div>

                    {/* Cart */}
                    <div className="relative cursor-pointer" onClick={() => navigate('/cart')}>
                        <svg width="18" height="18" viewBox="0 0 14 14" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
                                  stroke="green" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <button className="absolute -top-2 -right-3 text-xs text-white bg-green-700 w-[18px] h-[18px] rounded-full">
                            3
                        </button>
                    </div>

                    {/* Login Button */}
                    <button
                        onClick={handleLogin}
                        className="cursor-pointer px-8 py-2 bg-green-700 hover:bg-green-900 transition text-white rounded-full"
                    >
                        Login
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setOpen(!open)} aria-label="Menu" className="sm:hidden">
                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <rect width="21" height="1.5" rx=".75" fill="green"/>
                        <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="green"/>
                        <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="green"/>
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`${open ? 'flex' : 'hidden'} sm:hidden flex-col items-start gap-2 px-5 pb-4 text-sm bg-white shadow-md text-green-700`}>
                <button onClick={() => navigate('/')} className="block hover:text-green-900">Home</button>
                <button onClick={() => navigate('/about')} className="block hover:text-green-900">About</button>
                <button onClick={() => navigate('/contact')} className="block hover:text-green-900">Contact</button>
                <button
                    onClick={handleLogin}
                    className="cursor-pointer px-6 py-2 mt-2 bg-green-700 hover:bg-green-900 transition text-white rounded-full text-sm"
                >
                    Login
                </button>
            </div>
        </nav>
    )
}

export default Navbar
