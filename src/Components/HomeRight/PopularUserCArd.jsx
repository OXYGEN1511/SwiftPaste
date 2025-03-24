import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Card, CardHeader,IconButton,CardMedia, Button } from '@mui/material'
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Typography from '@mui/material/Typography';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ShareIcon from '@mui/icons-material/Share';
// import ChatIcon from '@mui/icons-material/Chat';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
// import BookmarkIcon from '@mui/icons-material/Bookmark'

const PopularUserCArd = () => {
  return (
    <Card className=''>
      
      <CardHeader 
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        } 

        action={
         <Button size='small' className='justify-between'>
            Follow
         </Button>
        }
        
        title="Tushar Ray"
        subheader="@tusharray"
        sx={{width:"18rem"}} 
      />


    </Card>
  )
}

export default PopularUserCArd

