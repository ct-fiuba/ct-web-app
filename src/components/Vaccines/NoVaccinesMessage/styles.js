import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	gridItem: {
		textAlign: '-webkit-center',
		marginBottom: '50px',
	},
	iconContainer: {
		marginTop: '50px',
		width: '150px',
		height: '150px',
	},
	icon: {
		width: '100px',
		height: '100px',
		color: 'lightgrey',
	},
	message: {
    fontSize: '25px',
    color: 'grey',
    textAlign: '-webkit-center',
	}
}));

export default useStyles;
