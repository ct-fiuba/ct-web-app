import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import RuleCard from "./RuleCard";

const initialRules = Array.from({ length: 10 }, (v, k) => k).map(k => {
	const custom: Rule = {
		id: k,
		contagionRisk: `Contagio ${k}`
	};

	return custom;

});

function Rule({ rule, index }) {
	return (<RuleCard id={rule.id}
		contagionRisk={rule.contagionRisk}
		index={index} />);
}

const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};

const RulesList = React.memo(function RulesList({ rules }) {
	return rules.map((rule, index) => (
		<Rule rule={rule} index={index} key={rule.id} />
	));
});

const useStyles = makeStyles((theme) => ({
	container: {
		width: 'auto',
		paddingTop: '1px',
		paddingBottom: '1px',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			width: 600,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
		backgroundColor: '#dbdbdb',
	}
}));

export default function RulesContainer() {
	const [state, setState] = useState({ rules: initialRules });
	const classes = useStyles();

	function onDragEnd(result) {
		if (!result.destination) {
			return;
		}

		if (result.destination.index === result.source.index) {
			return;
		}

		const rules = reorder(
			state.rules,
			result.source.index,
			result.destination.index
		);

		setState({ rules });
	}

	return (
		<div className={classes.container}>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="list">
					{provided => (
						<div ref={provided.innerRef} {...provided.droppableProps}>
							<RulesList rules={state.rules} />
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
}
