import styled from "styled-components";

export const Container = styled.div`
	display: flex;

	& > main {
		flex-grow: 1;
		margin-left: 250px;
		padding: 24px;

		@media screen and (max-width: 600px) {
			margin-left: 0;
			margin-right: 0;
			width: 100%;
		}

		@media screen and (max-width: 960px) {
			margin-right: 0;
			width: 100%;
		}
	}
`;
