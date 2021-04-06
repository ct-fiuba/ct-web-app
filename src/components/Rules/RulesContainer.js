import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import RuleCard from "./RuleCard";
import AddRuleButton from './AddRuleButton'
import SaveChangesButton from './SaveChangesButton'
import TestRulesButton from './TestRulesButton'
import SimulateRulesButton from './SimulateRulesButton'
import Grid from '@material-ui/core/Grid';

function Rule({ rule, deleteRule }) {
	return (<RuleCard id={rule.id}
		contagionRisk={rule.contagionRisk}
		durationValue={rule.durationValue}
		durationCmp={rule.durationCmp}
		m2Value={rule.m2Value}
		m2Cmp={rule.m2Cmp}
		spaceValue={rule.spaceValue}
		index={rule.index}
		deleteRule={deleteRule} />);
}

const RulesList = React.memo(function RulesList({ rules, deleteRule }) {
	return rules.map((rule) => (
		<Rule rule={rule} key={rule.id} deleteRule={deleteRule} />
	));
});

const useStyles = makeStyles((theme) => ({
	container: {
		width: 'auto',
		paddingTop: '1px',
		paddingBottom: '1px',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		marginTop: '20px',
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			width: 600,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
		backgroundColor: '#edf4ff',
	},
	divContainer: {
		width: 'auto',
		paddingTop: '1px',
		paddingBottom: '1px',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		marginTop: '20px',
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			width: 600,
			marginLeft: 'auto',
			marginRight: 'auto',
		}
	}
}));

export default function RulesContainer(props) {
	const [state, setState] = useState({ rules: props.rules || [] });
	const classes = useStyles();

	React.useEffect(() => {
		setState({ rules: props.rules });
	}, [props.rules])

	return (
		<div className={classes.divContainer}>
			<Grid container>
				<Grid item xs={6}>
					<TestRulesButton rules={state.rules} />
				</Grid>
				<Grid item xs={6}>
					<SimulateRulesButton rules={state.rules} />
				</Grid>
			</Grid>
			<Grid container className={classes.container}>
				<Grid item xs={6}>
					<AddRuleButton addRule={props.addRule} />
				</Grid>
				<Grid item xs={6}>
					<SaveChangesButton saveChanges={props.saveChanges} canSaveChanges={props.canSaveChanges} />
				</Grid>
				<Grid item xs={12}>
					<DragDropContext onDragEnd={props.onDragEnd}>
						<Droppable droppableId="list">
							{provided => (
								<div ref={provided.innerRef} {...provided.droppableProps}>
									<RulesList rules={state.rules} deleteRule={props.deleteRule} />
									{provided.placeholder}
								</div>
							)}
						</Droppable>
					</DragDropContext>
				</Grid>
			</Grid>
		</div>
	);
}
