const jokeContainer = document.querySelector("#joke");
const btn = document.querySelector("#btn");
const url =
   "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const getJoke = () => {
   jokeContainer.classList.remove("fade");
   async function fetchData() {
      const response = await fetch(url);
      const jokes = await response.json();
      return jokes;
   }
   fetchData().then((jokes) => {
      jokeContainer.textContent = `${jokes.joke}`;
      jokeContainer.classList.add("fade");
   });
};

btn.addEventListener("click", getJoke);
getJoke();
