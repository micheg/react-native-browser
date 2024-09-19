# **Building a Simple Web Browser with React Native: An Introduction**

**Prerequisites**

### Setting Up an Expo Project for the Web Browser and Required Dependencies

We will use Expo and the realtivi tools for this project.
We will use the expo app to avoid unnecessary compilation, also we will use a real device with the help of a screen duplicator like scrcpy.
The installation of node and scrcpy varies greatly from one operating system to another, but I always recommend using a package manager such as apt on ubuntu, scoop on windows, homebrew on linux.

Below are the detailed steps to install **Node.js** and **scrcpy** on the three major operating systems: Ubuntu, Windows, and macOS.

---

### 1. **Ubuntu (via `apt`)**

#### Installing Node.js on Ubuntu:
You can install Node.js using the NodeSource repository or directly with `apt`. Here's the method using the NodeSource repository to get the latest stable version:

```bash
# Update system and install required dependencies
sudo apt update
sudo apt install -y curl

# Add NodeSource APT repository for Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# Install Node.js
sudo apt install -y nodejs

# Verify the installation
node -v
npm -v
```

#### Installing scrcpy on Ubuntu:
To install scrcpy, you can directly use the `apt` package manager:

```bash
# Install scrcpy
sudo apt install scrcpy

# Verify the installation
scrcpy --version
```

---

### 2. **Windows (via `scoop`)**

Before using `scoop`, you need to have it installed. If it's not installed yet, run the following PowerShell command:

```powershell
# Install Scoop
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
irm get.scoop.sh | iex
```

#### Installing Node.js on Windows via Scoop:
After `scoop` is installed, use it to install Node.js:

```powershell
# Install Node.js
scoop install nodejs-lts

# Verify the installation
node -v
npm -v
```

#### Installing scrcpy on Windows via Scoop:
To install scrcpy with `scoop`, use the following command:

```powershell
# Install scrcpy
scoop install scrcpy

# Verify the installation
scrcpy --version
```

---

### 3. **macOS (via `homebrew`)**

If you don't already have **Homebrew** installed, you can install it by running:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### Installing Node.js on macOS via Homebrew:
Once Homebrew is installed, you can install Node.js:

```bash
# Install Node.js
brew install node

# Verify the installation
node -v
npm -v
```

#### Installing scrcpy on macOS via Homebrew:
To install scrcpy with Homebrew, use this command:

```bash
# Install scrcpy
brew install scrcpy

# Verify the installation
scrcpy --version
```

---

### Summary:

- **Ubuntu**: Install Node.js via NodeSource repository and scrcpy using `apt`.
- **Windows**: Use `scoop` to install both Node.js and scrcpy.
- **macOS**: Use `homebrew` to install Node.js and scrcpy.

This ensures that both Node.js and scrcpy are properly installed across all three platforms.

#### 1. Creating the Project
Start by creating a new Expo project. Use the following command to generate a blank project named **WebBrowser**:

```bash
npx create-expo-app@latest -t blank WebBrowser
```

This will set up a basic Expo project structure that you can customize further.

#### 2. Installing UI Dependencies
After creating the project, you need to install some dependencies that will handle web content rendering, safe areas, and manage the user interface.

Install **WebView** to render web content inside the app:

```bash
npx expo install react-native-webview
```

Install **Safe Area Context** to ensure proper layout handling within the safe areas of devices:

```bash
npx expo install react-native-safe-area-context
```

Install **Async Storage**, which allows you to persist data asynchronously, such as user preferences or temporary data:

```bash
npx expo install @react-native-async-storage/async-storage
```

Lastly, install **Expo Status Bar** to manage and configure the status bar on both iOS and Android:

```bash
npx expo install expo-status-bar
```

#### 3. Setting Up State Management with Zustand
For state management, it's recommended to use **Zustand**, a lightweight library for managing global state. Install it using:

```bash
npm install zustand
```

By following these steps, you'll have your Expo project fully set up with all the necessary UI and state management dependencies, ready for development!

## **Introduction**

In today's mobile-centric world, web browsers are indispensable tools that enable us to access a vast array of information and services on the go. While popular browsers like Chrome and Safari dominate the market, creating a custom web browser can be an exciting project that enhances your understanding of mobile app development and web technologies. This article serves as the first in a series that guides you through building a simple web browser using React Native.

## **Why Build Your Own Browser?**

### **Educational Value**

Developing a web browser from scratch is an excellent way to deepen your knowledge of:

- **React Native Framework**: Gain hands-on experience with React Native components, navigation, and state management.
- **Web Technologies**: Understand how web content is rendered and interacted with on mobile devices.
- **State Management**: Learn how to manage complex state using modern libraries.

### **Customization**

Creating your own browser allows you to:

- **Implement Custom Features**: Add functionalities tailored to specific needs, such as specialized bookmarking or content filtering.
- **Design Unique User Interfaces**: Create an interface that aligns with a particular aesthetic or user experience.
- **Control Privacy and Security**: Incorporate privacy features that give users more control over their data.

### **Portfolio Enhancement**

For developers, having a custom-built browser in your portfolio showcases your skills in:

- **Full-Stack Development**: Demonstrates proficiency in both front-end and back-end aspects.
- **Problem-Solving**: Highlights your ability to tackle complex projects.
- **Innovation**: Shows initiative and creativity in developing unique applications.

## **Project Overview**

### **Objective**

The goal of this project is to build a functional web browser for mobile devices using React Native. The browser will include essential features such as:

- **Web Page Rendering**: Display web content using the WebView component.
- **Navigation Controls**: Implement back, forward, and refresh buttons.
- **URL Input**: Allow users to enter web addresses.
- **Browsing History**: Keep track of visited URLs and provide an interface to revisit them.
- **State Management**: Use a global state management library to handle the application's state efficiently.

### **Technologies and Tools**

- **React Native**: A JavaScript framework for building native mobile apps.
- **WebView Component**: A React Native component that renders web content.
- **Zustand**: A lightweight state management library.
- **AsyncStorage**: For data persistence across app sessions.

### **Project Structure**

The project will be divided into several components:

1. **Web Browser Component**: Handles the display of web content and navigation controls.
2. **History Component**: Manages the browsing history and provides a user interface to access it.
3. **State Management**: Utilizes Zustand to manage the application's state globally.
4. **User Interface**: Focuses on the layout, styling, and interaction patterns.

### **Features to Implement**

- **Web Navigation**: Users can navigate to different web pages using URL input and navigation buttons.
- **History Management**: The app records visited URLs and allows users to view and clear their browsing history.
- **Persistent Storage**: Browsing history and other state data persist between app sessions using AsyncStorage.
- **Responsive Design**: The interface adapts to different screen sizes and orientations.

## **Learning Outcomes**

By the end of this project, you will have:

- **Enhanced Understanding of React Native**: Deepened your knowledge of building mobile applications using React Native components and APIs.
- **Experience with State Management**: Gained practical experience in managing application state with Zustand.
- **Knowledge of Web Content Rendering**: Learned how to render and interact with web content within a mobile app.
- **Skills in Data Persistence**: Understood how to use AsyncStorage for storing data locally on the device.
- **Improved UI/UX Design Skills**: Developed a user-friendly interface that offers a seamless browsing experience.

# **State Management with Zustand**

## **Introduction**

State management is a crucial part of any application, especially when dealing with complex components that need to share data. Zustand is a lightweight state management library that provides a simple and intuitive API, making it an excellent choice for our browser project.

## **Why Use Zustand for State Management?**

### **Simplicity and Minimal Boilerplate**

Zustand offers a minimalistic approach to state management without the need for extensive boilerplate code. It allows you to create a global store with ease and provides a straightforward way to access and update the state across your components.

### **Performance**

Zustand is built with performance in mind. It leverages React's context API under the hood but optimizes it to prevent unnecessary re-renders, ensuring that your application remains responsive.

### **Flexibility**

With Zustand, you can structure your state in a way that makes sense for your application. It doesn't enforce a specific pattern, allowing you to keep your state management logic clean and maintainable.

## **Setting Up the Store**

### **Creating the Store**

The store is the central place where all the state variables and actions are defined. In our project, we create the store in a file named `browser.js` within a `store` directory.

To create the store, we use the `create` function from Zustand:

```javascript
// store/browser.js
import { create } from 'zustand';

const useBrowserStore = create((set, get) => ({
  // State variables and actions
}));

export default useBrowserStore;
```

### **Persisting State with AsyncStorage**

We want our browser to remember the browsing history even after the app is closed. To achieve this, we use the `persist` middleware from Zustand along with `AsyncStorage`:

```javascript
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useBrowserStore = create(
  persist(
    (set, get) => ({
      // State variables and actions
    }),
    {
      name: 'browser-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
```

By configuring the store with `persist`, we ensure that the state is saved to the device's local storage and rehydrated when the app restarts.

## **Exploring the State Variables**

Our browser needs to manage several pieces of state to function correctly. Below are the state variables defined in our store:

### **1. `inputUrl`**

- **Type**: `string`
- **Initial Value**: `'https://www.example.com'`
- **Purpose**: Holds the value of the URL input field where the user can type or edit the web address.

### **2. `webUrl`**

- **Type**: `string`
- **Initial Value**: `'https://www.example.com'`
- **Purpose**: Represents the actual URL that the `WebView` component will load. This value is updated when the user submits the URL they have entered.

### **3. `isLoading`**

- **Type**: `boolean`
- **Initial Value**: `false`
- **Purpose**: Indicates whether the web content is currently loading. This is used to display a loading indicator to the user.

### **4. `canGoBack`**

- **Type**: `boolean`
- **Initial Value**: `false`
- **Purpose**: Determines if the browser can navigate back in the history stack. This state controls the enabled or disabled state of the back navigation button.

### **5. `canGoForward`**

- **Type**: `boolean`
- **Initial Value**: `false`
- **Purpose**: Determines if the browser can navigate forward in the history stack. This state controls the enabled or disabled state of the forward navigation button.

### **6. `history`**

- **Type**: `array`
- **Initial Value**: `[]`
- **Purpose**: Stores the list of URLs that the user has visited. This array is used to display the browsing history and allows the user to revisit previous pages.

### **7. `showHistory`**

- **Type**: `boolean`
- **Initial Value**: `false`
- **Purpose**: Controls whether the history component is displayed. When set to `true`, the history screen is shown instead of the browser.

## **Understanding the Actions**

Actions are functions that modify the state. They are crucial for updating the store in response to user interactions or other events.

### **1. `setInputUrl(inputUrl)`**

- **Parameters**: `inputUrl` (`string`)
- **Purpose**: Updates the `inputUrl` state with the value provided by the user as they type in the URL input field.

### **2. `setWebUrl(webUrl)`**

- **Parameters**: `webUrl` (`string`)
- **Purpose**: Updates the `webUrl` state when the user submits the URL. This triggers the `WebView` to load the new page.

### **3. `setIsLoading(isLoading)`**

- **Parameters**: `isLoading` (`boolean`)
- **Purpose**: Sets the `isLoading` state to indicate whether the web content is currently loading.

### **4. `setCanGoBack(canGoBack)`**

- **Parameters**: `canGoBack` (`boolean`)
- **Purpose**: Updates the `canGoBack` state based on the navigation history. This enables or disables the back navigation button accordingly.

### **5. `setCanGoForward(canGoForward)`**

- **Parameters**: `canGoForward` (`boolean`)
- **Purpose**: Updates the `canGoForward` state based on the navigation history. This enables or disables the forward navigation button accordingly.

### **6. `setShowHistory(showHistory)`**

- **Parameters**: `showHistory` (`boolean`)
- **Purpose**: Controls the visibility of the history component. When set to `true`, the browser component is hidden, and the history component is displayed.

### **7. `setHistory(history)`**

- **Parameters**: `history` (`array`)
- **Purpose**: Replaces the current history array with a new one. This action is useful when clearing the history or restoring it from persistent storage.

### **8. `addToHistory(url)`**

- **Parameters**: `url` (`string`)
- **Purpose**: Adds a new URL to the `history` array. Before adding, it checks if the URL is already present to avoid duplicates.

- **Implementation Details**:

  ```javascript
  addToHistory: (url) => {
    const { history } = get();
    if (!history.includes(url)) {
      set({ history: [...history, url] });
    }
  },
  ```

  This function retrieves the current `history` from the store using `get()`. It checks if the URL is not already included in the `history` array and then updates the state with the new history list.

### **9. `clearHistory()`**

- **Purpose**: Clears the browsing history by setting the `history` array to an empty array.

- **Implementation Details**:

  ```javascript
  clearHistory: () => set({ history: [] }),
  ```

## **Integrating the Store into Components**

By exporting `useBrowserStore`, we can use this hook inside our React components to access and manipulate the state.

**Example Usage in a Component**:

```javascript
import useBrowserStore from '../store/browser';

const Component = () => {
  const { inputUrl, setInputUrl } = useBrowserStore();

  return (
    <TextInput
      value={inputUrl}
      onChangeText={setInputUrl}
      // other props
    />
  );
};
```

In this example, we import the store and destructure `inputUrl` and `setInputUrl` to use within the component. This pattern is repeated across different components to access the necessary state and actions.

## **Advantages of This Approach**

- **Global State Access**: Any component can access the store without prop drilling.
- **Separation of Concerns**: The store handles the state logic, while components focus on the UI.
- **Ease of Maintenance**: Having all state-related logic in one place simplifies debugging and future modifications.
- **Persisted State**: With `persist` and `AsyncStorage`, the state remains consistent across app sessions.

## **Best Practices**

- **Avoid Storing Component References**: Keep UI-specific references like `ref` local to the components and avoid storing them in the global state.
- **Immutable Updates**: Always ensure that state updates are performed immutably to prevent unintended side effects.
- **Selective State Updates**: Update only the parts of the state that need to change to optimize performance.

## **Conclusion**

Understanding the state management layer is crucial before moving on to building the user interface, as it ensures that the UI components can interact seamlessly with the state. In the next article, we will focus on constructing the UI components, integrating them with our store, and explaining the code in detail.

# **Constructing the User Interface**

## **Introduction**

Now, we'll focus on constructing the user interface (UI), exploring the components used, and providing a detailed explanation of the code.

## **Project Structure Recap**

Our project's structure is organized as follows:

- **components/**
  - **History.jsx**: Component for displaying browsing history.
  - **WebBrowser.jsx**: Main browser component handling web navigation.
- **store/**
  - **browser.js**: Zustand store managing the application's state.

## **Key Components**

### **1. WebBrowser Component**

The `WebBrowser` component serves as the primary interface for the user to interact with web content. It includes:

- **Navigation Bar**: Contains buttons for back, forward, refresh, and history, as well as the URL input field.
- **WebView**: Renders the web pages.
- **State Management**: Connects to the Zustand store to access and update the state.

### **2. History Component**

The `History` component displays the list of visited URLs and allows the user to revisit or clear their browsing history.

- **History List**: Shows the URLs in a scrollable view.
- **Clear History Button**: Allows users to clear their browsing history.
- **Close Button**: Returns the user to the `WebBrowser` component.

## **Detailed Code Explanation**

Let's dive into the code for each component, explaining how they work and how they integrate with the store.

### **WebBrowser.jsx**

```jsx
// WebBrowser.jsx
import React, { useRef, useEffect } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { MaterialIcons } from '@expo/vector-icons';
import useBrowserStore from '../store/browser';
import HistoryComponent from './History';

const WebBrowser = () => {
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
    showHistory,
    setShowHistory,
    addToHistory,
  } = useBrowserStore();

  const webviewRef = useRef(null);
  const iconColor = 'white';

  // Navigation functions
  const goBack = () => {
    if (webviewRef.current && canGoBack) webviewRef.current.goBack();
  };

  const goForward = () => {
    if (webviewRef.current && canGoForward) webviewRef.current.goForward();
  };

  const reloadPage = () => {
    if (webviewRef.current) webviewRef.current.reload();
  };

  // Handle URL submission
  const onSubmitEditing = () => {
    let newUrl = inputUrl.trim();
    if (!/^https?:\/\//i.test(newUrl)) {
      newUrl = 'https://' + newUrl;
    }
    setWebUrl(newUrl);
  };

  // Update state on navigation change
  const onNavigationStateChange = (navState) => {
    setInputUrl(navState.url);
    setCanGoBack(navState.canGoBack);
    setCanGoForward(navState.canGoForward);

    // Update history
    addToHistory(navState.url);
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

    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  }, [canGoBack]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {!showHistory && (
        <>
          <View style={styles.navigationBar}>
            {/* Back Button */}
            <TouchableOpacity
              onPress={goBack}
              style={styles.iconButton}
              disabled={!canGoBack}
            >
              <MaterialIcons
                name="arrow-back"
                size={24}
                color={canGoBack ? iconColor : 'lightgray'}
              />
            </TouchableOpacity>

            {/* Forward Button */}
            <TouchableOpacity
              onPress={goForward}
              style={styles.iconButton}
              disabled={!canGoForward}
            >
              <MaterialIcons
                name="arrow-forward"
                size={24}
                color={canGoForward ? iconColor : 'lightgray'}
              />
            </TouchableOpacity>

            {/* URL Input */}
            <TextInput
              style={styles.urlInput}
              value={inputUrl}
              onChangeText={setInputUrl}
              onSubmitEditing={onSubmitEditing}
              placeholder="Enter URL"
              placeholderTextColor="white"
              keyboardType="url"
              autoCapitalize="none"
              autoCorrect={false}
            />

            {/* Refresh Button */}
            <TouchableOpacity onPress={reloadPage} style={styles.iconButton}>
              <MaterialIcons name="refresh" size={24} color={iconColor} />
            </TouchableOpacity>

            {/* History Button */}
            <TouchableOpacity
              onPress={() => setShowHistory(true)}
              style={styles.iconButton}
            >
              <MaterialIcons name="history" size={24} color={iconColor} />
            </TouchableOpacity>
          </View>

          {/* Loading Indicator */}
          {isLoading && (
            <View style={styles.loadingIndicator}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}

          {/* WebView */}
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#1E90FF',
  },
  iconButton: {
    padding: 5,
  },
  urlInput: {
    flex: 1,
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    borderRadius: 5,
    color: 'white',
    backgroundColor: '#4682B4',
  },
  loadingIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -25,
    marginTop: -25,
    zIndex: 1,
  },
});

export default WebBrowser;
```

#### **Explanation**

1. **Import Statements**

   - **React and Hooks**: Import `React`, `useRef`, and `useEffect` for component logic and lifecycle management.
   - **React Native Components**: Import various components like `View`, `TextInput`, `TouchableOpacity`, etc.
   - **WebView**: Import `WebView` from `react-native-webview` to render web content.
   - **Icons**: Use `MaterialIcons` from `@expo/vector-icons` for navigation icons.
   - **State Management**: Import `useBrowserStore` from the Zustand store.
   - **History Component**: Import `HistoryComponent` for displaying browsing history.

2. **State and Actions**

   Destructure the necessary state variables and actions from the store using `useBrowserStore()`.

3. **Refs**

   - **webviewRef**: A reference to the `WebView` component, used for controlling navigation.

4. **Navigation Functions**

   - **goBack()**: Navigates back in the web history if possible.
   - **goForward()**: Navigates forward in the web history if possible.
   - **reloadPage()**: Reloads the current web page.

5. **URL Submission Handling**

   - **onSubmitEditing()**: Handles the event when the user submits the URL in the input field. It ensures that the URL is correctly formatted and updates `webUrl` in the store.

6. **Navigation State Change**

   - **onNavigationStateChange(navState)**: Updates the state based on the navigation state of the `WebView`, such as updating `inputUrl`, `canGoBack`, `canGoForward`, and adding the URL to history.

7. **Back Button Handling**

   - **useEffect Hook**: Listens for the hardware back button press on Android devices. If the web view can go back, it navigates back; otherwise, it allows the default behavior.

8. **Conditional Rendering**

   - **showHistory**: If `showHistory` is `false`, the browser UI is rendered. If `true`, the `HistoryComponent` is displayed.

9. **Navigation Bar**

   - **Back and Forward Buttons**: Use `TouchableOpacity` and `MaterialIcons` to create interactive buttons, which are disabled based on `canGoBack` and `canGoForward`.
   - **URL Input Field**: A `TextInput` component bound to `inputUrl`, allowing the user to enter and submit URLs.
   - **Refresh and History Buttons**: Additional navigation controls.

10. **Loading Indicator**

    - Displays an `ActivityIndicator` when `isLoading` is `true`.

11. **WebView Component**

    - Renders the web content based on `webUrl`.
    - Uses `webviewRef` for navigation control.
    - Listens to navigation state changes to update the store.

12. **Styling**

    - Uses `StyleSheet` to style components such as the navigation bar, buttons, and loading indicator.

### **History.jsx**

```jsx
// History.jsx
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import useBrowserStore from '../store/browser';

const HistoryComponent = () => {
  const { history, setWebUrl, setInputUrl, setShowHistory, clearHistory } =
    useBrowserStore();

  // Load a URL from history
  const loadFromHistory = (url) => {
    setWebUrl(url);
    setInputUrl(url);
    setShowHistory(false); // Close the history view
  };

  // Confirm and clear history
  const confirmClearHistory = () => {
    Alert.alert(
      'Confirm',
      'Are you sure you want to clear your browsing history?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: clearHistory },
      ],
      { cancelable: true },
    );
  };

  return (
    <View style={styles.historyContainer}>
      {/* Header */}
      <View style={styles.historyHeader}>
        <Text style={styles.historyTitle}>History</Text>
        <TouchableOpacity
          onPress={() => setShowHistory(false)} // Close history view
          style={styles.iconButton}
        >
          <MaterialIcons name="close" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* History List */}
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

      {/* Clear History Button */}
      <View style={styles.clearHistoryContainer}>
        <TouchableOpacity
          onPress={confirmClearHistory}
          style={[
            styles.clearHistoryButton,
            history.length === 0 && styles.disabledButton,
          ]}
          disabled={history.length === 0}
        >
          <Text style={styles.clearHistoryText}>Clear History</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  historyContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    zIndex: 2,
    paddingTop: Constants.statusBarHeight,
  },
  historyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#1E90FF',
  },
  historyTitle: {
    fontSize: 20,
    color: 'white',
  },
  iconButton: {
    padding: 5,
  },
  historyItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  clearHistoryContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  clearHistoryButton: {
    backgroundColor: '#FF6347',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  clearHistoryText: {
    color: 'white',
    fontSize: 16,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
});

export default HistoryComponent;
```

#### **Explanation**

1. **Import Statements**

   - **React and Components**: Import necessary components like `View`, `Text`, `TouchableOpacity`, etc.
   - **Icons**: Use `MaterialIcons` for the close button.
   - **Constants**: Import `Constants` from `expo-constants` for status bar height.
   - **State Management**: Import `useBrowserStore` from the Zustand store.

2. **State and Actions**

   Destructure `history`, `setWebUrl`, `setInputUrl`, `setShowHistory`, and `clearHistory` from the store.

3. **Functions**

   - **loadFromHistory(url)**: Navigates to the selected URL from history and closes the history view.
   - **confirmClearHistory()**: Displays an alert to confirm the action before clearing the history.

4. **Component Structure**

   - **Header**: Contains the title "History" and a close button to exit the history view.
   - **History List**: A `ScrollView` that lists the URLs from `history`, allowing the user to tap on any to revisit.
   - **Clear History Button**: A button at the bottom to clear the browsing history, which is disabled when the history is empty.

5. **Styling**

   - Uses `StyleSheet` to style the container, header, list items, and buttons.
   - **Dynamic Styles**: Applies `styles.disabledButton` when the history is empty to visually indicate the button is disabled.

6. **User Interaction**

   - **TouchableOpacity**: Used for interactive elements like list items and buttons.
   - **Alert**: Provides a confirmation dialog before clearing history to prevent accidental deletion.

### **Integration with the Store**

Both components interact with the store to read and update the application state.

- **Reading State**: Components read state variables like `inputUrl`, `webUrl`, `isLoading`, `history`, etc.
- **Updating State**: Components call actions like `setInputUrl`, `setWebUrl`, `setShowHistory`, `addToHistory`, and `clearHistory` to update the state in response to user actions.

### **App Entry Point**

The `App.js` file initializes the application and renders the `WebBrowser` component.

```jsx
// App.js
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import WebBrowser from './components/WebBrowser';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <WebBrowser />
    </SafeAreaProvider>
  );
}
```

- **SafeAreaProvider**: Ensures that content is rendered within the safe area boundaries of a device.
- **StatusBar**: Manages the status bar appearance.
- **WebBrowser**: The main component of the app.

## **Putting It All Together**

When the app starts:

1. **Initial Load**: The `WebBrowser` component is rendered, displaying the navigation bar and the `WebView` loading the initial URL from `webUrl`.
2. **User Interaction**: The user can navigate by entering URLs, using the navigation buttons, or reloading the page.
3. **History Management**: As the user visits new pages, the URLs are added to `history` in the store.
4. **Viewing History**: By tapping the history button, `showHistory` is set to `true`, and the `HistoryComponent` is displayed.
5. **Interacting with History**: The user can tap on a URL to revisit it or clear the history entirely.

## **Key Takeaways**

- **Component-Based Architecture**: The UI is divided into reusable components, each responsible for a specific part of the interface.
- **State Management with Zustand**: The use of Zustand allows for easy and efficient state sharing between components without prop drilling.
- **WebView Integration**: The `WebView` component enables rendering web content within the app, with navigation control.
- **User Experience**: Features like loading indicators, navigation buttons, and history management enhance the user experience.
- **Platform Considerations**: Handling the Android back button ensures the app behaves intuitively on different platforms.

## **Conclusion**

In this article, we've walked through the UI construction of our simple web browser using React Native. By understanding each component and how it interacts with the state, you now have the knowledge to customize and extend the browser's functionality further.

Building this browser has provided practical insights into React Native development, state management with Zustand, and the integration of web content through `WebView`. Whether you're looking to expand this project or apply these concepts to other applications, the skills gained here are valuable additions to your developer toolkit.

## Links:

- You can find the project on GitHub at this address: [https://github.com/micheg/react-native-browser/](https://github.com/micheg/react-native-browser/).
- You can test the project live on Snack at the following URL: [https://snack.expo.dev/@michelangelog79/web-browser?platform=android](https://snack.expo.dev/@michelangelog79/web-browser?platform=android).
