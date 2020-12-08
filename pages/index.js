import user from '../editthis';
import HEAD from 'next/head';
export default function Hello() {
  return <>
    <HEAD>
      <title>{user.name} | {user.job}</title>
      <meta name="viewport" content="width=device-width, initial-scale = 1.0, 
maximum-scale=1.0, user-scalable=no" />
      <meta name="theme-color" content="#000"></meta>
      <link rel="shortcut icon" type="image/png" href="https://img.icons8.com/windows/32/000000/code.png" />
    </HEAD>
    <div className='main'>
      <div className='wrapper'>
        <div className='landing'>
          <h1 className='name'>{user.name}</h1>
          <h2 className='job'>{user.job}</h2>
          <img src='/img/home.svg' className='moon'></img>
        </div>
        <div className="about">
          <h1>About Me</h1>
          <div className='img'>
            <img src="img/goals.svg" />
          </div>

          <br />
          <p>{user.decription}</p>

        </div>

        <div className='skills'>
          <h1>Skills</h1>
          <h2>{user.title.title1}</h2>
          

        </div>

      </div>
    </div>

  </>
}
console.log(user.skill.total)