import React, { useState } from 'react';
import {
	Card,
	CardContent,
	CardActionArea,
	Input,
	TextField,
	Button,
	IconButton,
	Grid,
	CardHeader,
	LinearProgress,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { APP_VIEW, setView } from '../modules/app';
import { processCSV, setDatos } from '../modules/superliga';
import '../styles/FormArchivo.css';

const FormArchivo = () => {
	const dispatch = useDispatch();

	const [file, setFile] = useState(null);
	const [filename, setFilename] = useState('No hay archivo seleccionado');
	const [processing, setProcessing] = useState(false);
	const [errorDialog, setErrorDialog] = useState('');

	const determineFooterBgColour = () => {
		if (processing) return 'white';
		else if (!file) return '#BDBDBD';
		else return '#6c757d';
	};

	const postFile = async () => {
		if (!file) return;

		setProcessing(true);

		dispatch(processCSV({ file }))
			.then(({ payload }) => {
				setProcessing(false);
				dispatch(setDatos(payload));
				dispatch(setView(APP_VIEW.REPORTE));
			})
			.catch(() => {
				setProcessing(false);
				setErrorDialog(
					'No se pudo procesar el archivo. Intente de nuevo.'
				);
			});
	};

	return (
		<>
			<Dialog
				open={errorDialog !== ''}
				onClose={() => setErrorDialog('')}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>{'Error'}</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						{errorDialog}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setErrorDialog('')} autoFocus>
						Ok
					</Button>
				</DialogActions>
			</Dialog>
			<Card
				style={{
					width: '50%',
					margin: 'auto',
					marginTop: '10%',
				}}
			>
				<CardHeader
					title='Reporte de socios'
					style={{ background: '#1976D2', color: 'white' }}
				/>
				<CardContent id='fileFormCardContent'>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								id='outlined-basic'
								label='Nombre del archivo'
								variant='standard'
								value={filename}
								style={{ width: '100%', pointerEvents: 'none' }}
								readOnly
							/>
						</Grid>

						<Grid item xs={12}>
							<Input
								style={{ display: 'none' }}
								type='file'
								id='file'
								name='file'
								accept='.csv'
								onClick={() => {
									setFilename('No hay archivo seleccionado');
									setFile(null);
								}}
								onChange={(e) => {
									const selectedFile = e.target.files[0];
									if (
										selectedFile &&
										selectedFile.name.endsWith('.csv')
									) {
										setFile(selectedFile);
										setFilename(selectedFile.name);
									} else {
										setFilename(
											'Solo se permiten archivos .csv'
										);
									}
								}}
							/>
							<div id='labelInputArchivo'>
								<label
									htmlFor='file'
									style={{
										display: 'flex',
										alignItems: 'center',
									}}
								>
									<Button
										variant='contained'
										component='span'
									>
										Seleccionar archivo .CSV
									</Button>
								</label>
								<IconButton
									color='error'
									component='span'
									size='small'
									disabled={!file}
									onClick={() => {
										setFile(null);
										setFilename(
											'No hay archivo seleccionado'
										);
									}}
								>
									<DeleteIcon />
								</IconButton>
							</div>
						</Grid>
					</Grid>
				</CardContent>
				<CardActionArea
					disabled={!file}
					style={{ background: determineFooterBgColour() }}
					onClick={postFile}
				>
					<CardContent style={{ color: 'white' }}>
						{processing ? <LinearProgress /> : 'Enviar archivo'}
					</CardContent>
				</CardActionArea>
			</Card>
		</>
	);
};

export default FormArchivo;
