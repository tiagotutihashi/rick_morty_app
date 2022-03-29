import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import CharacterItem from '../../components/CharacterItem';
import {Creators as CharactersActions} from '../../store/ducks/Characters';

import {getFavorites, saveFavorite} from '../../utils/favorite';

const Favorites = () => {
  const dispatch = useDispatch();
  const {loadingId, errorId, dataId} = useSelector(state => state.Characters);
  const {goBack} = useNavigation();

  const [favorites, setFavorites] = useState([]);

  const loadFavorite = async () => {
    const loadedfavorites = await getFavorites();
    setFavorites(loadedfavorites);
  };

  useEffect(() => {
    loadFavorite();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (favorites?.length > 0) {
      dispatch(CharactersActions.GetByIdCharacterRequest(favorites));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites]);

  const onChageFavorite = value => {
    saveNewFavorite(value);
  };

  const saveNewFavorite = async value => {
    await saveFavorite(value);
    await loadFavorite();
  };

  const renderList = () => {
    if (loadingId) {
      return <ActivityIndicator size={'large'} />;
    }

    if (errorId) {
      return <Text>Erro durante carregamento da lista</Text>;
    }
    return (
      <FlatList
        data={dataId || []}
        keyExtractor={item => item?.id}
        renderItem={({item}) => (
          <CharacterItem
            character={item}
            favorites={favorites}
            onChageFavorite={value => onChageFavorite(value)}
          />
        )}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() => goBack()}>
          <Text style={styles.titleText}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.titleText}>Favoritos</Text>
      </View>
      {renderList()}
    </View>
  );
};

export default Favorites;
