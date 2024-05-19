import styled from 'styled-components'
import bgImg from './bg.jpg';

const Container = styled.div`
    background-image: url(${bgImg});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	display: flex;
    color: #fff;
	width: 100vw;
	height: 100vh;
	margin: 0;
	padding: 0;
	flex-direction: column;
	font-family: 'Noto Sans TC';
`

const Slogan = styled.div`
	font-size: 10rem;
	font-weight: 300;
	display: flex;
	font-family: 'Roboto', sans-serif;
	justify-content: center;	
	margin: 20% 0 10%;
    text-align: center;
`

const Button = styled.div`
	font-size: 1.5rem;
	font-weight: 400;
	display: flex;
	border: 1px #fff solid;	 
	border-radius: 2.875rem;
	width: calc(40% - 15px);
	height: 4.75rem;
	justify-content: center;
	align-items: center;
	margin: 15px 10px;
`

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	position: absolute;
	bottom: 150px;
	width: 100%;
`

const FooterButton = styled.div`
	display: flex;
	flex: 50%;
	text-align: center;
	justify-content: center;
    align-self: center;
	height: 100%;
	align-items: center;
	font-weight: 500;
`

const Footer = styled.div`
	display: flex;
	position: fixed;
	bottom: 10px;
	font-size: 1.375rem;
	width: 100%;
	height: 70px;
	margin: 5px 0;
	${FooterButton} + ${FooterButton}{
		border-left:1px #fff solid ;
	}
`

function App() {
	return (
		<Container>
			<Slogan>
				Gift Guide
			</Slogan>
			<ButtonContainer>
				<Button>驚喜寶庫</Button>
				<Button>閃亮佳節</Button>
				<Button>旅遊之樂</Button>
				<Button>活力旅程</Button>
			</ButtonContainer>
			<Footer>
				<FooterButton>首頁</FooterButton>
				<FooterButton>個人化服務</FooterButton>
			</Footer>
		</Container>
	);
}

export default App;
