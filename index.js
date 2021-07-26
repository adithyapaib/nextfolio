  const { IgApiClient } = require("instagram-private-api")
const ig = new IgApiClient()

const USERNAME = "adithyapaitest"
const PASSWORD = "_c%rbXkJ3w3&BN~"

ig.state.generateDevice(USERNAME)

const main = async () => {
  await ig.simulate.preLoginFlow()
  await ig.account.login(USERNAME, PASSWORD)

  process.nextTick(async () => await ig.simulate.postLoginFlow())

  await ig.account.setBiography( await run())
  console.log(`Biography set at ${new Date().toLocaleString()}`)
}


setInterval(main, 3600000 )
 

const fetch = require("node-fetch");

const run = async () => {
  let text = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=mangalore&units=metric&appid=e445c2acf890de54bf9c03f9fa4a3db2"
  ).then((res) => res.json());
  let weather = text["weather"][0]["main"];
  let temp = text["main"]["temp"];
  let feels = text["main"]["feels_like"];
  let emoji = ": )";
  let weathercode = await parseInt(text["weather"][0]["id"]);
  console.log(weathercode);
  if (weathercode >= 200 && weathercode < 300) {
    emoji = "🌩⛈";
  } else if (weathercode >= 300 && weathercode < 500) {
    emoji = "🌨🌦";
  } else if (weathercode >= 500 && weathercode < 600) {
    emoji = "🌧";
  } else if (weathercode >= 600 && weathercode < 700) {
    emoji = "❄️";      
  } else if (weathercode >= 700 && weathercode < 800) {
    emoji = "💨🌫";
  }else if (weathercode > 800 && weathercode < 900) {
    emoji = "☁️";
  }
  else if (weathercode == 800) {
    emoji = "🌞 🌝";
  }
  else 
    emoji = "🌍"

 
  let bio = `
 Dynamic Bio 🧑🏽‍💻
 Location: Mangalore⚓
 Temperature: ${temp} 🤒
 Feels Like: ${feels} 🤧
 Weather: ${weather} ${emoji}
 Last updated at ${new Date().toLocaleString()} `;
  console.log(bio);
  return bio;
};
run();
main();
