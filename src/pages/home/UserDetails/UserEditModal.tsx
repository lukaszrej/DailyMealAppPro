import { useState, ChangeEvent, SyntheticEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createUser, calculateDailyNeed } from '../../../store/user/User.actions';
import { openAlert } from '../../../store/alert/Alert.actions';
import { UserEditProps } from './types';
import { ModalTitle } from '../../../components/ModalTitle';
import { Form } from '../../../components/Form';
import { Dialog } from '../../../styles';
import * as selector from '../../../store/user/User.selectors';
import * as T from '../../../constants/constants';

export const UserEditModal = (props: UserEditProps) => {
	const { handleClose, isModalOpen, setIsModalOpen } = props;
	const dispatch = useDispatch();

	const currentName = useSelector(selector.getUserName);
	const [ name, setName ] = useState(currentName);
	const currentHeight = useSelector(selector.getUserHeight);
	const [ height, setHeight ] = useState(currentHeight);
	const currentWeight = useSelector(selector.getUserWeight);
	const [ weight, setWeight ] = useState(currentWeight);
	const currentAge = useSelector(selector.getUserAge);
	const [ age, setAge ] = useState(currentAge);
	const currentGender = useSelector(selector.getUserGender);
	const [ gender, setGender ] = useState(currentGender);
	const currentActivityLevel = useSelector(selector.getActivityLevel);
	const [ activityLevel, setActivityLevel ] = useState(currentActivityLevel);

	const onActivityLevelChange = (event: ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
		setActivityLevel((event.target as HTMLInputElement).value);
	};

	const onGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
		setGender((event.target as HTMLInputElement).value);
	};

	const onEditSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		dispatch(createUser({ name, height, weight, age, gender, activityLevel }));
		dispatch(calculateDailyNeed({ height, weight, age, gender, activityLevel }));

		localStorage.setItem('user', JSON.stringify({ name, height, weight, age, gender, activityLevel }));
		setIsModalOpen(false);

		if (
			name !== currentName ||
			height !== currentHeight ||
			weight !== currentWeight ||
			age !== currentAge ||
			gender !== currentGender ||
			activityLevel !== currentActivityLevel
		) {
			dispatch(openAlert(T.DATA_CORRECTLY_UPDATED, 'success'));
		}
	};

	return (
		<Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={isModalOpen}>
			<ModalTitle id='customized-dialog-title' onClose={handleClose}>
				{T.EDIT_USER_DATA}
			</ModalTitle>

			<Form
				onSubmit={onEditSubmit}
				name={name}
				setName={setName}
				height={height}
				setHeight={setHeight}
				weight={weight}
				setWeight={setWeight}
				age={age}
				setAge={setAge}
				activityLevel={activityLevel}
				onActivityLevelChange={onActivityLevelChange}
				gender={gender}
				onGenderChange={onGenderChange}
			/>
		</Dialog>
	);
};
