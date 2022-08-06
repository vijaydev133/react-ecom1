import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./cartSlice/cartSlice";
import { addToFav, rmvFav } from "./favSlice/favSlice";

export default function RecipeReviewCard(props) {
  const [bgColor, setBgcolor] = React.useState("");

  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();

  console.log(state);

  React.useEffect(() => {
    if (state.fav.FavArr.includes(props.prod.id)) {
      setBgcolor("red");
    } else {
    }
  }, []);

  function addItemToCart() {
    if (state.cart.cartArr.includes(props.prod.id)) {
    } else {
      dispatch(addToCart(props.prod.id));
    }
  }

  function addItemToFav() {
    if (state.fav.FavArr.includes(props.prod.id)) {
      let res = state.fav.FavArr.filter((el) => el !== props.prod.id);
      dispatch(rmvFav(res));
      setBgcolor("grey");
    } else {
      dispatch(addToFav(props.prod.id));
      setBgcolor("red");
    }
  }

  return (
    <>
      <Card sx={{ maxWidth: 345, Height: 400 }}>
        <CardMedia
          component="img"
          height="194"
          image={props.prod.img}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.prod.desc}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={addItemToFav}
            sx={{ color: bgColor }}
            aria-label="add to favorites"
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton onClick={addItemToCart} aria-label="cart">
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
