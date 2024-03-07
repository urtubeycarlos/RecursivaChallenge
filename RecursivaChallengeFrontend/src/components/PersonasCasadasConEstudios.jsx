import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const PersonasCasadasConEstudios = () => {
	const { personasFiltradas } = useSelector((state) => state.superliga);

	const columnsDef = [
		{ field: 'nombre', headerName: 'Nombre', sortable: true, width: 150 },
		{
			field: 'edad',
			headerName: 'Edad',
			type: 'number',
			sortable: true,
			width: 100,
		},
		{ field: 'equipo', headerName: 'Equipo', sortable: true, width: 200 },
	];

	return (
		<>
			<Grid container marginTop={'3rem'} marginBottom={'1rem'}>
				<Grid item md={12} xs={12}>
					<Typography variant='h6' gutterBottom>
						Personas casadas con estudios
					</Typography>
				</Grid>
				<Grid item md={12} xs={12}>
					<DataGrid
						rows={personasFiltradas}
						columns={columnsDef}
						initialState={{
							sorting: {
								orderBy: 'edad',
								sort: 'asc',
							},
							pagination: {
								paginationModel: { page: 0, pageSize: 5 },
							},
						}}
						pageSizeOptions={[5, 10]}
						getRowId={(row) =>
							row.nombre + row.edad + row.equipo + '-id'
						}
					></DataGrid>
				</Grid>
			</Grid>
		</>
	);
};

export default PersonasCasadasConEstudios;
