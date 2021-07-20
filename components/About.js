import user from "../editthis";
export default function About() {
  return (
    <div className="about" id="about">
         <style global jsx>{`
      .main .wrapper .about .section::before
        {
            background: ${user.color};
        }
        .main .wrapper .about h1
        {
            font-size: 3rem;
        }
        .main .wrapper .about h1::first-letter
        {
            color: ${user.color};
        }
        
      `}</style>
      <section className="section"></section>
      <h1>About me <i class="bi bi-gem"></i></h1>
      <div className="img">
        <img src="img/goals.svg" alt="Boy illustration" />
      </div>
      <br />
      <p>{user.description}</p>
    </div>
  );
}
