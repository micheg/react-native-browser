import React, { useRef, useEffect } from "react";
import {
	View,
	TextInput,
	StyleSheet,
	ActivityIndicator,
	TouchableOpacity,
	BackHandler,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import { MaterialIcons } from "@expo/vector-icons";
import useBrowserStore from "../store/browser";
import HistoryComponent from "./History";

const BrowserApp = () => {
	// Destructure states and actions from the store
	const {
		inputUrl,
		setInputUrl,
		webUrl,
		setWebUrl,
		isLoading,
		setIsLoading,
		canGoBack,
		setCanGoBack,
		canGoForward,
		setCanGoForward,
		showHistory, // <-- Get showHistory from the store
		setShowHistory, // <-- Get setShowHistory action
		addToHistory,
	} = useBrowserStore();

	const webviewRef = useRef(null);

	const iconColor = "white"; // Set icon color to white

	const goBack = () => {
		if (webviewRef.current && canGoBack) webviewRef.current.goBack();
	};

	const goForward = () => {
		if (webviewRef.current && canGoForward) webviewRef.current.goForward();
	};

	const reloadPage = () => {
		if (webviewRef.current) webviewRef.current.reload();
	};

	const onNavigationStateChange = (navState) => {
		setInputUrl(navState.url);
		setCanGoBack(navState.canGoBack);
		setCanGoForward(navState.canGoForward);

		// Update history
		addToHistory(navState.url);
	};

	const onSubmitEditing = () => {
		let newUrl = inputUrl.trim();
		if (!/^https?:\/\//i.test(newUrl)) {
			newUrl = "https://" + newUrl;
		}
		setWebUrl(newUrl);
	};

	// Handle Android back button
	useEffect(() => {
		const onBackPress = () => {
			if (webviewRef.current && canGoBack) {
				webviewRef.current.goBack();
				return true; // Event handled
			}
			return false; // Allow default behavior
		};

		BackHandler.addEventListener("hardwareBackPress", onBackPress);

		return () => {
			BackHandler.removeEventListener("hardwareBackPress", onBackPress);
		};
	}, [canGoBack]);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			{!showHistory && (
				<>
					<View style={styles.navigationBar}>
						<TouchableOpacity
							onPress={goBack}
							style={styles.iconButton}
							disabled={!canGoBack}
						>
							<MaterialIcons
								name="arrow-back"
								size={24}
								color={canGoBack ? iconColor : "lightgray"}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={goForward}
							style={styles.iconButton}
							disabled={!canGoForward}
						>
							<MaterialIcons
								name="arrow-forward"
								size={24}
								color={canGoForward ? iconColor : "lightgray"}
							/>
						</TouchableOpacity>
						<TextInput
							style={styles.urlInput}
							value={inputUrl}
							onChangeText={setInputUrl}
							onSubmitEditing={onSubmitEditing}
							placeholder="Inserisci URL"
							placeholderTextColor="white"
							keyboardType="url"
							autoCapitalize="none"
							autoCorrect={false}
						/>
						<TouchableOpacity onPress={reloadPage} style={styles.iconButton}>
							<MaterialIcons name="refresh" size={24} color={iconColor} />
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => setShowHistory(true)} // <-- Show history when pressed
							style={styles.iconButton}
						>
							<MaterialIcons name="history" size={24} color={iconColor} />
						</TouchableOpacity>
					</View>
					{isLoading && (
						<View style={styles.loadingIndicator}>
							<ActivityIndicator size="large" color="#0000ff" />
						</View>
					)}
					<WebView
						source={{ uri: webUrl }}
						ref={webviewRef}
						onNavigationStateChange={onNavigationStateChange}
						onLoadStart={() => setIsLoading(true)}
						onLoadEnd={() => setIsLoading(false)}
						style={{ flex: 1 }}
					/>
				</>
			)}
			{showHistory && <HistoryComponent />}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	navigationBar: {
		flexDirection: "row",
		alignItems: "center",
		padding: 5,
		backgroundColor: "#1E90FF",
	},
	iconButton: {
		padding: 5,
	},
	urlInput: {
		flex: 1,
		height: 40,
		borderColor: "white",
		borderWidth: 1,
		paddingHorizontal: 5,
		marginHorizontal: 5,
		borderRadius: 5,
		color: "white",
		backgroundColor: "#4682B4",
	},
	loadingIndicator: {
		position: "absolute",
		top: "50%",
		left: "50%",
		marginLeft: -25,
		marginTop: -25,
		zIndex: 1,
	},
});

export default BrowserApp;
