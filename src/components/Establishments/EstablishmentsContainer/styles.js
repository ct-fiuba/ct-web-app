import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	divContainer: {
		width: 'auto',
		paddingTop: '1px',
		paddingBottom: '1px',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		marginTop: '20px',
		[theme.breakpoints.up(1200 + theme.spacing(2) * 2)]: {
			width: 1200,
			marginLeft: 'auto',
			marginRight: 'auto',
		}
	},
	title: {
		fontSize: '56px',
		color: 'darkslategrey'
	},
	circularProgress: {
		width: '70px !important',
		height: '70px !important',
	},
	circularProgressContainer: {
		textAlign: 'center',
		marginTop: '200px',	
	}
}));

export default useStyles;