import React, { useState } from 'react';
import { Grid, Alert, List, ListItem } from '@mui/material';
import { useSelector } from 'react-redux';

const NombresMasComunes = () => {
	const { nombresMasComunes } = useSelector((state) => state.superliga);
	const [equipo] = useState('River');

	return (
		<>
			<Grid container marginBottom={'1rem'}>
				<Grid item md={12} xs={12}>
					<Alert severity='info'>
						Nombres más comunes de hinchas de {equipo}:
						<Grid container alignContent={'left'}>
							<Grid item md={4} xs={4}>
								<List style={{ paddingLeft: 0 }}>
									{nombresMasComunes.map((p, i) => (
										<ListItem
											key={i}
											style={{ paddingLeft: 0 }}
										>
											{i + 1}: {p.nombre}
										</ListItem>
									))}
								</List>
							</Grid>
						</Grid>
					</Alert>
				</Grid>
			</Grid>
		</>
	);
};

export default NombresMasComunes;
