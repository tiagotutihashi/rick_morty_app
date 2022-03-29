import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  favoriteButton: {
    position: 'absolute',
    zIndex: 999,
    top: 20,
    right: 20,
    padding: 10,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  favoriteButtonGreen: {
    backgroundColor: 'lightgreen',
  },
  favoriteButtonRed: {
    backgroundColor: 'red',
  },
  favoriteButtonText: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  info: {
    fontSize: 20,
  },
  image: {
    height: 300,
    flex: 1,
    width: null,
  },
});

export default styles;
