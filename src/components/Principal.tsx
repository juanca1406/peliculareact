import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function Principal() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="./img/rey_recesvinto.png"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    kung fu panda
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Es un panda gigante que de manera improbable es elegido como el Guerrero Dragón. Él es hijo adoptivo del Sr.
                    Ping, y es uno de los estudiantes del maestro Shifu. La profecía se refiere a Po como el Guerrero Dragón o guerrero de blanco y negro.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Comprar</Button>
                <Button size="small" >Agregar al carrito</Button>
            </CardActions>
        </Card>
    );
}