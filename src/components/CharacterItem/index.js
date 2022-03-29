import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const CharacterItem = ({character, favorites, onChageFavorite}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.favoriteButton,
          favorites.some(item => item === character?.id?.toString())
            ? styles.favoriteButtonRed
            : styles.favoriteButtonGreen,
        ]}
        onPress={() => onChageFavorite(character?.id?.toString())}>
        <Text style={styles.favoriteButtonText}>Favoritar</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={{uri: character?.image}} />
      <View>
        <Text style={styles.title}>Nome:</Text>
        <Text style={styles.info}>{character?.name}</Text>
      </View>
      <View>
        <Text style={styles.title}>Status:</Text>
        <Text style={styles.info}>{character?.status}</Text>
      </View>
      <View>
        <Text style={styles.title}>Espécie:</Text>
        <Text style={styles.info}>{character?.species}</Text>
      </View>
      <View>
        <Text style={styles.title}>Origem:</Text>
        <Text style={styles.info}>{character?.origin?.name}</Text>
      </View>
      <View>
        <Text style={styles.title}>Localização:</Text>
        <Text style={styles.info}>{character?.location?.name}</Text>
      </View>
    </View>
  );
};

export default CharacterItem;
