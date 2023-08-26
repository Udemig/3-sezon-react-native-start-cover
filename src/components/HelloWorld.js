import {View, Text} from 'react-native';
import React from 'react';

export default function HelloWorld(props) {
  return (
    <View>
      <Text>
        {props.title} - {props.count}
      </Text>
    </View>
  );
}
