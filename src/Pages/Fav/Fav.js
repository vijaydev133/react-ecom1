import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../../assets/Nav/Nav";
import Products from "../../assets/product.json";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { rmvFav } from "../../assets/favSlice/favSlice";
import "./Fav.scss";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

const Fav = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state.fav);

  function rmvFromFav(id) {
    let res = state.fav.FavArr.filter((el) => el !== id);
    dispatch(rmvFav(res));
  }

  let item = Products.map((product) => {
    return state.fav.FavArr.map((fav) => {
      if (product.id == fav) {
        return (
          <div key={product.id} className="fav-item">
            <Card sx={{ maxWidth: 345, Height: 400 }}>
              <CardMedia
                component="img"
                height="194"
                image={product.img}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {product.desc}
                </Typography>
              </CardContent>
              {/* <CardActions disableSpacing> */}
              <IconButton
                onClick={() => rmvFromFav(product.id)}
                sx={{ color: "red" }}
                aria-label="add to favorites"
              >
                <HeartBrokenIcon />
              </IconButton>
              {/* <IconButton onClick={()=>rmvFromFav(product.id)}  aria-label="cart">
         <ShoppingCartCheckoutIcon />
       </IconButton> */}

              {/* </CardActions> */}
            </Card>
          </div>
        );
      }
    });
  });
  return (
    <div className="main-fav">
      <Nav />
      <h1>Fav</h1>

      <div className="fav-cont">{item}</div>
    </div>
  );
};

export default Fav;
