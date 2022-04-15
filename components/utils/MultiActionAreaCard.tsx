import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Link from 'next/link';

interface multiActionAreaCardProps {
  nombre: string;
  descripcion: string;
  imagen: string;
  url: string;
  documentacion: string;
}

export default function MultiActionAreaCard(props: multiActionAreaCardProps) {
  return (
    <Card sx={{ maxWidth: 345, height:'100%'}}>
      <Link href={props.url} passHref>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.imagen}
            alt="Programming"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.descripcion}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <a target="_blank" href={props.documentacion} rel="noopener noreferrer">
          <Button size="small" color="primary">
            Docs
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
