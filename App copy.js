import {View, Text, SafeAreaView, Button} from 'react-native';
import React, {useEffect} from 'react';
import HelloWorld from './src/components/HelloWorld';

export default function App() {
  //Array Descructing
  const [count, setCount] = React.useState(0);

  // Didmount
  useEffect(() => {
    console.log('Uygulama çalıştı');

    return () => {
      console.log('Unmount');
    };
  }, []);

  // DidUpdate
  useEffect(() => {
    console.log('Count Değişti', count);
  }, [count]);

  const incrementCount = () => {
    setCount(prevState => prevState + 1);
  };

  return (
    <SafeAreaView>
      <View>
        <Text>App {count}</Text>
        <Button title="Artır" onPress={() => incrementCount()} />
        <HelloWorld title="Furkan Türkyılmaz" count={count} />
      </View>
    </SafeAreaView>
  );
}
