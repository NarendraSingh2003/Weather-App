# Weather Application

A simple weather application built using **React**, **Tailwind CSS**, and **JavaScript**. This app fetches real-time weather data from a public API and displays current weather conditions based on the user's search or location.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Features

- Search weather by city.
- Display current temperature, humidity, wind speed, and weather conditions.
- Responsive design for mobile and desktop using Tailwind CSS.
- Clean, user-friendly interface.
  
## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **JavaScript**: Core programming language for functionality.
- **Weather API**: To fetch real-time weather data (e.g., OpenWeatherMap API).
  
## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Get your API key from [OpenWeatherMap](https://openweathermap.org/) or any other weather API provider.

4. Create a `.env` file in the root directory and add your API key:

   ```bash
   REACT_APP_WEATHER_API_KEY=your-api-key-here
   ```

## Usage

To start the app in development mode, run:

```bash
npm start
```

This will open the app in your default browser at `http://localhost:3000`.

### Search for Weather

1. Enter a city name in the search bar.
2. The app will display the current weather information for the selected city, including temperature, humidity, wind speed, and general weather conditions.

## Project Structure

```bash
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Header.js          # Header component
│   │   ├── WeatherCard.js     # Component to display weather details
│   ├── App.js                 # Main app component
│   ├── index.js               # Entry point of the app
│   ├── api.js                 # Weather API integration
│   └── styles.css             # Tailwind CSS integration
├── .env                       # API key stored here
├── package.json
└── tailwind.config.js         # Tailwind CSS configuration
```

## API Integration

The app uses the [OpenWeatherMap API](https://openweathermap.org/) to fetch weather data. You will need to sign up for an API key and store it in a `.env` file.

Example API call in the `api.js` file:

```javascript
export const fetchWeather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
  );
  return await response.json();
};
```

## Styling with Tailwind CSS

This project uses **Tailwind CSS** for styling. The utility-first approach allows for rapid styling directly in the JSX files:

Example in `WeatherCard.js`:

```jsx
<div className="bg-blue-500 p-4 rounded-lg shadow-md">
  <h2 className="text-white text-lg">{city}</h2>
  <p className="text-white text-4xl">{temperature}°C</p>
</div>
```

To customize Tailwind, modify the `tailwind.config.js` file.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
