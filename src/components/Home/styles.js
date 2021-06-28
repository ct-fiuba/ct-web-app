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
}));

export default useStyles;