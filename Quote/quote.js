const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const btn = document.querySelector("#btn");
const url = "https://api.quotable.io/random";

const getQuote = () => {
   fetch(url)
      .then((res) => res.json())
      .then((item) => {
         quote.textContent = `${item.content}`;
         author.textContent = `${item.author}`;
      });
};

btn.addEventListener("click", getQuote);
getQuote();
