import React, { useEffect, useState } from 'react'
import SidebarWrapper from '../components/SidebarWrapper'
import { Link, useHistory } from 'react-router-dom'
import MonoConnect from '@mono.co/connect.js';

import Avatar from '../images/avatar.svg'

const AddBranchScreen = () => {
    const history = useHistory()
    const [branchName, setBranchName] = useState("")
    const [branchAddress, setBranchAddress] = useState("")
    const [branchDescription, setBranchDescription] = useState("")
    const [monoSecretKey, setMonoSecretKey] = useState("")
    const [monoPublicKey, setMonoPublicKey] = useState("")
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const accessToken = JSON.parse(localStorage.getItem("accessToken"))
        if (!accessToken) {
            history.push("/login")
        }
        const currentUser = JSON.parse(localStorage.getItem("user"))
        if(currentUser) {
            setIsLoading(false)
            setUser(currentUser)
        }
        console.log(user)
    }, [])
    const onClickAddBranch = (e) => {
        e.preventDefault()
        if (branchName === "") {

        }
    }
    const monoConnect = React.useMemo(() => {
        const monoInstance = new MonoConnect({
            onClose: () => console.log('Widget closed'),
            onLoad: () => console.log('Widget loaded successfully'),
            onSuccess: ({ code }) => console.log(`Linked successfully: ${code}`),

            key: "live_pk_rsvVbMIGeGx2FsAVP0c2"
        })

        monoInstance.setup()

        return monoInstance;
    }, [])

    return (
        <SidebarWrapper>
            {isLoading ?
                <div class="flex  h-full justify-center items-center">
                    <div class="spinner-border animate-spin inline-block w-60 h-60 border-t-4 border-primary1 rounded-full" role="status">
                        {/* <span class="visually-hidden">Loading...</span> */}
                    </div>
                </div>
                :
                <div className="flex bg-gray-50">
                    <div className=" flex-grow p-8 ">
                        <div className="">
                            <h2 className=" text-gray-400">Hello {user.userName} Welcome back 👋🏻</h2>
                            <p className=" text-gray-800 text-4xl" >Your Dashboard today</p>
                        </div>
                        <div className="flex-grow rounded-large2 bg-white shadow-lg">
                            <div className="w-full p-10 mt-8">
                                <h4 className="text-gray-800 font-semibold text-2xl">Add a new Branch</h4>
                                <p className=" text-gray-400 text-sm my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea sequi blanditiis voluptatibus sed officiis id rem vero, at temporibus doloremque magni commodi minus quas asperiores voluptatum quam, explicabo, accusantium alias.</p>
                                <form className="mt-5 space-y-7">
                                    <input type="text" value={branchName} className=" w-full py-1 border-b border-gray-200 focus-visible:outline-none" placeholder="Branch Name"
                                        onChange={(e) => { setBranchName(e.target.value) }} />
                                    <input type="text" value={branchAddress} className=" w-full py-1 border-b border-gray-200 focus-visible:outline-none" placeholder="Branch Address"
                                        onChange={(e) => { setBranchAddress(e.target.value) }} />
                                    <input type="text" value={branchDescription} className=" w-full py-1 border-b border-gray-200 focus-visible:outline-none" placeholder="Branch Description"
                                        onChange={(e) => { setBranchDescription(e.target.value) }} />
                                    <input type="password" value={monoPublicKey} className=" w-full py-1 border-b border-gray-200 focus-visible:outline-none" placeholder="Mono Public Key"
                                        onChange={(e) => { setMonoPublicKey(e.target.value) }} />
                                    <input type="password" value={monoSecretKey} className=" w-full py-1 border-b border-gray-200 focus-visible:outline-none " placeholder="Mono Secret Key"
                                        onChange={(e) => { setMonoSecretKey(e.target.value) }} />
                                    <button className="w-full h-12 bg-primary1 text-white font-medium rounded-xl" type="submit"
                                        onClick={""}>Add Branch</button>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="sidebar w-72 bg-white p-8">
                        <div className=" flex justify-between items-center">
                            <div className=" flex space-x-4 items-center">
                                <img src={Avatar} alt="" className="" />
                                <div className="">
                                    <h4 className=" font-semibold text-gray-800 text-sm">{user.lastName} {user.firstName}</h4>
                                    <p className=" text-xs text-gray-400">{user.businessName}</p>
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
                                    <p className=" text-xs text-gray-400">{user.email}</p>
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
                                    <p className=" text-xs text-gray-400">###########</p>
                                </div>
                            </div>

                            
                        </div>

                      

                    </div>
                </div>
            }

        </SidebarWrapper>
    )
}

export default AddBranchScreen
