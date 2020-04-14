# astric 

![alt text](https://github.com/mughees-asif/astric/blob/master/assets/images/logo.png)

## Getting Started

### Setting up the development environment

#### Node.js 12+ (versions below could work, but are not tested)

* Linux:

   ```
   sudo apt install nodejs npm
   ```

* Windows or macOS:

   https://nodejs.org/en/

### Running the app. locally

1. Clone the repository on your local machine. Open terminal:

   ```
   git clone https://github.com/mughees-asif/astric.git
   ```
2. Install dependencies

   ```
   cd astric
   npm install
   ```
3. Install the [Expo client](https://expo.io/) directly using your iOS or Android phone. Make sure your phone and computer are connected to the same broadband network.

4. Set-up development environment

   ```
   npm install -g expo-cli
   ```
5. Run the local server

   ```
   expo start
   ```
6. On Android, read the QR code from your terminal using the 'Scan QR code' option from the drop-down menu to open your project. On iOS, use the built-in QR code scanner of the Camera app.

Note: If you get the error `Something went wrong. Could not load exp://.... Network response timed out.`, quit expo by hitting `Crtl + C` (Windows) and restart the environment by inputting
   ```
   expo start --tunnel
   ```
This will resolve the issue.

7. Now that you have successfully run the app, let's modify it. Open project in you favourite IDE and edit some lines. The application should reload automatically once you save your changes.

![alt text](https://media.giphy.com/media/daV4z2HV9jNWvqnQxG/giphy.gif)

## Go [here](https://docs.expo.io/versions/latest/workflow/how-expo-works/) for full information about how Expo works.

