import {View, Text, Button, TextInput} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {CHANGE_AGE, CHANGE_FULL_NAME} from '../redux/actions/actionTypes';
import {isDarkThemeAction} from '../redux/actions/userActions';

export default function HomeScreen() {
  const navigation = useNavigation();

  const {age, fullName, isDarkTheme} = useSelector(state => state.user);

  const dispatch = useDispatch();

  const changeAge = () => {
    dispatch({type: CHANGE_AGE, payload: 35});
  };

  return (
    <View style={{margin: 20}}>
      <Text>
        Adım Soyadım : {fullName} Yaşım : {age} - Is Dark Theme :{' '}
        {String(isDarkTheme)}
      </Text>
      <TextInput
        style={{padding: 10, borderWidth: 1, borderRadius: 10}}
        onChangeText={text =>
          dispatch({
            type: CHANGE_FULL_NAME,
            payload: text,
          })
        }
      />
      <Button
        title="Navigate to Product"
        onPress={() => navigation.navigate('Product')}
      />
      <Button title="Change Age" onPress={() => changeAge()} />
      <Button
        title="Is Dark Theme"
        onPress={() => dispatch(isDarkThemeAction())}
      />
    </View>
  );
}
