import { Grid } from "@mui/material"
import style from "./index.module.css"

function DisplayMovie(props) {
    return (
        <Grid className={style.card} item mb={3} mr={2} ml={2} padding={2}>
          <img width={300} height={400} src={props.image}></img>
          <p className={style.title}>{props.title}</p>
          <Grid container justifyContent="space-between">
            <span className={style.infos}>{props.director}</span>
            <span className={style.infos}>{props.genre}</span>
          </Grid>
        </Grid>
    )
}

export default DisplayMovie;
