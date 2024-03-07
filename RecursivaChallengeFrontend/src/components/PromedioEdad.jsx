import React from 'react';
import { Grid, Typography, Alert } from '@mui/material';
import { useSelector } from 'react-redux';

const PromedioEdad = () => {
	const promedio = useSelector(
		(state) => state.superliga.promedioEdadEquipoSeleccionado
	);

	return (
		<>
			<Grid container marginBottom={'1rem'}>
				<Grid item md={12} xs={12}>
					<Alert severity='info'>
						La edad promedio de los hinchas de Racing es de{' '}
						{promedio} años
					</Alert>
				</Grid>
			</Grid>
		</>
	);
};

export default PromedioEdad;
