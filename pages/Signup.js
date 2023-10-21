import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Signup({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.signupTitle}>SIGNUP</Text>
			<View style={styles.names}>
				<TextInput style={styles.firstName} placeholder="First Name" />
				<TextInput style={styles.lastName} placeholder="Last Name" />
			</View>
			<TextInput style={styles.inputFields} placeholder="Email" />
			<TextInput style={styles.inputFields} placeholder="Password" />
			<Pressable style={styles.signupButton}>
				<Text style={styles.buttonText}>SIGNUP</Text>
			</Pressable>
			<View style={styles.signupButtonContainer}>
				<Text>Already have an account?</Text>
				<Pressable onPress={() => navigation.navigate("Login")}>
					<Text style={styles.textButton}>Login</Text>
				</Pressable>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "aliceblue",
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 15,
	},
	signupTitle: {
		fontSize: 50,
		fontWeight: "bold",
		marginBottom: 20,
	},
	inputFields: {
		backgroundColor: "white",
		width: "80%",
		padding: 15,
		borderRadius: 5,
		fontSize: 15,
		marginVertical: 10,
	},
	names: {
		width: "80%",
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 10,
	},
	firstName: {
		backgroundColor: "white",
		width: "45%",
		padding: 15,
		borderRadius: 5,
		fontSize: 15,
	},
	lastName: {
		backgroundColor: "white",
		width: "45%",
		padding: 15,
		borderRadius: 5,
		fontSize: 15,
	},
	signupButton: {
		backgroundColor: "blue",
		width: "80%",
		padding: 20,
		borderRadius: 5,
		fontSize: 15,
		marginVertical: 10,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 15,
	},
	textButton: {
		color: "blue",
		marginLeft: 5,
	},
	signupButtonContainer: {
		flexDirection: "row",
		marginVertical: 10,
	},
});
