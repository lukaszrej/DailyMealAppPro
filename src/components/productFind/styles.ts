import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			marginTop: 24,
			marginBottom: 8,
			width: '80%',
			'& > div': {
				width: '100%'
			},
			'& .MuiButton-root': {
				width: '100%',
				marginTop: 16,
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