import { makeStyles } from '@material-ui/core/styles';

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
	},
	circularProgress: {
		width: '70px !important',
		height: '70px !important',
	},
	circularProgressContainer: {
		textAlign: 'center',
		marginTop: '200px',	
		marginBottom: '200px',	
	}
}));

export default useStyles;