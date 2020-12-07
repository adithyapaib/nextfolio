import user from '../editthis';
import HEAD from 'next/head';
export default function Hello()
{
  return <>
  <HEAD>
<title>{user.name} | {user.pro}</title>
<link rel="shortcut icon" type="image/png" href="https://img.icons8.com/windows/32/000000/code.png"/>
  </HEAD>
  <div className='main'> 
<h1 className='me'>{user.name}</h1>
   <h2 className='job'>Front-End Developer</h2>
  </div>
  </>
}