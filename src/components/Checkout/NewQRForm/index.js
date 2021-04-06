import React, { useState, useEffect } from 'react';
import SingleQRForm from '../SingleQRForm'
import { Button } from '@material-ui/core';
import useStyles from './styles';

export default function NewQRForm({initialState, completeFunction, obtainInfo}) {
  const classes = useStyles();

	const transformInitialState = () => {
		let result = []
		initialState.forEach((value, i) => {
			result.push({
				key: i,
				data: value
			});
		});
		return {QRs: result};
	}

	const [state, setState] = useState(transformInitialState());

	useEffect(() => {
    checkCompleteness();
  });

	const isAllCompleted = (newQRs) => {
		let result = true;
		newQRs.forEach(qr => result = result && allFieldsCompleted(qr.data));
		return result;
	}

  const allFieldsCompleted = (qr) => {
		return (qr.name !== '' &&
			qr.m2 !== '' &&
      		qr.openPlace !== '');
	}

	const addNewQR = () => {
		if (!isAllCompleted(state.QRs))
			return
		const newQR = {
			key: state.QRs.length,
			data: {
				name: '',
				m2: '',
				estimatedVisitDuration: '',
				openPlace: '',
				hasExit: false,
			}
		}
		let newQRs = JSON.parse(JSON.stringify(state.QRs));
		newQRs.push(newQR);
		setState({...state, QRs: newQRs});
	}

	const checkCompleteness = () => {
		completeFunction(isAllCompleted(state.QRs));
	}

	const reportInfo = (newQRs) => {
		let result = [];
		newQRs.forEach(qr => result.push(qr.data));
		obtainInfo(result);
	}

	const obtainInfoSingleQr = (key, info) => {
		let newQRs = JSON.parse(JSON.stringify(state.QRs));
		newQRs[key].data = info;
		isAllCompleted(newQRs);
		reportInfo(newQRs);
		setState({...state, QRs: newQRs});
	}

  return (
    <React.Fragment>
			<Button
				variant="contained"
				color="primary"
				onClick={addNewQR}
				className={classes.button}
				disabled={!isAllCompleted(state.QRs)}
			>
				Añadir QR
			</Button>
			{state.QRs.map((qr) => (
      	<SingleQRForm key={qr.key} index={qr.key} initialState={qr.data} obtainInfo={obtainInfoSingleQr}/>
			))}
    </React.Fragment>
  );
}
