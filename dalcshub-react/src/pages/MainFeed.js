import { useState } from 'react';
import { Tabs, Tab, Typography, Box, Grid } from '@mui/material'
import { Page, PageTitle, CourseCard } from "../components";
import bg1 from "../assets/images/bg1.jpg";
import bg2 from "../assets/images/bg2.jpg";

const TabPanel = (props) => {
	const { children, value, index, ...other } = props;
  
	return (
	  <div
		role="tabpanel"
		hidden={value !== index}
		{...other}
	  >
		{value === index && (
		  <Box sx={{ pt: 3 }}>
			<Typography>{children}</Typography>
		  </Box>
		)}
	  </div>
	);
  }

const courses = [
	{id: 1, name: 'CSCI 4177 Advanced Web Services', 
		description: "This course provides a hands-on learning environment for advanced web development techniques, such as HTML5 APIs for the creation of dynamic web graphics as well as adding offline functionality to web applications and documentation.", followed: true, bgImage: bg1},
	{id: 2, name: 'CSCI 2170  Intro to Server Side Scripting', 
		description: "A server side scripting language is used to create web pages with dynamic content. The course provides the technology necessary for connecting client web pages to web servers and processing and storing information obtained using forms during web sessions.", followed: true, bgImage: bg2},
]

export const MainFeed =  () =>  {

	const [value, setValue] = useState(0);

	const handleChange = (_, newValue) => {
		setValue(newValue);
	};

	return (
		<Page>
			<PageTitle title={'Main Feed'} link={'/'}/>
			
			<Box sx={{ width: '100%' }}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={value} onChange={handleChange}>
					<Tab label="Followed Course" />
					<Tab label="Saved Posts" />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<Grid container columns={{ xs: 4, md: 12 }} spacing={2} >
					{courses.map((course) => (
						<Grid item key={course.id}>
							<CourseCard name={course.name} description={course.description} followed={course.followed} bgImage={course.bgImage}/> 
						</Grid>
					))}
					</Grid>
				</TabPanel>
				<TabPanel value={value} index={1}>
					No post has been saved yet
				</TabPanel>
			</Box>
		</Page>
	);
};