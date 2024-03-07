import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const ReporteAgrupamientoEquipos = () => {
	const { agrupamientoPorEquipo } = useSelector((state) => state.superliga);

	const columnsDef = [
		{
			field: 'cantidadSocios',
			headerName: 'Cant. de Socios',
			type: 'number',
			sortable: true,
			width: 150,
			align: 'center',
		},
		{
			field: 'equipo',
			headerName: 'Equipo',
			sortable: true,
			width: 200,
			align: 'left',
		},
		{
			field: 'promedioEdad',
			headerName: 'Promedio Edad',
			type: 'number',
			sortable: true,
			width: 150,
			align: 'center',
		},
		{
			field: 'menorEdadRegistrada',
			headerName: 'Menor Edad',
			type: 'number',
			sortable: true,
			width: 150,
			align: 'center',
		},
		{
			field: 'mayorEdadRegistrada',
			headerName: 'Mayor Edad',
			type: 'number',
			sortable: true,
			width: 150,
			align: 'center',
		},
	];

	return (
		<>
			<Grid container marginTop={'3rem'} marginBottom={'1rem'}>
				<Grid item md={12} xs={12}>
					<Typography variant='h6' gutterBottom>
						Reporte por Equipo
					</Typography>
				</Grid>
				<Grid item md={12} xs={12}>
					<DataGrid
						rows={agrupamientoPorEquipo}
						columns={columnsDef}
						initialState={{
							pagination: {
								paginationModel: { page: 0, pageSize: 10 },
							},
						}}
						pageSizeOptions={[10, 20]}
						getRowId={(row) =>
							row.nombre + row.edad + row.equipo + '-id'
						}
					></DataGrid>
				</Grid>
			</Grid>
		</>
	);
};

export default ReporteAgrupamientoEquipos;
