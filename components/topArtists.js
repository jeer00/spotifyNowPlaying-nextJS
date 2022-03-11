import { ImageList } from '@material-ui/core';
import { ImageListItem } from '@material-ui/core';
import useSWR from 'swr';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';

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

const TopArtist = props => {
  const theme = useTheme();
  const api = '/api/topArtists'
  const { data, error } = useSWR(api, fetcher)
  const classes = useStyles();
  if (error) return <div>FELFELFEL</div>
    if (!data) return <div>Laddar artister..</div>
    let columns = 10
    let w = 164
    if (window.innerWidth < 700) {
      columns = 5
      w = 82
    } 
    if (window.innerWidth < 300) {
      columns = 3
      w = 41
    }


    
    return (
      
      <>
<h1>My top-played artists: </h1>

      <ImageList sx={{ width: 300, height: 164 }} cols={columns} rowHeight={164}>
               {data.map((img) => (
                 
                 <ImageListItem key={img.img}>
                   <a className={classes.a} href={img.url}>
                 <Image 
                 className={classes.img}
                   src={img.img}
                  loading="lazy"
                  width={w}
                  height={w}

                  
                 />
                </a>
                </ImageListItem>
                
               ))}
            </ImageList>
            </>
    )
}
export default TopArtist
