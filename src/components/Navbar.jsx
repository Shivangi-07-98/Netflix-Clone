import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if(window.scrollY > 80){
      handleShow(true);
    }else{
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, [])

  return (
    <div className={`fixed top-0 w-full z-1 transition ease-in duration-500 ${show ? 'bg-gray-950' : ''}`}>
    <div className={`header top-0 p-4 w-full z-10 flex text-white items-center `}>
      
    <img className='h-9 w-25 object-contain cursor-pointer mr-4 pl-7 pr-7'
      src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />


    <nav className="flex-1 text-sm">
          <ul className="flex justify-start font-size">
            <li className="mr-4">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-4">
              <Link to="/tv-shows">TV Shows</Link>
            </li>
            <li className="mr-4">
              <Link to="/movies">Movies</Link>
            </li>

            <li className="mr-4">
              <Link to="/new-popular">New & Popular</Link>
            </li>
            <li className="mr-4 ">
              <Link to="/my-list">My List</Link>
            </li>
            
            <li className="mr-4">
              <Link to="/browse-languages">Browse by Languages</Link>
            </li>
            <li className='mr-6 text-lg pt-1 flex-1 flex justify-end'><i class="fa-solid fa-magnifying-glass"></i></li>

            <li className="mr-4">
              <Link to="/children">Children</Link>
            </li>
            
          </ul>
        </nav>

        <div className='mr-6  text-lg'><i className="fa-regular fa-bell"></i></div>

      <img className='avatar pr-10 h-8 object-contain cursor-pointer'
      src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />

     

    </div>
    </div>
  )
}

export default Navbar


{/* <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt="" />
      <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.jpg" alt="" />
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png" alt="" />
      <img src="https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/baffc96f5eccbde6402befe0_rw_600.png?h=cc45688ebccb59201761f059f3f4e5e3" alt="" /> */}