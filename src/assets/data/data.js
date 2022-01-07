import galleryImg from "../img/gallery.webp";
import allocineImg from "../img/allocine.webp";
import stopwatchImg from "../img/stopwatch.webp";
import memogameImg from "../img/memogame.webp";
import snakeImg from "../img/snake.webp";

const _data = [
    {
        id: 1,
        title: "Gallery",
        link: "https://url",
        source: "https://url",
        img: galleryImg,
        description: "An image gallery written in Javascript. It uses asynchronous loading for a smooth UX. It doesn't rely on any libraries and was written from scratch. The images are from Lorem Ipsum API.",
        keywords: "Javascript"
    },
    {
        id: 2,
        title: "Allocine",
        link: "https://url",
        source: "https://url",
        img: allocineImg,
        description: "A copycat of french Allocine website. Feed is from a student API. Header is from the original UI. This is written in React.",
        keywords: "React"
    },
    {
        id: 3,
        title: "Stopwatch",
        link: "https://url",
        source: "https://url",
        img: stopwatchImg,
        description: "A simple Stopwatch with a timer function. Based on React, it uses useState, useEffect and useRef hooks. It is mobile friendly.",
        keywords: "React"
    },
    {
        id: 4,
        title: "Memo Game",
        link: "https://url",
        source: "https://url",
        img: memogameImg,
        description: "Memo is a card game. The goal is to find consecutive matches. Written in React. Icons are emojis to minimize assets. It is also mobile friendly.",
        keywords: "React"
    },
    {
        id: 5,
        title: "Snake Game",
        link: "https://url",
        source: "https://url",
        img: snakeImg,
        description: "A classic game from early days of mobile phone! Based on React, it is playable on computer or mobile.",
        keywords: "React"
    },
];

export default _data;