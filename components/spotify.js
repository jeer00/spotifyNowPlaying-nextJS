import useSWR from 'swr'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';



// export const getStaticProps = async () => {
//     const res = await fetch ('http://localhost:3000/api')
//     const data = await res.json()
  
//     return {
//         props: { song: data}
//     }
//   }

const fetcher = (...args) => fetch(...args).then(res => res.json())

 export default function spotify() {
  const api = 'http://localhost:3000/api/nowPlaying'
  const { data, error } = useSWR(api, fetcher)
  if (error) return <div>Spelar inte någon låt just nu :)</div>
    if (!data) return <div>Laddar låt..</div>
const songData = data
    const theme = useTheme();
    
    return (
      <>
      <h1>Playing right now:</h1>
        <Card sx={{ display: 'flex'  }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto'}}>
            <Typography component="div" variant="h5">
              {songData.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {songData.artists}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 , width: 60 }}>
            <IconButton>
               <LibraryMusicIcon />
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 700 }}
          image={songData.img.url}
          alt="Album cover"
        />
      </Card>
      </>
    )
}

// export default Spotify