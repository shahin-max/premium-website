import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/globe.mp4" autoPlay muted />
			<Container>
				<MainHeading>Born In The Cloud, NextGen Solutions</MainHeading>
				<HeroText>
					We provide the best Recruitment Software designed to source and hire candidates faster. Tailored for HR teams, recruitment agencies, and headhunters all over the world
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>Start 14 Days Free Trail</Button>
					</Link>
					<HeroButton>Book A Demo</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
