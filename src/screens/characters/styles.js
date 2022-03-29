import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    flex: 1,
    marginBottom: 10,
    fontSize: 25,
  },
  favoriteButton: {
    flex: 1,
  },
  searchTextInput: {
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  searchButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 5,
    backgroundColor: 'lightgray',
  },
  searchButtonText: {
    fontSize: 18,
  },
  listFooter: {
    marginVertical: 20,
  },
});

export default styles;
