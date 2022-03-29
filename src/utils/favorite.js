import AsyncStorage from '@react-native-async-storage/async-storage';

const storage_Key = '@rick_morty_favorite';

export const verifyFavorites = async value => {
  const favorites = await AsyncStorage.getItem(storage_Key);

  if (!favorites) {
    return false;
  }
  const arrayValue = favorites.split(',');
  return arrayValue.some(item => item === value);
};

const addFavorite = async value => {
  let savedValue = await AsyncStorage.getItem(storage_Key);

  if (savedValue) {
    savedValue += `,${value}`;

    await AsyncStorage.setItem(storage_Key, savedValue);
  } else {
    await AsyncStorage.setItem(storage_Key, `${value}`);
  }
};

const removeFavorite = async value => {
  let savedValue = await AsyncStorage.getItem(storage_Key);
  if (!saveFavorite) {
    return null;
  }
  const arrayValue = savedValue.split(',');

  const index = arrayValue.indexOf(value);
  if (index > -1) {
    arrayValue.splice(index, 1);
  }
  await AsyncStorage.setItem(storage_Key, arrayValue.join(','));
};

export const saveFavorite = async value => {
  try {
    const contains = await verifyFavorites(value);
    if (contains) {
      await removeFavorite(value);
    } else {
      await addFavorite(value);
    }
  } catch (e) {
    console.log(e);
  }
};

export const getFavorites = async () => {
  try {
    let savedValue = await AsyncStorage.getItem(storage_Key);
    if (!saveFavorite) {
      return [];
    }
    const arrayValue = savedValue.split(',');
    return arrayValue;
  } catch (e) {
    console.log(e);
  }
};
