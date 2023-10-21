import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.loginTitle}>LOGIN</Text>
			<TextInput style={styles.inputFields} placeholder="Username" />
			<TextInput style={styles.inputFields} placeholder="Password" />
			<Pressable
				style={styles.loginButton}
				onPress={() => navigation.navigate("Home")}
			>
				<Text style={styles.buttonText}>LOGIN</Text>
			</Pressable>
			<View style={styles.forgotButtonContainer}>
				<Text>Forgot your password?</Text>
				<Pressable>
					<Text style={styles.textButton}>Click here</Text>
				</Pressable>
			</View>
			<View style={styles.signupButtonContainer}>
				<Text>Don't have an account?</Text>
				<Pressable onPress={() => navigation.navigate("Signup")}>
					<Text style={styles.textButton}>Signup</Text>
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
	},
	loginTitle: {
		fontSize: 50,
		fontWeight: "bold",
		marginBottom: 20,
		elevation: 0,
	},
	inputFields: {
		backgroundColor: "white",
		width: "80%",
		padding: 15,
		margin: 10,
		borderRadius: 5,
		fontSize: 15,
	},
	loginButton: {
		backgroundColor: "blue",
		width: "80%",
		padding: 20,
		margin: 10,
		borderRadius: 5,
		fontSize: 15,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 15,
	},
	forgotButtonContainer: {
		flexDirection: "row",
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
