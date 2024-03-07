import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import FormArchivo from './views/FormArchivo';
import './App.css';
import { useSelector } from 'react-redux';
import { APP_VIEW } from './modules/app';
import Reporte from './views/Reporte';

function App() {
	const { view } = useSelector((state) => state.app);

	const renderView = () => {
		switch (view) {
			case APP_VIEW.FORM_ARCHIVO:
				return <FormArchivo />;
			case APP_VIEW.REPORTE:
				return <Reporte />;
			default:
				return <FormArchivo />;
		}
	};

	return <>{renderView()}</>;
}

export default App;
