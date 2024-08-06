import { Grid } from "@mui/material"

function DisplayMovie(props) {
    return (
        <Grid item>
          <img width={300} height={400} src={props.image}></img>
          <p>{props.title}</p>
          <p>{props.director}</p>
          <p>{props.genre}</p>
        </Grid>
    )
}

export default DisplayMovie;
