import user from '../editthis';
import HEAD from 'next/head';
const listItems = user.skills[0].map((number) => <li>{number}</li>);
const listItems2 = user.skills[1].map((number) => <li>{number}</li>);
export default function Hello() {
  return <>
    <HEAD>
      <title>{user.name} | {user.job}</title>
      <meta name="description" content={user.description}></meta>
      <meta name="theme-color" content="#ff0057" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&family=Poppins:wght@400;700&display=swap" rel="stylesheet"></link>
      <link href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap' rel="stylesheet"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
          <section className='section'></section>
          <h1>About Me</h1>
          <div className='img'>
            <img src="img/goals.svg" alt='Boy illustration' />
          </div>
          <br />
          <p>{user.description}</p>
        </div>
        <div className='skills'>
          <h1>Skills</h1>
          <h2>{user.skills_title[0]}</h2>
          <ul>{listItems}</ul>
          <h2>{user.skills_title[1]}</h2>
          <ul>{listItems2}</ul>
          {/* <section className='section'></section> */}
          <div className='img'><img  src='img/patternpad.svg' alt='pattern'></img> </div>
        </div>
        <div className='connect'> 
         <h1>Social Media</h1>

        </div>

      </div>
    </div>

  </>
}
