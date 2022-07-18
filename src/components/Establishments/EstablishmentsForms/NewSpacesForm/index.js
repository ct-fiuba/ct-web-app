import React, { useState, useEffect, useCallback } from 'react';
import NewSingleSpaceForm from '../NewSingleSpaceForm'
import { Button } from '@material-ui/core';
import useStyles from './styles';

export default function NewSpacesForm({ initialState, completeFunction, obtainInfo, storeType }) {
	const classes = useStyles();

	const transformInitialState = () => {
		let result = []
		initialState.forEach((value, i) => {
			result.push({
				key: i,
				data: value
			});
		});
		return result;
	}

	const [state, setState] = useState(transformInitialState());

	const isAllCompleted = useCallback((newSpaces) => {
		let result = true;
		newSpaces.forEach(space => result = result && allFieldsCompleted(space.data));
		return result;
	}, []);

	const allFieldsCompleted = (space) => {
		return (space.name !== '' &&
			space.m2 !== '' &&
			space.openSpace !== '');
	}

	const deleteSpaceFromForm = (key) => {
		let newSpaces = JSON.parse(JSON.stringify(state));
		newSpaces = newSpaces.filter(space => space.key !== key);
		newSpaces.forEach(space => {
			if (space.key > key) {
				space.key -= 1;
			}
		});
		reportInfo(newSpaces);
		setState(newSpaces);
	}

	const addNewSpace = () => {
		if (!isAllCompleted(state))
			return
		const newSpace = {
			key: state.length,
			data: {
				name: '',
				m2: '',
				estimatedVisitDuration: '',
				openSpace: '',
				n95Mandatory: false,
				hasExit: false,
			}
		}
		let newSpaces = JSON.parse(JSON.stringify(state));
		newSpaces.push(newSpace);
		reportInfo(newSpaces);
		setState(newSpaces);
	}

	const checkCompleteness = useCallback(() => {
		completeFunction(isAllCompleted(state));
	}, [completeFunction, isAllCompleted, state]);

	const reportInfo = (newSpaces) => {
		let result = [];
		newSpaces.forEach(space => result.push(space.data));
		obtainInfo(result);
	}

	const obtainInfoSingleSpace = (key, info) => {
		let newSpaces = JSON.parse(JSON.stringify(state));
		newSpaces[key].data = info;
		isAllCompleted(newSpaces);
		reportInfo(newSpaces);
		setState(newSpaces);
	}

	useEffect(() => {
    checkCompleteness();
  }, [state, checkCompleteness]);

	return (
		<React.Fragment>
			<Button
				variant="contained"
				color="primary"
				onClick={addNewSpace}
				className={classes.button}
				disabled={!isAllCompleted(state)}
			>
				Añadir espacio
			</Button>
			{state.map((space) => (
				<NewSingleSpaceForm
					key={space.key}
					initialIndex={space.key}
					initialName={space.data.name}
					initialM2={space.data.m2}
					initialEstimatedVisitDuration={space.data.estimatedVisitDuration}
					initialOpenSpace={space.data.openSpace}
					initialN95Mandatory={space.data.n95Mandatory}
					initialHasExit={space.data.hasExit}
					obtainInfo={obtainInfoSingleSpace}
					storeType={storeType}
					deleteSpaceFromForm={state.length > 1 ? deleteSpaceFromForm : null }
				/>
			))}
		</React.Fragment>
	);
}
