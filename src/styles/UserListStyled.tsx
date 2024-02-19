import styled from 'styled-components'

export const ContainerUserList = styled.div`
    display: grid;
	grid-template-columns: repeat(auto-fill, 300px);
	gap: 36px;
	place-content: center;
	margin: 3em 0 0 0;
    .postList {
		grid-template-columns: repeat(auto-fill);
	}
`
