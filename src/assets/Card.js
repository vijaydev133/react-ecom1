import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector , useDispatch } from 'react-redux';
import { addToCart } from './cartSlice/cartSlice';
import {addToFav} from "./favSlice/favSlice"



export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [bgColor,setBgcolor] = React.useState("")

  const state = useSelector((state)=> state)
  const dispatch = useDispatch()

  
  console.log(state);


  React.useEffect(()=>{
      if(state.fav.FavArr.includes(props.prod.id)){
        setBgcolor("red")
      }else{

      }
  },[])

  function addItemToCart(){
    if(state.fav.FavArr.includes(props.prod.id)){
     
    }
    else{
      dispatch(addToCart(props.prod.id))
      
    }
     
  }

  function addItemToFav(){
    dispatch(addToFav(props.prod.id))
    setBgcolor("red")
  }

  return (
    <>
    <Card sx={{ maxWidth: 345 , Height: 400 }}>
     
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
        <IconButton onClick={addItemToFav} sx= {{color : bgColor}} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton onClick ={addItemToCart} aria-label="cart">
          <AddShoppingCartIcon />
        </IconButton>
       
      </CardActions>
     
    </Card>
    </>
  );
}
