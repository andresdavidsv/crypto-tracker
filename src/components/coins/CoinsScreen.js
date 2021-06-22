import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

// Custom Hooks
import {useCoins} from '../../hooks/useCoins';

// Components
import {CoinsItem} from '../coins/CoinsItem/index';
import {CoinSearch} from './CoinsSearch';

// Resources
import {colors} from '../resources/color';

export const CoinsScreen = props => {
  // eslint-disable-next-line no-unused-vars
  const [coins, setCoins] = useCoins();
  let [filteredCoins, setFilteredCoins] = useState([]);

  // Handling the button press event
  const handlePress = coin => {
    props.navigation.navigate('CoinDetail', {coin});
  };

  const onChange = query => {
    const filter = coins.filter(
      coin =>
        coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase()),
    );

    setFilteredCoins(filter);
  };

  return (
    <View style={styles.container}>
      <CoinSearch onChange={onChange} />
      {coins !== undefined ? (
        <FlatList
          data={filteredCoins}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <CoinsItem {...item} onPress={() => handlePress(item)} />
          )}
        />
      ) : (
        <ActivityIndicator style={styles.loader} color="#000" size="large" />
      )}
    </View>
  );
};

// View Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charade,
  },
  btn: {
    backgroundColor: 'green',
    padding: 8,
    margin: 16,
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
  loader: {
    marginTop: 60,
    marginBottom: 60,
  },
});
