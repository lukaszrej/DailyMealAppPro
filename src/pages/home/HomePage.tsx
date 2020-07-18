import React from 'react';
import { useSelector } from 'react-redux';
import { getShowAlert } from '../../store/start/Start.selectors';
import { getUserName } from '../../store/user/User.selectors';
import { getMeals } from '../../store/meal/Meal.selectors';
import Alert from '../../components/alert/Alert';
import ProductAdd from '../../components/productAdd/ProductAdd';
import UserDetails from '../../components/userDetails/UserDetails';
import UserNeed from '../../components/userNeed/UserNeed';
import MealCounter from '../../components/mealCounter/MealCounter';
import useStyles from './styles';

const HomePage: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const showAlert = useSelector(getShowAlert);
	const userName = useSelector(getUserName);
	const meals = useSelector(getMeals);

	return (
		<React.Fragment>
			<main className={classes.root}>
				<article>
					<ProductAdd />
				</article>
				<aside>
					<UserDetails />
					<UserNeed />
					<MealCounter meals={meals}/>
				</aside>
			</main>
			{showAlert && <Alert severity='info'>Hello {userName ? userName : 'User'}!</Alert>}
		</React.Fragment>
	);
};

export default HomePage;
