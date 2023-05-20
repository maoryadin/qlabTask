import Toast from 'react-native-root-toast';

const showToast = (message) => {
  Toast.show(message, {
    duration: 1000,
    position: 100,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });
}

export default showToast;
