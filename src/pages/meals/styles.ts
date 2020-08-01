import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			'& h6, & h3': {
				padding: 24
			},
			'& h3': {
				paddingTop: 0
			},
			'& > section': {
				width: '100%',
				marginRight: 24
			},
			'& div:first-of-type': {
				marginBottom: 24
			}
		},
		buttons: {
			display: 'flex',
			justifyContent: 'center',
			marginTop: 48,
			marginBottom: 24,
			'& button': {
				background: '#00A8CC',
				color: 'white',
				'&:hover': {
					background: '#025997'
				}
			}
		}
	})
);

export default useStyles;