import React, {useEffect} from 'react';
import SingleQRForm from './SingleQRForm.js'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function NewQRForm(props) {
  const classes = useStyles();

	const transformInitialState = () => {
		let result = []
		props.initialState.forEach((value, i) => {
			result.push({
				key: i,
				data: value
			});
		});
		return {QRs: result};
	}

	const [state, setState] = React.useState(transformInitialState());

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
				openPlace: '',
				hasExit: false,
			}
		}
		let newQRs = JSON.parse(JSON.stringify(state.QRs));
		newQRs.push(newQR);
		setState({...state, QRs: newQRs});
	}

	const checkCompleteness = () => {
		props.completeFunction(isAllCompleted(state.QRs));
	}

	const reportInfo = (newQRs) => {
		let result = [];
		newQRs.forEach(qr => result.push(qr.data));
		props.obtainInfo(result);
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
