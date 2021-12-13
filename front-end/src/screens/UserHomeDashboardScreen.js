import React, { useEffect } from 'react'
import SidebarWrapper from '../components/SidebarWrapper'
// import MonoConnect from '@mono.co/connect.js';

const UserHomeDashboardScreen = () => {
    useEffect(() => {

    }, [])

    // const monoConnect = React.useMemo(() => {
    //     const monoInstance = new MonoConnect({
    //         onClose: () => console.log('Widget closed'),
    //         onLoad: () => console.log('Widget loaded successfully'),
    //         onSuccess: ({ code }) => console.log(`Linked successfully: ${code}`),

    //         key: "live_pk_rsvVbMIGeGx2FsAVP0c2"
    //     })

    //     monoInstance.setup()

    //     return monoInstance;
    // }, [])
    return (
        <SidebarWrapper>
            <div className="flex">
                <div className=" flex-grow p-8">
                    {/* <button onClick={() => monoConnect.open()}>
                        Link account with Mono
                    </button> */}
                </div>
                <div className=" w-72 bg-black">
                    
                </div>
            </div>
        </SidebarWrapper>
    )
}

export default UserHomeDashboardScreen
