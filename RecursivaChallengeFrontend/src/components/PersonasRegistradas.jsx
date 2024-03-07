import React from 'react';
import { Grid, Alert } from '@mui/material';
import { useSelector } from 'react-redux';

const CantidadPersonas = () => {
	const { personas } = useSelector((state) => state.superliga);

	return (
		<>
			<Grid container marginBottom={'1rem'}>
				<Grid item md={12} xs={12}>
					<Alert severity='info'>
						Hay {personas.length} personas registradas
					</Alert>
				</Grid>
			</Grid>
		</>
	);
};

export default CantidadPersonas;
