import { LOADING, FIND_PRODUCT, STORE_PRODUCT, DELETE_PRODUCT, allProductActionTypes } from './Product.types';
import { Product } from '../../store/product/Product.types';

interface ProductState {
	isLoading: boolean;
	foundProducts: Product[];
	storedProducts: Product[];
}

export const initialState: ProductState = {
	isLoading: false,
	foundProducts: [],
	storedProducts: []
};

export const ProductReducer = (state = initialState, action: allProductActionTypes) => {
	switch (action.type) {
		case LOADING:
			return {
				...state,
				isLoading: true
			};
		case FIND_PRODUCT:
			return {
				...state,
				foundProducts: action.payload,
				isLoading: false
			};
		case STORE_PRODUCT:
			return {
				...state,
				storedProducts: [ ...state.storedProducts, action.payload ],
				foundProducts: []
			};
		case DELETE_PRODUCT:
			return {
				...state,
				storedProducts: action.payload
			};
		default:
			return state;
	}
};
