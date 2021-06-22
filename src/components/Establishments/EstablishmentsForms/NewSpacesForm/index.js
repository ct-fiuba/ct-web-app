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
		return { spaces: result };
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
			space.openPlace !== '');
	}

	const addNewSpace = () => {
		if (!isAllCompleted(state.spaces))
			return
		const newSpace = {
			key: state.spaces.length,
			data: {
				name: '',
				m2: '',
				estimatedVisitDuration: '',
				openPlace: '',
				n95Mandatory: false,
				hasExit: false,
			}
		}
		let newSpaces = JSON.parse(JSON.stringify(state.spaces));
		newSpaces.push(newSpace);
		setState({ ...state, spaces: newSpaces });
	}

	const checkCompleteness = useCallback(() => {
		completeFunction(isAllCompleted(state.spaces));
	}, [completeFunction, isAllCompleted, state.spaces]);

	const reportInfo = (newSpaces) => {
		let result = [];
		newSpaces.forEach(space => result.push(space.data));
		obtainInfo(result);
	}

	const obtainInfoSingleSpace = (key, info) => {
		let newSpaces = JSON.parse(JSON.stringify(state.spaces));
		newSpaces[key].data = info;
		isAllCompleted(newSpaces);
		reportInfo(newSpaces);
		setState({ ...state, spaces: newSpaces });
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
				disabled={!isAllCompleted(state.spaces)}
			>
				Añadir espacio
			</Button>
			{state.spaces.map((space) => (
				<NewSingleSpaceForm key={space.key} index={space.key} initialState={space.data} obtainInfo={obtainInfoSingleSpace} storeType={storeType} />
			))}
		</React.Fragment>
	);
}
