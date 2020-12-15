import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';

console.tron = Reactotron;

const reactotron = Reactotron
  .setAsyncStorageHandler(AsyncStorage)
  .configure()
  .useReactNative()
  .connect();


export default reactotron;
