import { ImageList } from '@material-ui/core';
import { ImageListItem } from '@material-ui/core';
import useSWR from 'swr';
import { useTheme } from '@mui/material/styles';
const fetcher = (...args) => fetch(...args).then(res => res.json())

 export default function topArtist() {
  const api = 'http://localhost:3000/api/topArtists'
  const { data, error } = useSWR(api, fetcher)
 
  if (error) return <div>FELFELFEL</div>
    if (!data) return <div>Laddar artister..</div>
    const theme = useTheme();
    
    return (
      <>
<h1>My top-played artists: </h1>

      <ImageList sx={{ width: 500, height: 450 }} cols={10} rowHeight={97}>
               {data.map((img) => (
                 <ImageListItem key={img.img}>
                 <img 
                   src={img.img}
                  loading="lazy"
                 />
                </ImageListItem>
               ))}
            </ImageList>
            </>
    )
}
