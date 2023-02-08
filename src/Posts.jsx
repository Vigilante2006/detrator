import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import Container from '@mui/material/Container'

export default function RecipeReviewCard() {
  const [cards, setCards] = useState([])
  useEffect(() => {
    const url = 'https://dummyjson.com/posts'
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        setCards(json.posts)
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchData()
  }, [])

  console.log(cards)

  return (
    <Container
      maxWidth="sm"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#C5C5C5',
      }}
    >
      <Grid container spacing={5} style={{ padding: '0', margin: '0' }}>
        {cards.map((card) => (
          <Grid
            item
            key={card.id}
            style={{ padding: '20px', paddingLeft: '0px', width: '100%' }}
          >
            <Card>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                   {card.id}
                  </Avatar>
                }
                action={
                  <CardActions disableSpacing>
                    <IconButton
                      aria-label="add to favorites"
                      style={{ fontSize: '15px' }}
                    >
                      {card.reactions}
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                }
                title="UserId"
                subheader={card.userId}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2">
                  {card.body}
                </Typography>
                <Typography style={{ marginTop: '20px',fontSize: '15px', }}>Tags :</Typography>
                <CardContent style={{ display: 'flex' }}>
                  {card.tags.map((items, index) => (
                    <Grid item key={index}>
                      <Typography
                        style={{
                          marginLeft: '10px',
                          background: '#E5E4E2',
                          padding: '2px',
                          paddingLeft: '5px',
                          paddingRight: '5px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          cursor: 'pointer',
                        }}
                      >
                        {items}
                      </Typography>
                    </Grid>
                  ))}
                </CardContent>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
