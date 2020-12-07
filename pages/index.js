import user from '../editthis';
import HEAD from 'next/head';
export default function Hello()
{
  return <>
  <HEAD>
<title>{user.name} | {user.pro}</title>
<meta name="viewport" content="width=device-width, initial-scale = 1.0, 
maximum-scale=1.0, user-scalable=yes" /> 
 <meta  name="theme-color" content="#ef476f"></meta>
<link rel="shortcut icon" type="image/png" href="https://img.icons8.com/windows/32/000000/code.png"/>
  </HEAD>
  <div className='main'> 
  <div className='landing'>
  <h1 className='me'>{user.name}</h1>
   <h2 className='job'>Front-End Developer</h2>
   <img  src='/img/moon.svg' className='moon'></img>
  </div>
  </div>

  </>
}