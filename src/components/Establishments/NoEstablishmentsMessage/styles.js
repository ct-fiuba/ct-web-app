import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	gridItem: {
		textAlign: '-webkit-center',
	},
	iconContainer: {
		marginTop: '50px',
		width: '300px',
		height: '300px',
	},
	icon: {
		width: '250px',
		height: '250px',
		color: 'lightgrey',
	},
	message: {
    fontSize: '25px',
    color: 'grey',
    textAlign: '-webkit-center',
	}
}));

export default useStyles;