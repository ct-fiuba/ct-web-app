import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import RulesList from "../RulesList";
import AddRuleButton from '../AddRuleButton';
import SaveChangesButton from '../SaveChangesButton'
import TestRulesButton from '../TestRulesButton'
import SimulateRulesButton from '../SimulateRulesButton'
import EditVaccinesButton from '../../Vaccines/EditVaccinesButton'
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import NoRulesMessage from '../NoRulesMessage';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function RulesContainer({ rules, vaccines, getCurrentVaccines, addRule, saveChanges, canSaveChanges, onDragEnd, deleteRule, duplicateRule, newRuleIntialValue, importRules }) {
	const [state, setState] = useState({ rules: rules || [], vaccines: vaccines || [] });
  	const [addRuleFormOpen, setAddRuleFormOpen] = useState(false);
	const classes = useStyles();

	React.useEffect(() => {
		setState({ rules: rules, vaccines: vaccines });
	}, [rules, vaccines])

	return (
		<div className={classes.divContainer}>
			<Grid container>
				<Grid item xs={6}>
					<TestRulesButton rules={state.rules} vaccines={state.vaccines} />
				</Grid>
				<Grid item xs={6}>
					<SimulateRulesButton rules={state.rules} onImport={importRules} />
				</Grid>
				<Grid item xs={12}>
					<EditVaccinesButton vaccines={state.vaccines} getCurrentVaccines={getCurrentVaccines} />
				</Grid>
			</Grid>
			<Grid container className={classes.container}>
				<Grid item xs={6}>
					<AddRuleButton addRule={addRule} vaccines={state.vaccines} initialValues={newRuleIntialValue} duplicateRule={duplicateRule} addRuleFormOpen={addRuleFormOpen} setAddRuleFormOpen={setAddRuleFormOpen} />
				</Grid>
				<Grid item xs={6}>
					<SaveChangesButton saveChanges={saveChanges} canSaveChanges={canSaveChanges} />
				</Grid>
				<Grid item xs={12}>

					{(state.rules === null || state.rules === undefined) &&
						<div className={classes.circularProgressContainer}>
							<CircularProgress className={classes.circularProgress} />
						</div>
					}
					{state.rules !== null && state.rules.length === 0 && <NoRulesMessage />}
					{state.rules !== null && state.rules.length > 0 &&
						<DragDropContext onDragEnd={onDragEnd}>
							<Droppable droppableId="list">
								{provided => (
									<div ref={provided.innerRef} {...provided.droppableProps}>
										<RulesList rules={state.rules} deleteRule={deleteRule} duplicateRule={duplicateRule} setAddRuleFormOpen={setAddRuleFormOpen} />
										{provided.placeholder}
									</div>
								)}
							</Droppable>
						</DragDropContext>
					}
				</Grid>
			</Grid>
		</div>
	);
}
