import galleryImg from "../img/gallery.webp";
import moviesImg from "../img/movies.webp";
import stopwatchImg from "../img/stopwatch.webp";
import memogameImg from "../img/memogame.webp";
import snakeImg from "../img/snake.webp";
import covidstatImg from "../img/covidstat.webp";
import kuteaweatherImg from "../img/kuteweather.webp";
import symfonyImg from "../img/symfony.webp";
import lautrecoinImg from "../img/lautrecoin.webp";


const _data = [
    {
        id: 1,
        title: "Coming soon",
        link: "",
        source: "",
        img: symfonyImg,
        description: "",
        keywords: "Fullstack, Symfony, React"
    },
    {
        id: 2,
        title: "L'autre coin",
        link: "",
        source: "",
        img: lautrecoinImg,
        description: "L'autre Coin is a demo website using Symfony. It is currently in developement and will be online soon. It is inspired by the popular French website Leboncoin. I actually use their announces to feed my database through data scraping. It serves no other purpose than viewing announces.",
        keywords: "Symfony, PHP, MySQL, Bootstrap"
    },
    {
        id: 3,
        title: "Gallery",
        link: "https://kimtd09.github.io/gallery",
        source: "https://github.com/kimtd09/gallery",
        img: galleryImg,
        description: "An image gallery written in pure Javascript. It was designed on the purpose to deliver a very smooth user experience. To achieve that goal, modern techniques were used such as asynchronous request, lazy loading and user feedback. Since it was coded from scratch, it is extremely lightweight (less than 30K bytes of sources to download) with low complexity algorithms. Images are provided by the Lorem Ipsum API on a JSON format.",
        keywords: "Javascript"
    },
    {
        id: 4,
        title: "Movies",
        link: "https://kimtd-movies.netlify.app",
        source: "https://github.com/kimtd09/movies",
        img: moviesImg,
        description: "A webapp listing popular movies based on the themoviedb.org API. Basic functions are implemented. Coded in React.",
        keywords: "React"
    },
    {
        id: 5,
        title: "Stopwatch",
        link: "https://kimtd-stopwatch.netlify.app",
        source: "https://github.com/kimtd09/stopwatch",
        img: stopwatchImg,
        description: "A simple Stopwatch with a timer function. Based on React, it uses useState, useEffect and useRef hooks. It is mobile friendly.",
        keywords: "React"
    },
    {
        id: 6,
        title: "Memo Game",
        link: "https://kimtd-memo.netlify.app",
        source: "https://github.com/kimtd09/memogame",
        img: memogameImg,
        description: "Memo is a card game. The goal is to find consecutive matches. Written in React. Icons are emojis to minimize assets. It is also mobile friendly.",
        keywords: "React"
    },
    {
        id: 7,
        title: "Snake Game",
        link: "https://kimtd-snake.netlify.app",
        source: "https://github.com/kimtd09/snake",
        img: snakeImg,
        description: "A classic game from early days of mobile phone! Based on React, it is playable on computer or mobile.",
        keywords: "React"
    },
    {
        id: 8,
        title: "CovidStat",
        link: "https://kimtd-covidstat.netlify.app",
        source: "https://github.com/kimtd09/covidstat",
        img: covidstatImg,
        description: "A comprehensive statistics website of COVID-19. It presents worldwilde and per country numbers through charts. It is fed by a postman API. Chartjs is the library used to compute charts. Main application is written in React.",
        keywords: "React, ChartJS"
    },
    {
        id: 9,
        title: "KuteWeather",
        link: "https://github.com/kimtd09/KuteWeather",
        source: "https://github.com/kimtd09/KuteWeather",
        img: kuteaweatherImg,
        description: "An android weather application. Based on a RESTful API. Coded in Kotlin",
        keywords: "Android, Java, Kotlin"
    },
];

export default _data;