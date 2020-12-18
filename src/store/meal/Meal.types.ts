import { Product } from '../product/Product.types';

export interface MealState {
	meals: Product[];
	isMealAdded: boolean;
}

export const STORE_MEAL = 'STORE_MEAL';
export interface StoreMealAction {
	type: typeof STORE_MEAL;
	payload: Product[];
}

export const SET_IS_MEAL_ADDED = 'SET_IS_MEAL_ADDED';
export interface SetIsMealAddedAction {
	type: typeof SET_IS_MEAL_ADDED;
}

export type allMealActions =
	StoreMealAction |
	SetIsMealAddedAction;
