export default async function handler(req, res)  {

    const basic = Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64');
        const response = await fetch(`https://accounts.spotify.com/api/token`, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: process.env.REFRESH_TOKEN
        })
        }) 
        
        const jsonData = await response.json()
        
        const  accessToken = jsonData.access_token


        const getTop = await fetch(`https://api.spotify.com/v1/me/top/artists`, {
        
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      const top = await getTop.json()
      const artists  = top.items.slice(0,10).map((art) => ({
        artist: art.name,
        url: art.external_urls.spotify,
        img: art.images[0].url
      }))

      res.status(200).send(artists)

    }