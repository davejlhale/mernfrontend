import styled from 'styled-components';


export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1200px;
	margin: 0 auto;
	`
export const Row = styled.div`
	display: flex;
	margin:auto;
	max-width: 1200px;
	`

export const ContainerForm = styled.form`
		max-width:400px;
		margin:auto;
		border:1px solid #ccc;
		background-color: antiquewhite;
		border-radius:15px;
	`

	export const RowLabel = styled.label`
	min-width:40%;
	display:inline-block;
	text-align:right;
	padding:10px;
	`
	export const Button = styled.button`
	min-width:40%;
	display:inline-block;
	text-align:center;
	padding:10px;
	margin:20px;
	border-radius:15px;
	background-color: #333;
	color: #ddd;
	border-style: outset;
	transition: all 0.3s ease-in-out;
	
&:hover{
	color: #11aa11;
	border-style: inset;
	transition: all 0.3s ease-in-out;
}
	`
	export const RowInput = styled.input`
	min-width:40%;
	`
export const Icon = styled.img`
	width:32px;
	height:32px;
	`
export const Column = styled.p`
	width:200px;
	`

