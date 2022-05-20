// require("dotenv").config();

//base URL
const base_URL = `https://api.rawg.io/api/`;

//getting current date
const date = new Date();

//cuurrent Month
const getCurrentMonth = () => {
    const currentMonth = date.getMonth() + 1;
    if (currentMonth < 10) {
        return `0${currentMonth}`;
    } else {
        return currentMonth;
    }
};

//current day
const getCurrentDay = () => {
    const currentDay = date.getDate();
    if (currentDay < 10) {
        return `0${currentDay}`;
    } else {
        return currentDay;
    }
};

//current Day, month & year
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentYear = date.getFullYear();

// getting the dates
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//relevant games
const relevantGames = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating`;

//completet URL's

export const relevantGamesURL = () => `${base_URL}${relevantGames}`;