import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexWrap: 'wrap',
			flexDirection: 'column'
		},
		form: {
			display: 'flex',
			flexDirection: 'column'
		},
		fieldset: {
			marginTop: 16,
			marginBottom: 8
		},
		radioGroup: {
			flexDirection: 'row',
			justifyContent: 'center'
		},
		button: {
			marginTop: 16,
			fontSize: 18,
			minHeight: 48,
			background: '#00A8CC',
			color: 'white',
			'&:hover': {
				background: '#025997'
			}
		},
		formControl: {
			minWidth: 120,
			marginTop: 16,
			marginBottom: 8
		}
	})
);

export default useStyles;