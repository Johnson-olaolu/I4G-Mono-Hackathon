import React, { useEffect } from 'react'
import SidebarWrapper from '../components/SidebarWrapper'


import Avatar from '../images/avatar.svg'

const UserHomeDashboardScreen = () => {
    useEffect(() => {

    }, [])

    
    return (
        <SidebarWrapper>
            <div className="flex bg-gray-50">
                <div className=" flex-grow p-8 ">
                    <div className="">
                        <h2 className=" text-gray-400">Hello Elise Welcome back 👋🏻</h2>
                        <p className=" text-gray-800 text-4xl" >Your Dashboard today</p>
                    </div>
                    <div className="w-full bg-white mt-6 p-5 shadow-lg rounded-2xl">
                        <div className="rounded-2xl h-16 p-2 grid grid-cols-3 bg-slate-50">
                            <div className=" flex justify-center items-center text-gray-800 text-lg font-semibold rounded-2xl bg-white shadow-md">Transactions</div>
                            <div className=" flex justify-center items-center text-gray-400 text-lg font-semibold rounded-2xl cursor-pointer">Branches</div>
                            <div className=" flex justify-center items-center text-gray-400 text-lg font-semibold rounded-2xl cursor-pointer">Statistics</div>
                        </div>
                        <div className=" mt-4 flex text-gray-400 space-x-8">
                            <div className="space-x-1">
                                <input type="checkbox" name="" id="All" />
                                <label className="font-medium" htmlFor="#All">All</label>
                            </div>
                            <div className="space-x-1">
                                <input type="checkbox" name="" id="paidIn" />
                                <label className="font-medium" htmlFor="#All">Paid In</label>
                            </div>
                            <div className="space-x-1">
                                <input type="checkbox" name="" id="paidIn" />
                                <label className="font-medium" htmlFor="#All">Paid Out</label>
                            </div>
                        </div>
                        <div className="mt-4">
                            <table className="w-full">
                                <thead className="space-x-2 ">
                                    <tr>
                                        <th className="text-left text-gray-600 font-medium ">Your Transactions</th>
                                        <th className="text-left text-gray-600 font-medium ">Branch</th>
                                        <th className="text-left text-gray-600 font-medium ">Amount (₦)</th>
                                        <th className="text-left text-gray-600 font-medium ">Type</th>
                                        <th className="text-left text-gray-600 font-medium ">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=" space-x-2">
                                        <td className="flex space-x-2 items-center">
                                            <div className="">
                                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="36" height="36" rx="8" fill="white" />
                                                    <path d="M22.1667 21.3333V11.3333M10.5 24.6667H21.3333H10.5ZM10.5 21.3333H18H10.5ZM10.5 18H15.5H10.5ZM18.8333 18L22.1667 21.3333L18.8333 18ZM22.1667 21.3333L25.5 18L22.1667 21.3333Z" stroke="#008E13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="">
                                                <h6 className=" text-sm font-semibold text-gray-800">61b6267c5c98002fc7b49d0d</h6>
                                                <span className=" text-xs text-gray-600">04 Jan, 09:20AM</span>
                                            </div>
                                        </td>
                                        <td>
                                            #0001
                                        </td>
                                        <td>
                                            20,200
                                        </td>
                                        <td>
                                            Transfer
                                        </td>
                                        <td>
                                            <span className="w-16 py-1 rounded bg-green-200 text-green-600 text-xs flex items-center justify-center">Paid in</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
                <div className="sidebar w-72 bg-white p-8">
                    <div className=" flex justify-between items-center">
                        <div className=" flex space-x-4 items-center">
                            <img src={Avatar} alt="" className="" />
                            <div className="">
                                <h4 className=" font-semibold text-gray-800 text-sm">Ade Ayobami</h4>
                                <p className=" text-xs text-gray-400">GT Cunsulting</p>
                            </div>
                        </div>
                        <div className="">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 17H9M15 17H20L18.595 15.595C18.4063 15.4063 18.2567 15.1822 18.1546 14.9357C18.0525 14.6891 18 14.4249 18 14.158V11C18.0002 9.75894 17.6156 8.54834 16.8992 7.53489C16.1829 6.52144 15.17 5.75496 14 5.341V5C14 4.46957 13.7893 3.96086 13.4142 3.58579C13.0391 3.21071 12.5304 3 12 3C11.4696 3 10.9609 3.21071 10.5858 3.58579C10.2107 3.96086 10 4.46957 10 5V5.341C7.67 6.165 6 8.388 6 11V14.159C6 14.697 5.786 15.214 5.405 15.595L4 17H9H15ZM15 17V18C15 18.7956 14.6839 19.5587 14.1213 20.1213C13.5587 20.6839 12.7956 21 12 21C11.2044 21 10.4413 20.6839 9.87868 20.1213C9.31607 19.5587 9 18.7956 9 18V17H15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h4 className=" font-medium text-gray-800">Basic Information</h4>
                        <div className="mt-5 flex items-center space-x-2" >
                            <div className="">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="36" height="36" rx="8" fill="#FFE4C2" />
                                    <path d="M25.2 14.5L18 18.875L10.8 14.5V12.75L18 17.125L25.2 12.75V14.5ZM25.2 11H10.8C9.801 11 9 11.7788 9 12.75V23.25C9 23.7141 9.18964 24.1592 9.52721 24.4874C9.86477 24.8156 10.3226 25 10.8 25H25.2C25.6774 25 26.1352 24.8156 26.4728 24.4874C26.8104 24.1592 27 23.7141 27 23.25V12.75C27 11.7788 26.19 11 25.2 11Z" fill="#FFAD47" />
                                </svg>
                            </div>
                            <div className="">
                                <h6 className=" text-gray-800 font-medium text-sm">Email Address</h6>
                                <p className=" text-xs text-gray-400">aybamz181@gmail.com</p>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center space-x-2" >
                            <div className="">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="36" height="36" rx="8" fill="#FFE4C2" />
                                    <path d="M12.62 16.79C14.06 19.62 16.38 21.94 19.21 23.38L21.41 21.18C21.69 20.9 22.08 20.82 22.43 20.93C23.55 21.3 24.75 21.5 26 21.5C26.2652 21.5 26.5196 21.6054 26.7071 21.7929C26.8946 21.9804 27 22.2348 27 22.5V26C27 26.2652 26.8946 26.5196 26.7071 26.7071C26.5196 26.8946 26.2652 27 26 27C21.4913 27 17.1673 25.2089 13.9792 22.0208C10.7911 18.8327 9 14.5087 9 10C9 9.73478 9.10536 9.48043 9.29289 9.29289C9.48043 9.10536 9.73478 9 10 9H13.5C13.7652 9 14.0196 9.10536 14.2071 9.29289C14.3946 9.48043 14.5 9.73478 14.5 10C14.5 11.25 14.7 12.45 15.07 13.57C15.18 13.92 15.1 14.31 14.82 14.59L12.62 16.79Z" fill="#FFAD47" />
                                </svg>
                            </div>
                            <div className="">
                                <h6 className=" text-gray-800 font-medium text-sm">Phone Num</h6>
                                <p className=" text-xs text-gray-400">07053332295</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <div className="flex justify-between items-center">
                            <h4 className=" font-medium text-gray-800">Recent Activity</h4>
                            <div className=" p-2 space-x-2 flex items-center bg-gray-50 rounded-lg">
                                <span className="">30 d</span>
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29104 1.70743C9.92144 1.07759 9.47537 0 8.58425 0H1.41268C0.521988 0 0.0757232 1.07669 0.705251 1.70679L4.28781 5.29257C4.67815 5.68327 5.31132 5.68356 5.70202 5.29321L9.29104 1.70743Z" fill="#555555" />
                                </svg>
                            </div>
                        </div>

                        <div className="mt-5 flex items-center space-x-2" >
                            <div className="">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="36" height="36" rx="8" fill="#F3E4FF" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13C12 12.4696 12.2107 11.9609 12.5858 11.5858C12.9609 11.2107 13.4696 11 14 11C14 11.7956 14.3161 12.5587 14.8787 13.1213C15.4413 13.6839 16.2044 14 17 14H19C19.7956 14 20.5587 13.6839 21.1213 13.1213C21.6839 12.5587 22 11.7956 22 11C22.5304 11 23.0391 11.2107 23.4142 11.5858C23.7893 11.9609 24 12.4696 24 13V24C24 24.5304 23.7893 25.0391 23.4142 25.4142C23.0391 25.7893 22.5304 26 22 26H14C13.4696 26 12.9609 25.7893 12.5858 25.4142C12.2107 25.0391 12 24.5304 12 24V13ZM15 17C14.7348 17 14.4804 17.1054 14.2929 17.2929C14.1054 17.4804 14 17.7348 14 18C14 18.2652 14.1054 18.5196 14.2929 18.7071C14.4804 18.8946 14.7348 19 15 19H15.01C15.2752 19 15.5296 18.8946 15.7171 18.7071C15.9046 18.5196 16.01 18.2652 16.01 18C16.01 17.7348 15.9046 17.4804 15.7171 17.2929C15.5296 17.1054 15.2752 17 15.01 17H15ZM18 17C17.7348 17 17.4804 17.1054 17.2929 17.2929C17.1054 17.4804 17 17.7348 17 18C17 18.2652 17.1054 18.5196 17.2929 18.7071C17.4804 18.8946 17.7348 19 18 19H21C21.2652 19 21.5196 18.8946 21.7071 18.7071C21.8946 18.5196 22 18.2652 22 18C22 17.7348 21.8946 17.4804 21.7071 17.2929C21.5196 17.1054 21.2652 17 21 17H18ZM15 21C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H15.01C15.2752 23 15.5296 22.8946 15.7171 22.7071C15.9046 22.5196 16.01 22.2652 16.01 22C16.01 21.7348 15.9046 21.4804 15.7171 21.2929C15.5296 21.1054 15.2752 21 15.01 21H15ZM18 21C17.7348 21 17.4804 21.1054 17.2929 21.2929C17.1054 21.4804 17 21.7348 17 22C17 22.2652 17.1054 22.5196 17.2929 22.7071C17.4804 22.8946 17.7348 23 18 23H21C21.2652 23 21.5196 22.8946 21.7071 22.7071C21.8946 22.5196 22 22.2652 22 22C22 21.7348 21.8946 21.4804 21.7071 21.2929C21.5196 21.1054 21.2652 21 21 21H18Z" fill="#8F00FF" />
                                </svg>

                            </div>
                            <div className="">
                                <h6 className=" text-gray-800 font-medium text-sm">Total Transactions</h6>
                                <p className=" text-xs text-gray-400">3026</p>
                            </div>
                        </div>

                        <div className="mt-5 flex items-center space-x-2" >
                            <div className="">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="36" height="36" rx="8" fill="#FFD4D4" />
                                    <path d="M22.1667 14.6667V24.6667M10.5 11.3333H21.3333H10.5ZM10.5 14.6667H18H10.5ZM10.5 18H15.5H10.5ZM18.8333 18L22.1667 14.6667L18.8333 18ZM22.1667 14.6667L25.5 18L22.1667 14.6667Z" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className="">
                                <h6 className=" text-gray-800 font-medium text-sm">Paid Out</h6>
                                <p className=" text-xs text-gray-400"> 15000</p>
                            </div>
                        </div>

                        <div className="mt-5 flex items-center space-x-2" >
                            <div className="">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="36" height="36" rx="8" fill="#D4FFDA" />
                                    <path d="M22.1667 14.6667V24.6667M10.5 11.3333H21.3333H10.5ZM10.5 14.6667H18H10.5ZM10.5 18H15.5H10.5ZM18.8333 18L22.1667 14.6667L18.8333 18ZM22.1667 14.6667L25.5 18L22.1667 14.6667Z" stroke="#008E13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className="">
                                <h6 className=" text-gray-800 font-medium text-sm">Paid In</h6>
                                <p className=" text-xs text-gray-400"> 15000</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </SidebarWrapper>
    )
}

export default UserHomeDashboardScreen
