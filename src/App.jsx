// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Grid } from "@mui/material"
import DisplayMovie from "./components/DisplayMovie"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Grid container spacing={2}>
        <DisplayMovie title="O poderoso chefão" genre="Drama" director="Coppola" image="https://m.media-amazon.com/images/I/61MwEEt+NXL._AC_UF894,1000_QL80_.jpg"/>
        <DisplayMovie title="Vingadores I" genre="Drama" director="Coppola" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4iZjqn8SwH-88NOBw_qlQiEKklr_xK7R7A&s"/>
        <DisplayMovie title="Vingadores II" genre="Drama" director="Coppola" image="https://a-static.mlcdn.com.br/450x450/poster-cartaz-vingadores-ultimato-g-pop-arte-poster/poparteskins2/15938530185/6a399da32ef3a95b75b751695b5287eb.jpeg"/>
        <DisplayMovie title="Vingadores III" genre="Drama" director="Coppola" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBZr4n6ux-CIABBn-QFKqOSb_DXS-C2xEVuEGSmLaOgQ62V9ErByRymEDGY5x-ZCCQZ8&usqp=CAU"/>
      
      </Grid>
    </>
  )
}

export default App
