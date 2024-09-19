// HistoryComponent.js
import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
	Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import useBrowserStore from "../store/browser";

const HistoryComponent = () => {
	const { history, setWebUrl, setInputUrl, setShowHistory, clearHistory } =
		useBrowserStore();

	const loadFromHistory = (url) => {
		setWebUrl(url);
		setInputUrl(url);
		setShowHistory(false); // <-- Close the history after selecting a URL
	};

	const confirmClearHistory = () => {
		Alert.alert(
			"Conferma",
			"Sei sicuro di voler cancellare la cronologia?",
			[
				{ text: "Annulla", style: "cancel" },
				{ text: "OK", onPress: clearHistory },
			],
			{ cancelable: true },
		);
	};

	return (
		<View style={styles.historyContainer}>
			<View style={styles.historyHeader}>
				<Text style={styles.historyTitle}>Cronologia</Text>
				<TouchableOpacity
					onPress={() => setShowHistory(false)} // <-- Close the history when pressing the close button
					style={styles.iconButton}
				>
					<MaterialIcons name="close" size={24} color="white" />
				</TouchableOpacity>
			</View>
			<ScrollView>
				{history
					.slice()
					.reverse()
					.map((url, index) => (
						<TouchableOpacity key={index} onPress={() => loadFromHistory(url)}>
							<Text style={styles.historyItem}>{url}</Text>
						</TouchableOpacity>
					))}
			</ScrollView>
			<View style={styles.clearHistoryContainer}>
				<TouchableOpacity
					onPress={confirmClearHistory}
					style={[
						styles.clearHistoryButton,
						history.length === 0 && styles.disabledButton,
					]}
					disabled={history.length === 0}
				>
					<Text style={styles.clearHistoryText}>Cancella Cronologia</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	historyContainer: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "#fff",
		zIndex: 2,
		paddingTop: Constants.statusBarHeight,
	},
	historyHeader: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 10,
		backgroundColor: "#1E90FF",
	},
	historyTitle: {
		fontSize: 20,
		color: "white",
	},
	iconButton: {
		padding: 5,
	},
	historyItem: {
		padding: 15,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
	clearHistoryContainer: {
		padding: 10,
		borderTopWidth: 1,
		borderTopColor: "#ccc",
	},
	clearHistoryButton: {
		backgroundColor: "#FF6347", // Colore del pulsante
		padding: 15,
		alignItems: "center",
		borderRadius: 5,
	},
	clearHistoryText: {
		color: "white",
		fontSize: 16,
	},
});

export default HistoryComponent;
