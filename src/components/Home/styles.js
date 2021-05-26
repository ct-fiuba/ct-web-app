import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	ownersButton: {
		fontSize: '20px',
		textTransform: 'uppercase',
		margin: '20px',
	},
	adminsButton: {
		fontSize: '15px',
		textTransform: 'uppercase',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default useStyles;