import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from 'react-hook-form';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function Registrar() {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (envio: any) => {
        console.log(envio);
    };

    return (
        <div className='ContenedorRegistrar'>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1>Registrar</h1>
                <br />
                <TextField id="nombre" label="Nombre Completo" variant="outlined" {...register('nombre', {
                    required: true,
                    maxLength: 10
                })}
                />
                {errors.nombre?.type === 'required' &&
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Alert severity="error"   >
                            El campo es requerido
                        </Alert>
                    </div>
                }
                <br /><br />
                <TextField id="edad" label="Edad" variant="outlined" type='number' {...register('edad', {
                    required: true

                })} />
                {errors.edad?.type === 'required' && (
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Alert severity="error" >
                            El campo es requerido
                        </Alert>
                    </div>
                )}
                <br /><br />
                <TextField id="correo" label="Correo electronico" type='text' variant="outlined" {...register('correo', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    required: true
                })} />
                {errors.correo?.type === 'pattern' && (
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Alert severity="error" >
                            El correo es incorreto
                        </Alert>
                    </div>
                )}
                {errors.correo?.type === 'required' && (
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Alert severity="error" >
                            El campo es requerido
                        </Alert>
                    </div>
                )}
                <br /><br />
                <TextField id="contrase" label="Contraseña" variant="outlined" {...register('contraseña')} />
                <br /><br />
                <TextField id="contraseva" label="Confirmar Contraseña" variant="outlined" {...register('contraseñavale')} />
                <br /><br />
                <Button type='submit' variant="outlined" endIcon={<SendIcon />}>
                    Registrar
                </Button>
            </Box>
        </div >
    );
}