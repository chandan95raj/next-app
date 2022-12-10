import {useEffect, useState} from 'react';
import { Card, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
const Index=()=>{
  const [products,setProducts] = useState(null);
    useEffect(()=>{
        const req = async ()=>{
            try{
                const {data} = await axios({
                    method:'get',
                    url:'https://fakestoreapi.com/products?limit=4'
                })
                setProducts(data);
            }
            catch(err)
            {
                console.log(err.response.data);
            }
        }
        req();
    },[])
return(
  <>
  <Box sx={{bgcolor:'#F3EFFE',height:'100vh'}}>
  <Head>
    <title>Axios Practice</title>
    <meta name="description" content="Chandan Raj" />
    <link rel="icon" href="/chandan-raj.jpg" />
  </Head>
  <Container sx={{py:2}} >
    <Grid container spacing={3}>
  {
    products && products.map((item,index)=>(
      <Grid item xs={12} md={3} className="rounded text-center" key={index}>
        <Card sx={{py:2}}>
          <Image
            src={item.image}
            width={265}
            height={250}
            alt={item.title}
          />
          <Stack column='column' spacing={2}>
            <Typography variant="h6">
                {item.title.slice(0,10)}
            </Typography>
            <Typography variant="caption">
                {item.description.slice(0,55)}
            </Typography>
          </Stack>
        </Card>
      </Grid>
    ))
    }   
    </Grid>
  </Container>
  </Box>
  </>
)
  }
export default Index;