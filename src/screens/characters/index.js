import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CharacterItem from '../../components/CharacterItem';
import styles from './styles';
import {getFavorites, saveFavorite} from '../../utils/favorite';
import {useNavigation} from '@react-navigation/native';

import {Creators as CharactersActions} from '../../store/ducks/Characters';

const Characters = () => {
  const dispatch = useDispatch();
  const {loading, error, data, loadingAdd} = useSelector(
    state => state.Characters,
  );
  const {navigate} = useNavigation();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState([]);

  const loadFavorite = async () => {
    const loadedfavorites = await getFavorites();
    setFavorites(loadedfavorites);
  };

  useEffect(() => {
    dispatch(
      CharactersActions.GetCharacterRequest({
        params: {
          page,
        },
      }),
    );
    loadFavorite();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChageFavorite = value => {
    saveNewFavorite(value);
  };

  const saveNewFavorite = async value => {
    await saveFavorite(value);
    await loadFavorite();
  };

  const renderFooter = () => {
    if (!loadingAdd) {
      return null;
    }
    return (
      <View style={styles.listFooter}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  };

  const loadMoreCharacters = () => {
    if (!data) {
      return null;
    }

    console.log(data?.info);

    if (page + 1 > data?.info?.pages) {
      return null;
    }

    const params = {
      params: {
        page: page + 1,
      },
    };

    if (search.length > 0) {
      params.params.name = search;
    }
    console.log(params);
    dispatch(CharactersActions.AddCharacterRequest(params));

    setPage(page + 1);
  };

  const renderList = () => {
    if (loading) {
      return <ActivityIndicator size={'large'} />;
    }

    if (error) {
      return <Text>Erro durante carregamento da lista</Text>;
    }

    if (data) {
      return (
        <FlatList
          data={data?.results || []}
          keyExtractor={item => item?.id}
          renderItem={({item}) => (
            <CharacterItem
              character={item}
              favorites={favorites}
              onChageFavorite={value => onChageFavorite(value)}
            />
          )}
          onEndReached={loadMoreCharacters}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
        />
      );
    }

    return <Text>No data</Text>;
  };

  const searchCharacter = () => {
    dispatch(CharactersActions.GetCharacterCleaner());
    dispatch(
      CharactersActions.GetCharacterRequest({
        params: {
          page: 1,
          name: search,
        },
      }),
    );
    setPage(1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Personagens</Text>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => navigate('Favorites')}>
          <Text style={styles.titleText}>Favoritos</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={styles.searchTextInput}
          value={search}
          onChangeText={text => setSearch(text)}
        />
        <TouchableOpacity style={styles.searchButton} onPress={searchCharacter}>
          <Text style={styles.searchButtonText}>Buscar</Text>
        </TouchableOpacity>
      </View>
      {renderList()}
    </View>
  );
};

export default Characters;
