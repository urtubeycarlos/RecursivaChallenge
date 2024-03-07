import React from 'react';
import {
	Grid,
	Typography,
	Card,
	CardContent,
	CardActionArea,
	Input,
	TextField,
	Button,
	IconButton,
	CardHeader,
	LinearProgress,
} from '@mui/material';
import { useSelector } from 'react-redux';
import PromedioEdad from '../components/PromedioEdad';
import CantidadPersonas from '../components/PersonasRegistradas';
import PersonasCasadasConEstudios from '../components/PersonasCasadasConEstudios';
import NombresMasComunes from '../components/NombresMasComunes';
import ReporteAgrupamientoEquipos from '../components/ReporteAgrupamientoEquipos';

const ReporteGeneral = () => {
	return (
		<>
			<Card
				style={{
					width: '90%',
					margin: 'auto',
					marginTop: '2%',
				}}
			>
				<CardHeader
					title='Reporte Socios CSV'
					style={{ background: '#1976D2', color: 'white' }}
				/>

				<CardContent style={{ padding: '2rem' }}>
					<CantidadPersonas />
					<PromedioEdad />
					<NombresMasComunes />
					<PersonasCasadasConEstudios />
					<ReporteAgrupamientoEquipos />
				</CardContent>
			</Card>
		</>
	);
};

export default ReporteGeneral;
