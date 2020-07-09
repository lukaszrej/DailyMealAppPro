import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import { Product } from '../../../store/product/Product.types';
import { useSelector } from 'react-redux';
import { getStoredProducts } from '../../../store/product/Product.selectors';

interface TableBodyProps {
	isSelected: (name: string) => boolean;
	handleClick: (event: React.MouseEvent<unknown>, name: string) => void;
}

const MealTableBody = (props: TableBodyProps) => {
	const storedProducts = useSelector(getStoredProducts);
	const { isSelected, handleClick } = props;

	return (
		<TableBody>
			{storedProducts.map((product: Product, index: number) => {
				const isItemSelected = isSelected(product.food.label);
				const labelId = `enhanced-table-checkbox-${index}`;

				return (
					<TableRow
						hover
						onClick={(event) => handleClick(event, product.food.label)}
						role='checkbox'
						aria-checked={isItemSelected}
						tabIndex={-1}
						key={product.food.foodId}
						selected={isItemSelected}
					>
						<TableCell padding='checkbox'>
							<Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
						</TableCell>
						<TableCell component='th' id={labelId} scope='row' padding='none'>
							{product.food.label}
						</TableCell>
						<TableCell align='right'>{Math.round(product.food.nutrients.ENERC_KCAL)}</TableCell>
						<TableCell align='right'>{Math.round(product.food.nutrients.FAT)}</TableCell>
						<TableCell align='right'>{Math.round(product.food.nutrients.CHOCDF)}</TableCell>
						<TableCell align='right'>{Math.round(product.food.nutrients.PROCNT)}</TableCell>
					</TableRow>
				);
			})}
		</TableBody>
	);
	// }
};

export default MealTableBody;