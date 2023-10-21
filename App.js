import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen
					name="Login"
					component={Login}
					options={{
						headerShown: false,
						headerLeft: null,
					}}
				/>
				<Stack.Screen
					name="Signup"
					component={Signup}
					options={{
						headerShown: false,
						headerLeft: null,
					}}
				/>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						headerLeft: null,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
