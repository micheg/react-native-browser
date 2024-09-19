// App.js
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import BrowserApp from "./components/WebBrowser";

export default function App() {
	return (
		<SafeAreaProvider>
			<StatusBar style="auto" />
			<BrowserApp />
		</SafeAreaProvider>
	);
}
