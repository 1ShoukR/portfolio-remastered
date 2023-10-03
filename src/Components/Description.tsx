import React from 'react';
import MyPic from '../assets/me.jpg';
import { Button } from '@mui/material';
import { Card } from '@mui/material';
import { Typography } from '@mui/material';


type Props = {};

const Description = (props: Props) => {
	return (
		<div className="flex align-center mt-5 justify-center items-center">
			<div className="myPic lg:max-w-full md:flex md:flex-col justify-center items-center sm:flex sm:flex-col justify-center items-center">
				<Card
					className="muiCARD"
					sx={{
						display: 'flex',
						marginTop: {
							xs: '1rem',
                            md: '0px'
						},
						height: {
							xs: 'auto',
							sm: 'auto',
						},
						width: {
							xs: '100%',
							sm: '90%',
							md: '1000px',
						},
						flexDirection: {
							xs: 'column',
							sm: 'column',
							md: 'row',
						},
						padding: '40px',
						borderRadius: '16px',
						boxShadow: 3,
						bgcolor: 'text.secondary',
						gap: '30px',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<div className="pictureWrapper">
						<div className="pictureContainer">
							<img className="myPicSpecifics w-full max-w-full sm:h-1/2 " src={MyPic} alt="me" />
						</div>
					</div>
					<div className="descriptionWrapper">
						<div className="description">
							<Typography sx={{ color: '#F0EAD6', fontWeight: 'bold' }} className="aLittleAboutMe">
								A little about me
							</Typography>
							<Typography sx={{ color: '#F0EAD6' }} variant="body1" className="text-white-87">
								I am incredibly passionate about all things tech! I have attended and graduated the DigitalCrafts Web Development Bootcamp to learn Full-Stack Web Development in order to jumpstart my
								career in tech, and it is the best decision I have ever made in my life. My love for coding continues to grow exponentially as I learn more and more about the intricacies and nuances
								of each language that I pursue!
							</Typography>
						</div>
						<div className="buttonWrapper md:px-4 md: mt-6">
							<div>
								<a href="/Resume">
									<Button
										variant="outlined"
										sx={{
											marginTop: {
												xs: '70px',
											},
											padding: {
												xs: '10px',
											},
											color: '#F0EAD6',
										}}>
										Resume
									</Button>
								</a>
							</div>
							<div>
								<a href="/Contact_Me">
									<Button
										variant="outlined"
										sx={{
											marginTop: {
												xs: '70px',
											},
											padding: {
												xs: '10px',
											},
											color: '#F0EAD6',
										}}>
										Contact Me
									</Button>
								</a>
							</div>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default Description;
