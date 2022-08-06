import { useSelect } from "@mui/base";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../../assets/Nav/Nav";
import Products from "../../assets/product.json";
// import * as React from 'react';
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
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import "./Cart.scss";
import { rmvCart } from "../../assets/cartSlice/cartSlice";

const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function rmvFromCart(id) {
    let res = state.cart.cartArr.filter((el) => el !== id);
    dispatch(rmvCart(res));
  }

  let item = Products.map((product) => {
    
    return state.cart.cartArr.map((cart) => {
      console.log("cart", cart);
      if (product.id == cart) {
        return (
          <div key={product.id} className="cart-items">
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
              {/* <IconButton  aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton> */}
              <IconButton
                onClick={() => rmvFromCart(product.id)}
                aria-label="cart"
              >
                <ShoppingCartCheckoutIcon />
              </IconButton>

              {/* </CardActions> */}
            </Card>
          </div>
        );
      }
    });
  });
  return (
    <div>
      <Nav />
      Cart
      <div className="cart-cont">{item}</div>
    </div>
  );
};

export default Cart;
