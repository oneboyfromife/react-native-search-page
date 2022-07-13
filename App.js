import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import productData from './product_data.json';
import { ProductCard, SearchBar } from './components';

export default function App() {

  const [searchValue, setSearchValue] = useState('');
  const [displayList, setDisplayList] = useState([]);
  const renderListItem = ({ item }) => <ProductCard product={item} />;
  useEffect(() => {
    setDisplayList(productData);
  }, []);
  useEffect(() => {
      const filteredValue = productData.filter((item) => {
        const text = searchValue.toUpperCase();
        const productTitle = item.title.toUpperCase();
        return productTitle.indexOf(text) > -1;
    });
    setDisplayList(filteredValue);
  }, [searchValue]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={styles.banner}>Helli Carrier</Text>
        <SearchBar getName={(val) => setSearchValue(val)} />
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={displayList}
          renderItem={renderListItem}
          numColumns={1}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  banner: {
    color: '#264653',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
  }
});
