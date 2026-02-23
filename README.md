# Movie Search App

A React app that lets you search for movies using the OMDB API.

## What it does

- Loads a default movie when the page opens
- You can type a movie title and click Search to look it up
- Shows the movie poster, title, year, genre, plot, and rating
- Shows an error message if the movie is not found

## Concepts used

- **useState** — stores movie data, loading state, and error messages
- **useEffect** — fetches a default movie when the page first loads
- **Lifting state** — movie data lives in App and gets passed down to child components
- **Controlled input** — the search box is controlled by React state
- **Props** — the search function and movie data are passed between components
- **async/await + try/catch** — handles the API call and errors cleanly

## Components

- `App.jsx` — main component, holds all state and the fetch function
- `Form.jsx` — search form with a controlled input
- `MovieDisplay.jsx` — displays the movie info from props

## How to run it

1. Clone the repo
2. Run `npm install`
3. Create a `.env` file in the root with your OMDB API key:
   ```
   VITE_OMDB_API_KEY=your_key_here
   ```
4. Run `npm run dev`
5. Open `http://localhost:5173`

## API

This app uses the [OMDB API](https://www.omdbapi.com). You can get a free API key at omdbapi.com.
