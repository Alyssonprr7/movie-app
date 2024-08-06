import { Grid, IconButton } from "@mui/material"
import style from "./index.module.css"
import { FavoriteBorder, Favorite } from "@mui/icons-material";

function DisplayMovie(props) {
    return (
        <Grid className={style.card} item mb={3} mr={2} ml={2} padding={2}>
          <img width={300} height={400} src={props.image}></img>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={6}>
                <p className={style.title}>{props.title}</p>

            </Grid>
            {props.isFavorite ? (
                <IconButton onClick={() => props.setFavorite(props.title, false)}>
                    <Favorite style={{color: "#ff7b7b"}}/>
                </IconButton>
            ) : (
                <IconButton>
                    <FavoriteBorder onClick={() => props.setFavorite(props.title, true)}/>
                </IconButton>
            )}
          </Grid>
          <Grid container justifyContent="space-between">
            <span className={style.infos}>{props.director}</span>
            <span className={style.infos}>{props.genre}</span>
          </Grid>
        </Grid>
    )
}

export default DisplayMovie;
