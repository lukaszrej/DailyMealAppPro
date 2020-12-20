import { createStyles, lighten, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(1),
			'& > div': {
				flex: '1 1 100%',
				textAlign: 'center'
			}
		},
		highlight:
			theme.palette.type === 'light'
				? {
					color: theme.palette.secondary.main,
					backgroundColor: lighten(theme.palette.secondary.light, 0.85)
				}
				: {
					color: theme.palette.text.primary,
					backgroundColor: theme.palette.secondary.dark
				}
	})
);
