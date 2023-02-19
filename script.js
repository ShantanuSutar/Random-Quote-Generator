"use strict";

const quote = document.querySelector(".quote");
const author = document.querySelector(".author .name");
const quoteBtn = document.querySelector("button");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");
const body = document.querySelector("body");
// const buttons = document.querySelectorAll(".buttons .features ul li");

const randomQuote = () => {
  quoteBtn.classList.add("loading");
  quoteBtn.textContent = "Loading...";
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      quote.textContent = result.content;
      author.textContent = result.author;
      quoteBtn.textContent = "New Quote";
      quoteBtn.classList.remove("loading");
    });
  let randomHexNum =
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, "0");
  randomHexNum = randomHexNum.toUpperCase();
  quoteBtn.style.background = `${randomHexNum}`;
  body.style.backgroundColor = `${randomHexNum}`;
  //   body.style.color = `${randomHexNum}`;  --- To change the text to random color
  soundBtn.style.color = `${randomHexNum}`;
  soundBtn.style.border = `2px solid ${randomHexNum}`;
  copyBtn.style.color = `${randomHexNum}`;
  copyBtn.style.border = `2px solid ${randomHexNum}`;
  twitterBtn.style.color = `${randomHexNum}`;
  twitterBtn.style.border = `2px solid ${randomHexNum}`;
};

quoteBtn.addEventListener("click", randomQuote);

soundBtn.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(
    `${quote.textContent} by ${author.textContent}`
  );
  speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quote.textContent);
});

twitterBtn.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url= ${quote.textContent}`;
  window.open(tweetUrl, "_blank");
});
