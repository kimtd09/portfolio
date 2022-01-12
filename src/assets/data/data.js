import galleryImg from "../img/gallery.webp";
import allocineImg from "../img/allocine.webp";
import stopwatchImg from "../img/stopwatch.webp";
import memogameImg from "../img/memogame.webp";
import snakeImg from "../img/snake.webp";
import covidstatImg from "../img/covidstat.webp";

const _data = [
    {
        id: 1,
        title: "Gallery",
        link: "https://kimtd09.github.io/gallery",
        source: "https://github.com/kimtd09/gallery",
        img: galleryImg,
        description: "An image gallery written in Javascript. It uses asynchronous loading for a smooth UX. It also does lazy loading. It doesn't rely on any libraries and was written from scratch. The images are from Lorem Ipsum API.",
        keywords: "Javascript"
    },
    {
        id: 2,
        title: "Allocine",
        link: "https://kimtd-allocine.netlify.app",
        source: "https://github.com/kimtd09/allocine",
        img: allocineImg,
        description: "A copycat of french Allocine website. Feed is from a student API. Header is from the original UI. This is written in React.",
        keywords: "React"
    },
    {
        id: 3,
        title: "Stopwatch",
        link: "https://kimtd-stopwatch.netlify.app",
        source: "https://github.com/kimtd09/stopwatch",
        img: stopwatchImg,
        description: "A simple Stopwatch with a timer function. Based on React, it uses useState, useEffect and useRef hooks. It is mobile friendly.",
        keywords: "React"
    },
    {
        id: 4,
        title: "Memo Game",
        link: "https://kimtd-memo.netlify.app",
        source: "https://github.com/kimtd09/memogame",
        img: memogameImg,
        description: "Memo is a card game. The goal is to find consecutive matches. Written in React. Icons are emojis to minimize assets. It is also mobile friendly.",
        keywords: "React"
    },
    {
        id: 5,
        title: "Snake Game",
        link: "https://kimtd-snake.netlify.app",
        source: "https://github.com/kimtd09/snake",
        img: snakeImg,
        description: "A classic game from early days of mobile phone! Based on React, it is playable on computer or mobile.",
        keywords: "React"
    },
    {
        id: 6,
        title: "Snake Game",
        link: "https://kimtd-covidstat.netlify.app",
        source: "https://github.com/kimtd09/covidstat",
        img: covidstatImg,
        description: "A comprehensive statistics website of COVID-19. It presents worldwilde and per country numbers through charts. It is fed by a postman API. Chartjs is the library used to compute charts. Main application is written in React.",
        keywords: "React, ChartJS"
    },
];

export default _data;