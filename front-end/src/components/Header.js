import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header shadow-md">
            <div className=" h-20  max-w-7xl mx-auto flex items-center justify-between">
                <div className="">
                    <svg width="163" height="36" viewBox="0 0 163 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 9.3913C0 4.20463 4.20463 0 9.3913 0H26.6087C31.7954 0 36 4.20463 36 9.3913V26.6087C36 31.7954 31.7954 36 26.6087 36H9.3913C4.20463 36 0 31.7954 0 26.6087V9.3913Z" fill="#440079" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3387 27.7826H14.512V11.5517H8.21741V8.21738H14.5556V8.21737H27.7826V11.5517L24.6056 11.5517H18.3823V16.5946H26.202V19.6809H18.3823V27.7826L18.3387 27.7826Z" fill="white" />
                        <path d="M43.072 29V9.12H56.428V12.508H46.936V17.632H54.832V20.768H46.936V29H43.072ZM59.7961 29V14.328H63.5481V29H59.7961ZM59.7961 12.284V8.56H63.5481V12.284H59.7961ZM81.6341 29H77.8821V20.768C77.8821 19.592 77.6768 18.7333 77.2661 18.192C76.8555 17.6507 76.2861 17.38 75.5581 17.38C75.1848 17.38 74.8021 17.4547 74.4101 17.604C74.0181 17.7533 73.6448 17.968 73.2901 18.248C72.9541 18.5093 72.6461 18.8267 72.3661 19.2C72.0861 19.5733 71.8808 19.984 71.7501 20.432V29H67.9981V14.328H71.3861V17.044C71.9275 16.1107 72.7115 15.3827 73.7381 14.86C74.7648 14.3373 75.9221 14.076 77.2101 14.076C78.1248 14.076 78.8715 14.244 79.4501 14.58C80.0288 14.916 80.4768 15.3547 80.7941 15.896C81.1115 16.4373 81.3261 17.0533 81.4381 17.744C81.5688 18.4347 81.6341 19.1347 81.6341 19.844V29ZM98.9523 12.508H92.6243V29H88.7603V12.508H82.4043V9.12H98.9523V12.508ZM110.912 17.576C109.773 17.5947 108.756 17.8187 107.86 18.248C106.964 18.6587 106.32 19.284 105.928 20.124V29H102.176V14.328H105.62V17.464C106.124 16.456 106.777 15.644 107.58 15.028C108.401 14.412 109.26 14.104 110.156 14.104C110.361 14.104 110.51 14.1133 110.604 14.132C110.716 14.132 110.818 14.1413 110.912 14.16V17.576ZM117.937 29.28C117.228 29.28 116.565 29.168 115.949 28.944C115.333 28.7013 114.801 28.3747 114.353 27.964C113.905 27.5347 113.55 27.04 113.289 26.48C113.046 25.92 112.925 25.304 112.925 24.632C112.925 23.9413 113.074 23.3067 113.373 22.728C113.69 22.1307 114.12 21.6267 114.661 21.216C115.221 20.8053 115.884 20.488 116.649 20.264C117.414 20.0213 118.254 19.9 119.169 19.9C119.822 19.9 120.457 19.956 121.073 20.068C121.708 20.18 122.268 20.3387 122.753 20.544V19.704C122.753 18.7333 122.473 17.9867 121.913 17.464C121.372 16.9413 120.56 16.68 119.477 16.68C118.693 16.68 117.928 16.82 117.181 17.1C116.434 17.38 115.669 17.7907 114.885 18.332L113.737 15.952C115.622 14.7013 117.657 14.076 119.841 14.076C121.95 14.076 123.584 14.5987 124.741 15.644C125.917 16.6707 126.505 18.164 126.505 20.124V24.688C126.505 25.08 126.58 25.36 126.729 25.528C126.878 25.696 127.14 25.7893 127.513 25.808V29C127.158 29.0747 126.822 29.1213 126.505 29.14C126.206 29.1773 125.945 29.196 125.721 29.196C125.012 29.1773 124.47 29.0187 124.097 28.72C123.724 28.4027 123.49 27.9827 123.397 27.46L123.313 26.648C122.66 27.5067 121.866 28.16 120.933 28.608C120 29.056 119.001 29.28 117.937 29.28ZM119.001 26.536C119.636 26.536 120.233 26.424 120.793 26.2C121.372 25.976 121.82 25.6773 122.137 25.304C122.548 24.9867 122.753 24.632 122.753 24.24V22.56C122.305 22.392 121.82 22.2613 121.297 22.168C120.774 22.056 120.27 22 119.785 22C118.814 22 118.021 22.224 117.405 22.672C116.789 23.1013 116.481 23.652 116.481 24.324C116.481 24.9587 116.724 25.4907 117.209 25.92C117.694 26.3307 118.292 26.536 119.001 26.536ZM130.317 21.664C130.317 20.6373 130.494 19.6667 130.849 18.752C131.203 17.8373 131.717 17.0347 132.389 16.344C133.061 15.6533 133.873 15.1027 134.825 14.692C135.777 14.2813 136.85 14.076 138.045 14.076C139.65 14.076 141.013 14.4213 142.133 15.112C143.271 15.8027 144.121 16.708 144.681 17.828L141.013 18.948C140.695 18.4067 140.275 17.996 139.753 17.716C139.23 17.4173 138.651 17.268 138.017 17.268C137.475 17.268 136.971 17.38 136.505 17.604C136.038 17.8093 135.627 18.108 135.273 18.5C134.937 18.8733 134.666 19.3307 134.461 19.872C134.274 20.4133 134.181 21.0107 134.181 21.664C134.181 22.3173 134.283 22.9147 134.489 23.456C134.694 23.9973 134.965 24.464 135.301 24.856C135.655 25.248 136.066 25.556 136.533 25.78C136.999 25.9853 137.494 26.088 138.017 26.088C138.689 26.088 139.305 25.92 139.865 25.584C140.443 25.248 140.845 24.8373 141.069 24.352L144.737 25.472C144.233 26.592 143.402 27.5067 142.245 28.216C141.087 28.9253 139.697 29.28 138.073 29.28C136.878 29.28 135.805 29.0747 134.853 28.664C133.901 28.2533 133.089 27.7027 132.417 27.012C131.745 26.3027 131.222 25.4907 130.849 24.576C130.494 23.6427 130.317 22.672 130.317 21.664ZM158.161 29L153.905 22.644L151.889 24.632V29H148.137V8.56H151.889V20.964L157.769 14.356H161.773L156.285 20.572L162.165 29H158.161Z" fill="#555555" />
                    </svg>
                </div>
                <div className="">
                    <ul className=" flex space-x-20 font-medium text-gray-700">
                        <li className=""><NavLink  to="/" >Home</NavLink></li>
                        <li className=""><NavLink  to="/login" >Login</NavLink></li>
                        <li className=""><NavLink to="/sign-up" >Sign-Up</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header