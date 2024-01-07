import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function Principal(props: any) {
    return (

        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 200 }}
                image={props.image}
                title="kung fu panda"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.descripcion}
                </Typography>
            </CardContent>
            <CardActions>
                <Button sx={{ mr: 8 }} size="small">Comprar</Button>
                <Button size="small">Agregar al carrito</Button>
            </CardActions>
        </Card>

    );
}

export default Principal;   