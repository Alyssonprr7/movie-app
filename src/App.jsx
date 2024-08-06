import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Grid, InputAdornment, TextField } from "@mui/material"
import DisplayMovie from "./components/DisplayMovie"
import { MoviesJson } from "./MOVIES"
import { Search } from "@mui/icons-material"

function App() {
  const [filterTitle, setFilterTitle] = useState(undefined)

  return (
    <Grid container justifyContent="center" mt={5}>
      <TextField
        id="input-with-icon-textfield"
        label="Busque um filme"
        style={{width: 400}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        onChange={(event) => setFilterTitle(event.target.value)}
      />

      <Grid justifyContent={"center"} alignItems={"center"} container spacing={2} mt={5}>
        {console.log("filter", filterTitle)}
        {MoviesJson
        .filter(movie => {
            if (filterTitle) {
              if (movie.title.toLowerCase().startsWith(filterTitle.toLowerCase())) {
                return movie
              }
            } else {
              return movie
            }
        })
        .map(movie => (
          <DisplayMovie key={movie.title} title={movie.title} genre={movie.genre} director={movie.director} image={movie.image}/>
        ))}
      </Grid>
    </Grid>
  )
}

export default App
