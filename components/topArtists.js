import { ImageList } from '@material-ui/core';
import { ImageListItem } from '@material-ui/core';
import useSWR from 'swr';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  a: {
    display: 'block',
    height: '100%',
  },
  img: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
});
const fetcher = (...args) => fetch(...args).then(res => res.json())

 export default function topArtist() {
  const api = 'http://localhost:3000/api/topArtists'
  const { data, error } = useSWR(api, fetcher)
  const classes = useStyles();
  if (error) return <div>FELFELFEL</div>
    if (!data) return <div>Laddar artister..</div>
    const theme = useTheme();
    
    return (
      <>
<h1>My top-played artists: </h1>

      <ImageList sx={{ width: 500, height: 450 }} cols={10} rowHeight={164}>
               {data.map((img) => (
                 
                 <ImageListItem key={img.img}>
                   <a className={classes.a} href={img.url}>
                 <img 
                 className={classes.img}
                   src={img.img}
                  loading="lazy"
                  
                 />
                </a>
                </ImageListItem>
                
               ))}
            </ImageList>
            </>
    )
}
