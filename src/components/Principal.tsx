import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function Principal(props: any) {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    }

    return (

        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 200 }}
                image={props.image}
                title={props.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {contador}
                    {props.titulo}
                </Typography>
                <Typography variant="body2">
                    {props.descripcion}
                </Typography>
            </CardContent>
            <CardActions>
                <Button sx={{ mr: 8 }} size="small">Comprar</Button>
                <Button size="small" onClick={incrementar}>Agregar al carrito</Button>
            </CardActions>
        </Card>

    );
}

export default Principal;   