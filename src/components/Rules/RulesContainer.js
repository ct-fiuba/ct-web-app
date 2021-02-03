import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import RuleCard from "./RuleCard";

function Rule({ rule, index }) {
	return (<RuleCard id={rule.id}
		contagionRisk={rule.contagionRisk}
		durationValue={rule.durationValue}
		durationCmp={rule.durationCmp}
		m2Value={rule.m2Value}
		m2Cmp={rule.m2Cmp}
		spaceValue={rule.spaceValue}
		index={index} />);
}

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

export default function RulesContainer(props) {
	const [state, setState] = useState({ rules: props.rules || [] });
	const classes = useStyles();

	React.useEffect(() => {
		setState({rules: props.rules});
	}, [props.rules])

	return (
		<div className={classes.container}>
			<DragDropContext onDragEnd={props.onDragEnd}>
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
