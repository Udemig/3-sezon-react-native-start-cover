import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

export default function ProductScreen() {
  const fullName = useSelector(state => state.user.fullName);
  const age = useSelector(state => state.user.age);

  return (
    <View>
      <Text>ProductScreen {fullName}</Text>
      <Text>Age {age}</Text>
    </View>
  );
}
