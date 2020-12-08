import user from '../editthis';
import HEAD from 'next/head';
export default function Hello()
{
  return <>
  <HEAD>
<title>{user.name} | {user.job}</title>
<meta name="viewport" content="width=device-width, initial-scale = 1.0, 
maximum-scale=1.0, user-scalable=no" /> 
 <meta  name="theme-color" content="#e63946"></meta>
<link rel="shortcut icon" type="image/png" href="https://img.icons8.com/windows/32/000000/code.png"/>
  </HEAD>
  <div className='main'> 
  <div className='wrapper'>
  <div className='landing'>
  <h1 className='name'>{user.name}</h1>
<h2 className='job'>{user.job}</h2>
   <img  src='/img/moon.svg' className='moon'></img>
  </div>
  <div className="about">
  <h1>
    About Me
  </h1>
  <p>
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  </p>

  </div>
  
  </div>
  </div>

  </>
}