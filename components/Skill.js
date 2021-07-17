import user from "../editthis";
const listItems1 = user.skills[0].map((number) => (
  <li className="l1">{number}</li>
));
const listItems2 = user.skills[1].map((number) => (
  <li className="l2">{number}</li>
));
const listItems3 = user.skills[2].map((number) => (
  <li className="l3">{number}</li>
));

export default function Skill() {
  return (
    <div className="skills">
      <style global jsx>{`
        .main .wrapper .skills .h1::first-letter {
          color: ${user.color};
        }
        .main .wrapper .skills h2 {
          color: ${user.color};
        }
        .main .wrapper .skills ul li:before {
          color: ${user.color};
        }
      `}</style>
      <h1 className="h1">
        SKILLS <i class="bi bi-shield-shaded"></i>
      </h1>
      <h2>{user.skills_title[0]}</h2>
      <ul>{listItems1}</ul>
      <h2>{user.skills_title[1]}</h2>
      <ul>{listItems2}</ul>
      <h2>{user.skills_title[2]}</h2>
      <ul>{listItems3}</ul>
      <div className="img">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500.00000000000006"
          preserveAspectRatio="xMaxYMax slice"
        >
          <g transform="scale(0.6024096385542169)">
            <rect x="0" y="0" width="830" height="830" fill="#ffffff" />
            <rect
              x="0"
              y="0"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="23.055" cy="23.055" r="23.055" fill={user.color} />
            <circle
              cx="69.16499999999999"
              cy="23.055"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="23.055"
              cy="69.16499999999999"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="69.16499999999999"
              cy="69.16499999999999"
              r="23.055"
              fill={user.color}
            />
            <circle
              cx="138.32999999999998"
              cy="46.11"
              r="46.11"
              fill={user.color}
            />
            <circle cx="230.55" cy="46.11" r="46.11" fill="#000000" />
            <circle
              cx="322.78000000000003"
              cy="46.11"
              r="46.11"
              fill="#000000"
            />
            <circle cx="415" cy="46.11" r="46.11" fill="#000000" />
            <circle cx="507.22" cy="46.11" r="46.11" fill="#000000" />
            <circle cx="599.44" cy="46.11" r="46.11" fill={user.color} />
            <circle cx="691.67" cy="46.11" r="46.11" fill="#000000" />
            <rect
              x="737.7777777777778"
              y="0"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle
              cx="760.8349999999999"
              cy="23.055"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="806.9449999999999"
              cy="23.055"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="760.8349999999999"
              cy="69.16499999999999"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="806.9449999999999"
              cy="69.16499999999999"
              r="23.055"
              fill={user.color}
            />
            <circle
              cx="46.11"
              cy="138.32999999999998"
              r="46.11"
              fill={user.color}
            />
            <rect
              x="92.22222222222223"
              y="92.22222222222223"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="115.275" cy="115.275" r="23.055" fill={user.color} />
            <circle
              cx="161.38500000000002"
              cy="115.275"
              r="23.055"
              fill={user.color}
            />
            <circle
              cx="115.275"
              cy="161.38500000000002"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="161.38500000000002"
              cy="161.38500000000002"
              r="23.055"
              fill={user.color}
            />
            <rect
              x="184.44444444444446"
              y="92.22222222222223"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="207.495" cy="115.275" r="23.055" fill="#000000" />
            <circle cx="253.615" cy="115.275" r="23.055" fill="#000000" />
            <circle
              cx="207.495"
              cy="161.38500000000002"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="253.615"
              cy="161.38500000000002"
              r="23.055"
              fill={user.color}
            />
            <circle
              cx="322.78000000000003"
              cy="138.32999999999998"
              r="46.11"
              fill="#000000"
            />
            <rect
              x="368.8888888888889"
              y="92.22222222222223"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="391.945" cy="115.275" r="23.055" fill={user.color} />
            <circle cx="438.055" cy="115.275" r="23.055" fill={user.color} />
            <circle
              cx="391.945"
              cy="161.38500000000002"
              r="23.055"
              fill={user.color}
            />
            <circle
              cx="438.055"
              cy="161.38500000000002"
              r="23.055"
              fill={user.color}
            />
            <rect
              x="461.11111111111114"
              y="92.22222222222223"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="484.165" cy="115.275" r="23.055" fill={user.color} />
            <circle cx="530.275" cy="115.275" r="23.055" fill={user.color} />
            <circle
              cx="484.165"
              cy="161.38500000000002"
              r="23.055"
              fill={user.color}
            />
            <circle
              cx="530.275"
              cy="161.38500000000002"
              r="23.055"
              fill="#000000"
            />
            <rect
              x="553.3333333333334"
              y="92.22222222222223"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="576.385" cy="115.275" r="23.055" fill="#000000" />
            <circle cx="622.495" cy="115.275" r="23.055" fill={user.color} />
            <circle
              cx="576.385"
              cy="161.38500000000002"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="622.495"
              cy="161.38500000000002"
              r="23.055"
              fill={user.color}
            />
            <circle
              cx="691.67"
              cy="138.32999999999998"
              r="46.11"
              fill="#000000"
            />
            <rect
              x="737.7777777777778"
              y="92.22222222222223"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle
              cx="760.8349999999999"
              cy="115.275"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="806.9449999999999"
              cy="115.275"
              r="23.055"
              fill={user.color}
            />
            <circle
              cx="760.8349999999999"
              cy="161.38500000000002"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="806.9449999999999"
              cy="161.38500000000002"
              r="23.055"
              fill="#000000"
            />
            <rect
              x="0"
              y="184.44444444444446"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="23.055" cy="207.495" r="23.055" fill="#000000" />
            <circle
              cx="69.16499999999999"
              cy="207.495"
              r="23.055"
              fill="#000000"
            />
            <circle cx="23.055" cy="253.615" r="23.055" fill={user.color} />
            <circle
              cx="69.16499999999999"
              cy="253.615"
              r="23.055"
              fill={user.color}
            />
            <circle
              cx="138.32999999999998"
              cy="230.55"
              r="46.11"
              fill={user.color}
            />
            <circle cx="230.55" cy="230.55" r="46.11" fill={user.color} />
            <circle
              cx="322.78000000000003"
              cy="230.55"
              r="46.11"
              fill={user.color}
            />
            <rect
              x="368.8888888888889"
              y="184.44444444444446"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="391.945" cy="207.495" r="23.055" fill="#000000" />
            <circle cx="438.055" cy="207.495" r="23.055" fill={user.color} />
            <circle cx="391.945" cy="253.615" r="23.055" fill={user.color} />
            <circle cx="438.055" cy="253.615" r="23.055" fill="#000000" />
            <rect
              x="461.11111111111114"
              y="184.44444444444446"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="484.165" cy="207.495" r="23.055" fill="#000000" />
            <circle cx="530.275" cy="207.495" r="23.055" fill={user.color} />
            <circle cx="484.165" cy="253.615" r="23.055" fill="#000000" />
            <circle cx="530.275" cy="253.615" r="23.055" fill="#000000" />
            <rect
              x="553.3333333333334"
              y="184.44444444444446"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="576.385" cy="207.495" r="23.055" fill="#000000" />
            <circle cx="622.495" cy="207.495" r="23.055" fill="#000000" />
            <circle cx="576.385" cy="253.615" r="23.055" fill={user.color} />
            <circle cx="622.495" cy="253.615" r="23.055" fill="#000000" />
            <circle cx="691.67" cy="230.55" r="46.11" fill={user.color} />
            <circle cx="783.89" cy="230.55" r="46.11" fill="#000000" />
            <rect
              x="0"
              y="276.6666666666667"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="23.055" cy="299.725" r="23.055" fill={user.color} />
            <circle
              cx="69.16499999999999"
              cy="299.725"
              r="23.055"
              fill={user.color}
            />
            <circle cx="23.055" cy="345.835" r="23.055" fill="#000000" />
            <circle
              cx="69.16499999999999"
              cy="345.835"
              r="23.055"
              fill="#000000"
            />
            <rect
              x="92.22222222222223"
              y="276.6666666666667"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="115.275" cy="299.725" r="23.055" fill={user.color} />
            <circle
              cx="161.38500000000002"
              cy="299.725"
              r="23.055"
              fill={user.color}
            />
            <circle cx="115.275" cy="345.835" r="23.055" fill={user.color} />
            <circle
              cx="161.38500000000002"
              cy="345.835"
              r="23.055"
              fill={user.color}
            />
            <rect
              x="184.44444444444446"
              y="276.6666666666667"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="207.495" cy="299.725" r="23.055" fill="#000000" />
            <circle cx="253.615" cy="299.725" r="23.055" fill="#000000" />
            <circle cx="207.495" cy="345.835" r="23.055" fill={user.color} />
            <circle cx="253.615" cy="345.835" r="23.055" fill="#000000" />
            <circle
              cx="322.78000000000003"
              cy="322.78000000000003"
              r="46.11"
              fill="#000000"
            />
            <rect
              x="368.8888888888889"
              y="276.6666666666667"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="391.945" cy="299.725" r="23.055" fill="#000000" />
            <circle cx="438.055" cy="299.725" r="23.055" fill={user.color} />
            <circle cx="391.945" cy="345.835" r="23.055" fill="#000000" />
            <circle cx="438.055" cy="345.835" r="23.055" fill="#000000" />
            <rect
              x="461.11111111111114"
              y="276.6666666666667"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="484.165" cy="299.725" r="23.055" fill={user.color} />
            <circle cx="530.275" cy="299.725" r="23.055" fill="#000000" />
            <circle cx="484.165" cy="345.835" r="23.055" fill={user.color} />
            <circle cx="530.275" cy="345.835" r="23.055" fill={user.color} />
            <rect
              x="553.3333333333334"
              y="276.6666666666667"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="576.385" cy="299.725" r="23.055" fill="#000000" />
            <circle cx="622.495" cy="299.725" r="23.055" fill={user.color} />
            <circle cx="576.385" cy="345.835" r="23.055" fill={user.color} />
            <circle cx="622.495" cy="345.835" r="23.055" fill="#000000" />
            <rect
              x="645.5555555555557"
              y="276.6666666666667"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle
              cx="668.6149999999999"
              cy="299.725"
              r="23.055"
              fill={user.color}
            />
            <circle
              cx="714.7249999999999"
              cy="299.725"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="668.6149999999999"
              cy="345.835"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="714.7249999999999"
              cy="345.835"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="783.89"
              cy="322.78000000000003"
              r="46.11"
              fill={user.color}
            />
            <circle cx="46.11" cy="415" r="46.11" fill="#000000" />
            <circle cx="138.32999999999998" cy="415" r="46.11" fill="#000000" />
            <rect
              x="184.44444444444446"
              y="368.8888888888889"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="207.495" cy="391.945" r="23.055" fill="#000000" />
            <circle cx="253.615" cy="391.945" r="23.055" fill={user.color} />
            <circle cx="207.495" cy="438.055" r="23.055" fill={user.color} />
            <circle cx="253.615" cy="438.055" r="23.055" fill={user.color} />
            <rect
              x="276.6666666666667"
              y="368.8888888888889"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="299.725" cy="391.945" r="23.055" fill="#000000" />
            <circle cx="345.835" cy="391.945" r="23.055" fill={user.color} />
            <circle cx="299.725" cy="438.055" r="23.055" fill={user.color} />
            <circle cx="345.835" cy="438.055" r="23.055" fill={user.color} />
            <rect
              x="368.8888888888889"
              y="368.8888888888889"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="391.945" cy="391.945" r="23.055" fill="#000000" />
            <circle cx="438.055" cy="391.945" r="23.055" fill={user.color} />
            <circle cx="391.945" cy="438.055" r="23.055" fill={user.color} />
            <circle cx="438.055" cy="438.055" r="23.055" fill={user.color} />
            <circle cx="507.22" cy="415" r="46.11" fill="#000000" />
            <circle cx="599.44" cy="415" r="46.11" fill={user.color} />
            <rect
              x="645.5555555555557"
              y="368.8888888888889"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle
              cx="668.6149999999999"
              cy="391.945"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="714.7249999999999"
              cy="391.945"
              r="23.055"
              fill={user.color}
            />
            <circle
              cx="668.6149999999999"
              cy="438.055"
              r="23.055"
              fill={user.color}
            />
            <circle
              cx="714.7249999999999"
              cy="438.055"
              r="23.055"
              fill={user.color}
            />
            <circle cx="783.89" cy="415" r="46.11" fill="#000000" />
            <circle cx="46.11" cy="507.22" r="46.11" fill={user.color} />
            <rect
              x="92.22222222222223"
              y="461.11111111111114"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="115.275" cy="484.165" r="23.055" fill="#000000" />
            <circle
              cx="161.38500000000002"
              cy="484.165"
              r="23.055"
              fill={user.color}
            />
            <circle cx="115.275" cy="530.275" r="23.055" fill={user.color} />
            <circle
              cx="161.38500000000002"
              cy="530.275"
              r="23.055"
              fill={user.color}
            />
            <rect
              x="184.44444444444446"
              y="461.11111111111114"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="207.495" cy="484.165" r="23.055" fill="#000000" />
            <circle cx="253.615" cy="484.165" r="23.055" fill="#000000" />
            <circle cx="207.495" cy="530.275" r="23.055" fill={user.color} />
            <circle cx="253.615" cy="530.275" r="23.055" fill={user.color} />
            <circle
              cx="322.78000000000003"
              cy="507.22"
              r="46.11"
              fill="#000000"
            />
            <rect
              x="368.8888888888889"
              y="461.11111111111114"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="391.945" cy="484.165" r="23.055" fill={user.color} />
            <circle cx="438.055" cy="484.165" r="23.055" fill="#000000" />
            <circle cx="391.945" cy="530.275" r="23.055" fill="#000000" />
            <circle cx="438.055" cy="530.275" r="23.055" fill={user.color} />
            <circle cx="507.22" cy="507.22" r="46.11" fill={user.color} />
            <rect
              x="553.3333333333334"
              y="461.11111111111114"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="576.385" cy="484.165" r="23.055" fill="#000000" />
            <circle cx="622.495" cy="484.165" r="23.055" fill={user.color} />
            <circle cx="576.385" cy="530.275" r="23.055" fill="#000000" />
            <circle cx="622.495" cy="530.275" r="23.055" fill={user.color} />
            <rect
              x="645.5555555555557"
              y="461.11111111111114"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle
              cx="668.6149999999999"
              cy="484.165"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="714.7249999999999"
              cy="484.165"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="668.6149999999999"
              cy="530.275"
              r="23.055"
              fill={user.color}
            />
            <circle
              cx="714.7249999999999"
              cy="530.275"
              r="23.055"
              fill={user.color}
            />
            <rect
              x="737.7777777777778"
              y="461.11111111111114"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle
              cx="760.8349999999999"
              cy="484.165"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="806.9449999999999"
              cy="484.165"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="760.8349999999999"
              cy="530.275"
              r="23.055"
              fill={user.color}
            />
            <circle
              cx="806.9449999999999"
              cy="530.275"
              r="23.055"
              fill={user.color}
            />
            <rect
              x="0"
              y="553.3333333333334"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="23.055" cy="576.385" r="23.055" fill={user.color} />
            <circle
              cx="69.16499999999999"
              cy="576.385"
              r="23.055"
              fill={user.color}
            />
            <circle cx="23.055" cy="622.495" r="23.055" fill={user.color} />
            <circle
              cx="69.16499999999999"
              cy="622.495"
              r="23.055"
              fill="#000000"
            />
            <rect
              x="92.22222222222223"
              y="553.3333333333334"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="115.275" cy="576.385" r="23.055" fill={user.color} />
            <circle
              cx="161.38500000000002"
              cy="576.385"
              r="23.055"
              fill="#000000"
            />
            <circle cx="115.275" cy="622.495" r="23.055" fill="#000000" />
            <circle
              cx="161.38500000000002"
              cy="622.495"
              r="23.055"
              fill={user.color}
            />
            <rect
              x="184.44444444444446"
              y="553.3333333333334"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="207.495" cy="576.385" r="23.055" fill="#000000" />
            <circle cx="253.615" cy="576.385" r="23.055" fill={user.color} />
            <circle cx="207.495" cy="622.495" r="23.055" fill="#000000" />
            <circle cx="253.615" cy="622.495" r="23.055" fill="#000000" />
            <rect
              x="276.6666666666667"
              y="553.3333333333334"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle cx="299.725" cy="576.385" r="23.055" fill="#000000" />
            <circle cx="345.835" cy="576.385" r="23.055" fill={user.color} />
            <circle cx="299.725" cy="622.495" r="23.055" fill="#000000" />
            <circle cx="345.835" cy="622.495" r="23.055" fill="#000000" />
            <circle cx="415" cy="599.44" r="46.11" fill="#000000" />
            <circle cx="507.22" cy="599.44" r="46.11" fill="#000000" />
            <circle cx="599.44" cy="599.44" r="46.11" fill={user.color} />
            <circle cx="691.67" cy="599.44" r="46.11" fill="#000000" />
            <circle cx="783.89" cy="599.44" r="46.11" fill={user.color} />
            <circle cx="46.11" cy="691.67" r="46.11" fill="#000000" />
            <rect
              x="92.22222222222223"
              y="645.5555555555557"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle
              cx="115.275"
              cy="668.6149999999999"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="161.38500000000002"
              cy="668.6149999999999"
              r="23.055"
              fill={user.color}
            />
            <circle
              cx="115.275"
              cy="714.7249999999999"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="161.38500000000002"
              cy="714.7249999999999"
              r="23.055"
              fill={user.color}
            />
            <rect
              x="184.44444444444446"
              y="645.5555555555557"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle
              cx="207.495"
              cy="668.6149999999999"
              r="23.055"
              fill={user.color}
            />
            <circle
              cx="253.615"
              cy="668.6149999999999"
              r="23.055"
              fill={user.color}
            />
            <circle
              cx="207.495"
              cy="714.7249999999999"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="253.615"
              cy="714.7249999999999"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="322.78000000000003"
              cy="691.67"
              r="46.11"
              fill="#000000"
            />
            <rect
              x="368.8888888888889"
              y="645.5555555555557"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle
              cx="391.945"
              cy="668.6149999999999"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="438.055"
              cy="668.6149999999999"
              r="23.055"
              fill={user.color}
            />
            <circle
              cx="391.945"
              cy="714.7249999999999"
              r="23.055"
              fill={user.color}
            />
            <circle
              cx="438.055"
              cy="714.7249999999999"
              r="23.055"
              fill="#000000"
            />
            <circle cx="507.22" cy="691.67" r="46.11" fill={user.color} />
            <rect
              x="553.3333333333334"
              y="645.5555555555557"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle
              cx="576.385"
              cy="668.6149999999999"
              r="23.055"
              fill={user.color}
            />
            <circle
              cx="622.495"
              cy="668.6149999999999"
              r="23.055"
              fill={user.color}
            />
            <circle
              cx="576.385"
              cy="714.7249999999999"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="622.495"
              cy="714.7249999999999"
              r="23.055"
              fill="#000000"
            />
            <circle cx="691.67" cy="691.67" r="46.11" fill={user.color} />
            <circle cx="783.89" cy="691.67" r="46.11" fill="#000000" />
            <circle cx="46.11" cy="783.89" r="46.11" fill="#000000" />
            <circle
              cx="138.32999999999998"
              cy="783.89"
              r="46.11"
              fill="#000000"
            />
            <circle cx="230.55" cy="783.89" r="46.11" fill={user.color} />
            <circle
              cx="322.78000000000003"
              cy="783.89"
              r="46.11"
              fill="#000000"
            />
            <circle cx="415" cy="783.89" r="46.11" fill="#000000" />
            <circle cx="507.22" cy="783.89" r="46.11" fill="#000000" />
            <rect
              x="553.3333333333334"
              y="737.7777777777778"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle
              cx="576.385"
              cy="760.8349999999999"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="622.495"
              cy="760.8349999999999"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="576.385"
              cy="806.9449999999999"
              r="23.055"
              fill={user.color}
            />
            <circle
              cx="622.495"
              cy="806.9449999999999"
              r="23.055"
              fill="#000000"
            />
            <rect
              x="645.5555555555557"
              y="737.7777777777778"
              width="92.22222222222223"
              height="92.22222222222223"
              fill="#ffffff"
            />
            <circle
              cx="668.6149999999999"
              cy="760.8349999999999"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="714.7249999999999"
              cy="760.8349999999999"
              r="23.055"
              fill="#000000"
            />
            <circle
              cx="668.6149999999999"
              cy="806.9449999999999"
              r="23.055"
              fill={user.color}
            />
            <circle
              cx="714.7249999999999"
              cy="806.9449999999999"
              r="23.055"
              fill={user.color}
            />
            <circle cx="783.89" cy="783.89" r="46.11" fill="#000000" />
          </g>
        </svg>
      </div>
    </div>
  );
}
