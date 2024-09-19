// store.js
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useBrowserStore = create(
	persist(
		(set, get) => ({
			// Stati
			inputUrl: "https://www.example.com",
			webUrl: "https://www.example.com",
			isLoading: false,
			canGoBack: false,
			canGoForward: false,
			history: [],
			showHistory: false,

			// Azioni
			setInputUrl: (inputUrl) => set({ inputUrl }),
			setWebUrl: (webUrl) => set({ webUrl }),
			setIsLoading: (isLoading) => set({ isLoading }),
			setCanGoBack: (canGoBack) => set({ canGoBack }),
			setCanGoForward: (canGoForward) => set({ canGoForward }),
			setShowHistory: (showHistory) => set({ showHistory }),
			setHistory: (history) => set({ history }),

			addToHistory: (url) => {
				const { history } = get();
				if (!history.includes(url)) {
					set({ history: [...history, url] });
				}
			},
			clearHistory: () => set({ history: [] }),
		}),
		{
			name: "browser-storage",
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);

export default useBrowserStore;
