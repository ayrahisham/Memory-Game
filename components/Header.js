// source : https://code.tutsplus.com/tutorials/easier-react-native-development-with-expo--cms-30546

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component 
{
	render ()
	{
		return (
			<View style = {styles.header}>
				<Text style = {styles.header_text}>MemoryGame </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create 
(
	{
		header : 
		{
			flex : 1,
			flexDirection : 'column',
			alighSelf : 'stretch',
			paddingTop : 20,
			paddingBottom : 5,
			backgroundColor : '#f3f3f3'
		},

		header_text :
		{
			fontWeight : 'bold',
			fontSize : 17,
			textAlign : 'center'
		}
	}
);
