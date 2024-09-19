# Simple React Native Browser

This project is a basic **web browser** built with **React Native** using the Expo framework. It provides minimal functionality but serves as a solid foundation for future customizations and enhancements.

## Features

- **WebView Integration**: Renders web pages using `react-native-webview`.
- **Status Bar Management**: Handles the mobile device's status bar with Expo's `expo-status-bar`.
- **Safe Area Support**: Ensures proper layout management across devices with different screen sizes and notches using `react-native-safe-area-context`.
- **Async Storage**: Stores basic user preferences or data using `@react-native-async-storage/async-storage`.
- **State Management**: Utilizes `Zustand` for lightweight state management, allowing easy scalability as the project grows.

## The running application

![web shot ios](https://github.com/user-attachments/assets/9e12c16f-5f91-49d5-b0b6-70b0adfa6f62)

## Installation

To get started, clone the repository and install the required dependencies.

1. Clone the project:

   ```bash
   git clone https://github.com/micheg/react-native-browser.git
   cd react-native-browser
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Run the app:

   ```bash
   npm start
   ```

## Requirements

- **Node.js** (v18.x or later)
- **Expo CLI**
- A compatible Android or iOS emulator, or a real device connected via USB.

## Customization

This project is designed to be a simple starting point for building a custom web browser or any React Native app with similar functionality. You can easily extend the features by adding:

- **Advanced Navigation Controls**
- **Bookmark Management**
- **Custom User Interface**
- **Offline Capabilities**

Feel free to explore the codebase and make changes to fit your needs!

## License

This project is open-source and licensed under the MIT License. Contributions and pull requests are welcome!
