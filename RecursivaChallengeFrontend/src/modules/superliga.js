import {
	createSlice,
	createAsyncThunk,
	configureStore,
} from '@reduxjs/toolkit';

const initialState = {
	datos: [],
	personas: [],
	personasFiltradas: [],
	nombresMasComunes: [],
	equipos: [],
	agrupamientoPorEquipo: [],
	promedioEdadEquipoSeleccionado: 0,
	loading: false,
};

export const processCSV = createAsyncThunk('processCSV', async (payload) => {
	const { file } = payload;
	const formData = new FormData();
	formData.append('file', file);

	const url = import.meta.env.VITE_API_URL + '/SuperLiga/ProcesarCSV';
	const response = await fetch(url, {
		method: 'POST',
		body: formData,
	});

	const data = await response.json();
	return data.registros;
});

const promedioEdadEquipo = (personas, equipo) => {
	return (
		personas
			.filter((persona) => persona.equipo === equipo)
			.reduce((acc, persona) => acc + persona.edad, 0) /
		personas.filter((persona) => persona.equipo === equipo).length
	).toFixed(0);
};

const nombresMasComunes = (personas, equipo, limite) => {
	const calculoNombresMasComunes = personas
		.filter((persona) => persona.equipo === equipo)
		.reduce((acc, persona) => {
			if (acc[persona.nombre]) {
				acc[persona.nombre]++;
			} else {
				acc[persona.nombre] = 1;
			}
			return acc;
		}, {});

	return Object.entries(calculoNombresMasComunes)
		.sort((a, b) => b[1] - a[1])
		.slice(0, limite)
		.map(([nombre, cantidad]) => ({ nombre, cantidad }));
};

const reporteEquipos = (equipos, personas) => {
	const agrupamientoPorEquipos = {};

	equipos.forEach((equipo) => {
		const personasEquipo = personas.filter(
			(persona) => persona.equipo === equipo
		);

		if (!agrupamientoPorEquipos[equipo])
			agrupamientoPorEquipos[equipo] = {};

		agrupamientoPorEquipos[equipo].cantidadSocios = personasEquipo.length;

		agrupamientoPorEquipos[equipo].promedioEdad =
			personasEquipo.reduce((acc, persona) => acc + persona.edad, 0) /
			personasEquipo.length;

		agrupamientoPorEquipos[equipo].menorEdadRegistrada =
			personasEquipo.reduce(
				(acc, persona) => (acc < persona.edad ? acc : persona.edad),
				100
			);

		agrupamientoPorEquipos[equipo].mayorEdadRegistrada =
			personasEquipo.reduce(
				(acc, persona) => (acc > persona.edad ? acc : persona.edad),
				0
			);
	});

	return Object.entries(agrupamientoPorEquipos)
		.map(([equipo, datos]) => ({ equipo, ...datos }))
		.sort((a, b) => b.cantidadSocios - a.cantidadSocios);
};

export const superligaSlice = createSlice({
	name: 'superliga',
	initialState,
	reducers: {
		setDatos: (state, action) => {
			// Guardo los datos 'crudos'
			state.datos = action.payload;

			// Elimino equipos repetidos
			state.equipos = Array.from(
				new Set(action.payload.map((registro) => registro.equipo))
			);

			// Elimino personas repetidas
			state.personas = Array.from(
				new Set(
					action.payload.map((registro) => JSON.stringify(registro))
				)
			).map((registro) => JSON.parse(registro));

			state.promedioEdadEquipoSeleccionado = promedioEdadEquipo(
				state.personas,
				'Racing'
			);

			state.personasFiltradas = state.personas
				.filter(
					(persona) =>
						persona.estadoCivil === 'Casado' &&
						persona.nivelEstudios === 'Universitario'
				)
				.sort((a, b) => a.edad - b.edad)
				.slice(0, 100);

			state.nombresMasComunes = nombresMasComunes(
				state.personas,
				'River',
				5
			);

			state.agrupamientoPorEquipo = reporteEquipos(
				state.equipos,
				state.personas
			);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(processCSV.pending, (state) => {
				state.loading = true;
			})
			.addCase(processCSV.fulfilled, (state, action) => {
				state.loading = false;
				state.datos = action.payload;
			});
	},
});

export const { setDatos } = superligaSlice.actions;

export const superligaStore = configureStore({
	reducer: superligaSlice.reducer,
});

export default superligaSlice.reducer;
