## React Native with Expo, Expo Router, TypeScript, Zustand.

- React Native is a framework developed by Facebook (META) for building mobile applications using Javascript and React.

- It allows developers to write code once and deploy it on both IOS and Andriod platforms,leveraging a single codebase.

Key Points :

- Developed By FB 2013.
- Use Components Model:

        A Component is piece of the UI that has its own logic and appearance. A component can be small as button or large as entire page.

Seperation of Concern:

- Normally

        HTML
        CSS
        JS

- Native

        Navbar
        HeroBanner
        Timer
        Calendar
        Footer

- Build Modular Apps:

        Modular apps are apps that are built using a modular architecture, which is a way of organizing app components into separate, independent modules.

- Learn Once, Write Anywhere.

## Setup Environment

Installing Dependencies :

- Node,JDK :

        Installing Node via Chocolatey, Package manager for windows.

  > Run Get-ExecutionPolicy. If it returns Restricted, then run Set-ExecutionPolicy AllSigned or Set-ExecutionPolicy Bypass -Scope Process.

  > Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

- choco --version

## Android development environment

- 1.  Install Android Studio

            https://reactnative.dev/docs/set-up-your-environment?platform=android

## Get Started with New React Native Project with Expo

To create a new Expo project, run the following in your terminal:

                npx create-expo-app@latest

Explaining Files & Folders

- app/(tabs)/index.tsx

## Components

Components are independent and reusable bits of code. They serve the same purpose as JS functions, but work in isolation and return HTML.

## JSX

JSX is a syntax extension for JavaScript that allows you to write HTML in your JavaScript files.

JSX allows us to write HTML in React Native.
JSX makes it easier to write and add HTML in React.

Pressable Components :

          1. onPress : Function that is called when the component is pressed. Required.
          2. onPressIn : Function that is called when the press gesture starts.
          3. onPressOut : Function that is called when the press gesture ends (or is cancelled).
          4. onLongPress : Function that is called when a long press is detected.

Image Components :

        1. Internal Images

                <Image
                source={require("../assets/load7.jpeg")}
                style={{ width: 200, height: 200 }}
                />

        2. External Images

                <Image
                source={{
                        uri: "https://loadmatch-liteapp-db.blr1.cdn.digitaloceanspaces.com/Frame.png",
                        }}
                style={{ width: 200, height: 200 }}
                />

Expressions in JSX (in Action) :

         With JSX you can write expressions inside curly braces. The expressions can be a variable, or property, or any other valid Javascript expression. JSX will execute the expression and return the result.

## Javascript Mastery Basic Crash Course

> Expo :

        Expo is a framework and platform for building React Native apps with ease. It provides a set of tools and services that simplify the development process, especially for developers who want to quickly prototype and build mobile apps without needing to configure native dependencies.

> CONTENT :

        - Components :

                - View
                - Touchable
                - Image
                - Flatlist
                - ScrollView
                - SafeAreaView
                - TextInput
                - StatusBar

        - Animations Using react-native-animatable

        - Responsive Design

        - Styling using Stylesheet and Tailwind css

        - Dynamic Routing using nested routes and layouts

        - Custom Hooks and fonts

        - Video player

        - File pickers

        - Backend using appwrite

### Introduction

> React Native - a framework used to build amazing andriod and ios native mobile applications using the library you already know all about - Reactjs

> React native is a cross-platform library that allows you to build native mobile apps using React & Javascript. This differs from frameworks like Cordova, where you use HTML to create the UI, which will then just be displayed within the device integrated mobile Browser (webview).

> React Native has built-in components compiled to native UI components, while your Javascript code is executed through a virtual machine. This makes React Native more Performant than cordova.

## Components

> View :

- A basic component that can be used to render any other component.
- It is often used to create layout structures for other components.
- It can be used to render a single component or a group of components.
- It has number of props that can be used to control its appearance and behaviour.
- View uses flexbox layout by default : Which makes it really easy to control how its child components
  are laid out within the container.

To add Interactivity we have some other components which are perfect for creating :

         Buttons, Links , Other interactive elements

> TouchableOpacity

> TouchableHighlight

> TouchableWithoutFeedback

> ActivityIndicator

> Button

> Flatlist

         Like map function in react has an Optimized Scroll performance and Item seperation

When should we use Flatlist or Map ?

        Flatlist - For larger lists with smooth scrolling
        Map - For smaller lists with no scrolling

> ScrollView

        Its is like a magic box that can hold multiple components and views, providing a scrolling components and views, providing a scrolling container for them.

> SafeAreaView

> ImageBackground

> Modal

> Alert

> Switch - For toggle

> StatusBar

## Setup

- Create an Expo Project

        To create a new project, run the following command:

                - npx create-expo-app@latest
