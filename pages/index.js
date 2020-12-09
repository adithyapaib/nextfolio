import user from '../editthis';
import HEAD from 'next/head';
export default function Hello() {
  return <>
    <HEAD>
      <title>{user.name} | {user.job}</title>
      <meta name="description" content={user.description}></meta>
      <meta name="theme-color" content="#000"/>
      <link rel="shortcut icon" type="image/png" href="https://img.icons8.com/windows/32/000000/code.png" />
    </HEAD>
    <div className='main'>
      <div className='wrapper'>
        <div className='landing'>
        <section className='section'></section>
          <h1 className='name'>{user.name}</h1>
          <h2 className='job'>{user.job}</h2>
          <img src='/img/coding.svg' className='moon' alt='coding svg illustration'></img>
        </div>
        <div className="about">
         
          <h1>About Me</h1>
          <div className='img'>
            <img src="img/goals.svg" alt='Boy illustration' />
          </div>

          <br />
          <p>{user.description}</p>

        </div>

        <div className='skills'>
          <h1>Skills</h1>
        
          

        </div>

      </div>
    </div>

  </>
}
