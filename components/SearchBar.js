import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


const SearchBar = (props) => {
  const [text, setText] = React.useState("");
  const sendValue = () => {
    props.getName(text);
  };
    return (
        <View style={styles.searchBar}>
            <TextInput
              value={text}
              placeholder="Search product..."
              onChangeText={(val) => {
              setText(val);
              sendValue();
              }}
            />
        </View>
    )
}

export { SearchBar }

const styles = StyleSheet.create({
      searchBar: {
        backgroundColor: "#eceff1",
        padding: 8,
        margin: 5,
        borderRadius: 10
    }
})