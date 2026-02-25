import { NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react'
import '../index.css'

function MainLayout() 
{
    const [isOpen, setIsOpen] = useState(true)

    return (
        <>
            <div className="h-full min-h-screen min-w-screen w-full font-poppins">

                {/* Sidebar */}
                {/* <div className={`fixed left-0 top-0 h-full py-6 bg-gray-300/20 rounded-md transition-all duration-500 ease-in-out ${isOpen ? "w-1/12" : "w-fit p-3"}`}>

                    <button onClick={() => setIsOpen(!isOpen)} className={`text-4xl h-fit w-full mb-10 cursor-pointer`}>
                        {isOpen ? ( 
                            <>
                                <i class="fi fi-rc-angle-double-small-left"></i>
                            </>
                        ) : ( 
                            <>
                                <i class="fi fi-rc-angle-double-small-right"></i>
                            </>
                        )}
                    </button>

                    <nav className="flex flex-col justify-center items-center gap-10">
                        <NavLink
                            to="/"
                            end
                            
                        >
                            <div className="flex flex-row gap-3 align-middle">
                                <i class="fi fi-rc-home text-2xl"></i>
                                {isOpen && <p>Home</p> }
                            </div>
                        </NavLink>

                        <NavLink
                            to="/task"
                            end
                            
                        >
                            <div className="flex flex-row gap-3 align-middle">
                                <i class="ffi fi-rr-task-calendar text-2xl"></i>
                                {isOpen && <p>Task</p> }
                            </div>
                        </NavLink>
                    </nav>
                </div> */}

                {/* Content */}
                <div className="">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default MainLayout