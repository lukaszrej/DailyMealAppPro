import React from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import MealTableToolbar from '../toolbar/Toolbar';
import MealTableHead from '../head/Head';
import MealTableBody from '../body/Body';
import { useSelector } from 'react-redux';
import { getStoredProducts } from '../../../store/product/Product.selectors';
import { Product } from '../../../store/product/Product.types';
// import { deleteProduct } from '../../../store/product/Product.actions';
import useStyles from './styles';

const MealTable = () => {
	const classes = useStyles();
	// const dispatch = useDispatch();
	const storedProducts = useSelector(getStoredProducts);
	const [ selected, setSelected ] = React.useState<string[]>([]);

	const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			const newSelectedItems = storedProducts.map((product: Product) => product.food.label);
			setSelected(newSelectedItems);
			return;
		}
		setSelected([]);
	};

	const handleSelectClick = (event: React.MouseEvent<unknown>, name: string) => {
		const selectedIndex = selected.indexOf(name);
		let newSelected: string[] = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, name);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
		}

		setSelected(newSelected);
	};

	const isSelected = (name: string) => selected.indexOf(name) !== -1;

	const handleDeleteAllProducts = () => {
		console.log('handle delete products');
		// dispatch(deleteProduct());

	};

	if (storedProducts.length === 0) return null;
	else {
		return (
			<div className={classes.root}>
				<Paper className={classes.paper}>
					<MealTableToolbar numSelected={selected.length} handleDeleteAllProducts={handleDeleteAllProducts} />
					<TableContainer>
						<Table
							className={classes.table}
							aria-labelledby='tableTitle'
							size='medium'
							aria-label='enhanced table'
						>
							<MealTableHead
								numSelected={selected.length}
								onSelectAllClick={handleSelectAllClick}
								rowCount={storedProducts.length}
							/>
							<MealTableBody isSelected={isSelected} handleSelectClick={handleSelectClick} />
						</Table>
					</TableContainer>
				</Paper>
			</div>
		);
	}
};

export default MealTable;
