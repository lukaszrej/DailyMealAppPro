import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			marginTop: 24,
			width: '80%',
			'& > div': {
				width: '100%'
			},
			'& .MuiButton-root': {
				width: '100%',
				marginTop: 18
			}
		}
	})
);

export default useStyles;