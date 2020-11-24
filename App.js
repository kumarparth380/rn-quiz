import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.row1Container}>
          <View style={styles.row1}>
            <View style={styles.block} />
            <Text style={styles.text}>Name</Text>
            <View style={styles.block} />
          </View>
        </View>
        <View style={styles.row2Container}>
          <View style={styles.row2}>
            <Text style={styles.text}>Balance</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#0f1d23',
    padding: 8,
  },
  card: {
    backgroundColor: '#f4f5fa',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    margin: '20%',
    width: '60%'
  },
  row1Container: {
    backgroundColor: '#f4f5fa',
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 25,
  },
  row1: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10%',
    paddingVertical: 25,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 25
  },
  row2Container: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  row2: {
    backgroundColor: '#f4f5fa',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    paddingVertical: 30,
    borderTopRightRadius: 25,
    borderColor: 'white',
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  block: {
    backgroundColor: '#0f1d23',
    width: 30,
    height: 30,
    borderRadius: 5,
  },
});
