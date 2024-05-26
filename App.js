// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './pages/LoginPage'; 
import WelcomePage from './pages/WelcomePage';  
import ReportLostItemPage from './pages/ReportLostItemPage';
import ListLostItemsPage from './pages/ListLostItemsPage'; 
import ThankYouPage from './pages/ThankYouPage.js'; 
import ForgetPassword from './pages/ForgetPassword'; 
import { LostItemsProvider } from './pages/LostItemsContext'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <LostItemsProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="Welcome" component={WelcomePage} />
          <Stack.Screen name="ReportLostItem" component={ReportLostItemPage} />
          <Stack.Screen name="ListLostItems" component={ListLostItemsPage} />
          <Stack.Screen name="ThankYou" component={ThankYouPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </LostItemsProvider>
  );
};

export default App;