/* eslint-disable react/prop-types */
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import PrincipalRoxo from '../assets/images/nav/homepage-roxo.png';
import Principal from '../assets/images/nav/homepage.png';
import LojaRoxo from '../assets/images/nav/online-store-shopping-cart-roxo.png';
import Loja from '../assets/images/nav/online-store-shopping-cart.png';
import ResultadosRoxo from '../assets/images/nav/text-file-document-roxo.png';
import Resultados from '../assets/images/nav/text-file-document.png';
import PerfilRoxo from '../assets/images/nav/user-avatar-profile-roxo.png';
import Perfil from '../assets/images/nav/user-avatar-profile.png';
import TabBarIcon from '../components/TabBarIcon';
import TabBarLabel from '../components/TabBarLabel';
import Billet from '../screens/Billet';
import Consultation from '../screens/Consultation';
import EditAddress from '../screens/EditAddress';
import EditUser from '../screens/EditUser';
import ExamInfo from '../screens/ExamInfo';
import Home from '../screens/Home';
import NutritionalProfile from '../screens/NutritionalProfile';
import Profile from '../screens/Profile';
import ReportInfo from '../screens/ReportInfo';
import Reports from '../screens/Reports';
import Shopping from '../screens/Shopping';
import ShoppingInfo from '../screens/ShoppingInfo';
import Store from '../screens/Store';
import Success from '../screens/Success';
import { isIphoneXService } from '../services/dimensionsService';
import colors from '../styles/colors';


const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      header: null,
    }),
  },
  NutritionalProfile: {
    screen: NutritionalProfile,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Consultation: {
    screen: Consultation,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  const { routes, index } = navigation.state;
  if (routes[index].routeName === 'NutritionalProfile'
  || routes[index].routeName === 'Consultation') {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const StoreStack = createStackNavigator({
  Store: {
    screen: Store,
    navigationOptions: () => ({
      header: null,
    }),
  },
  ExamInfo: {
    screen: ExamInfo,
    navigationOptions: () => ({
      header: null,
      tabBarVisible: false,
    }),
  },
  Billet: {
    screen: Billet,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Success: {
    screen: Success,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Shopping: {
    screen: Shopping,
    navigationOptions: () => ({
      header: null,
    }),
  },
  ShoppingInfo: {
    screen: ShoppingInfo,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

StoreStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  const { routes, index } = navigation.state;
  if (routes[index].routeName === 'ExamInfo'
  || routes[index].routeName === 'Success'
  || routes[index].routeName === 'Shopping'
  || routes[index].routeName === 'ShoppingInfo') {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: () => ({
      header: null,
    }),
  },
  EditUser: {
    screen: EditUser,
    navigationOptions: () => ({
      header: null,
    }),
  },
  EditAddress: {
    screen: EditAddress,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

ProfileStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  const { routes, index } = navigation.state;
  if (routes[index].routeName === 'EditUser'
  || routes[index].routeName === 'EditAddress') {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const ReportsStack = createStackNavigator({
  Reports: {
    screen: Reports,
    navigationOptions: () => ({
      header: null,
    }),
  },
  ReportInfo: {
    screen: ReportInfo,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

ReportsStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  const { routes, index } = navigation.state;
  if (routes[index].routeName === 'ReportInfo') {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const getHeight = () => {
  if (isIphoneXService()) {
    return 35;
  }
  return 70;
};

const BottomTabNavigator = createBottomTabNavigator({
  ProfileStack,
  HomeStack,
  StoreStack,
  ReportsStack,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarOnPress: ({ defaultHandler }) => {
      if (navigation.state.routeName === 'StoreStack') {
        navigation.navigate('Store', { storeType: 1, storeTitle: 'Loja' });
      }
      defaultHandler();
    },
    tabBarLabel: ({ focused }) => {
      const { routeName } = navigation.state;
      let label = '';
      if (routeName === 'ProfileStack') {
        label = 'Perfil';
      }
      if (routeName === 'HomeStack') {
        label = 'Principal';
      }
      if (routeName === 'StoreStack') {
        label = 'Loja';
      }
      if (routeName === 'ReportsStack') {
        label = 'Resultados';
      }
      return <TabBarLabel focused={focused} label={label} />;
    },
    tabBarIcon: ({ focused }) => {
      const { routeName } = navigation.state;
      let iconName = '';
      if (routeName === 'ProfileStack') {
        iconName = !focused ? Perfil : PerfilRoxo;
      }
      if (routeName === 'HomeStack') {
        iconName = !focused ? Principal : PrincipalRoxo;
      }
      if (routeName === 'StoreStack') {
        iconName = !focused ? Loja : LojaRoxo;
      }
      if (routeName === 'ReportsStack') {
        iconName = !focused ? Resultados : ResultadosRoxo;
      }
      return <TabBarIcon focused={focused} name={iconName} />;
    },
    tabBarOptions: {
      style: {
        alignSelf: 'center',
        backgroundColor: 'white',
        width: Platform.OS === 'ios' ? '90%' : null,
        borderRadius: Platform.OS === 'ios' ? 40 : null,
        marginBottom: Platform.OS === 'ios' ? 30 : null,
        height: getHeight(),
        borderColor: 'gray',
        borderTopWidth: 0,
        shadowColor: colors.gray3,
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 24,
      },
      tabStyle: {
        height: 50,
        marginTop: 10,
      },
    },
  }),
});
export default BottomTabNavigator;
