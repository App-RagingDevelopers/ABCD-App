import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  settingModalAction,
  settingOptionAction,
} from '../../Redux/Action/HomeAction';
import {useDispatch, useSelector} from 'react-redux';
import {Checkbox} from 'react-native-paper';
import {useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';

const SettingModal = () => {
  const isFocused = useIsFocused();
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const {ShowWord} = useSelector(state => state.homeState);
  const dispatch = useDispatch();

  useEffect(() => {
    setChecked2(ShowWord);
  }, [isFocused]);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: '100%',
          backgroundColor: '#FFFFFF',
          borderBottomWidth: scale(1),
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#0099ff',
            padding: scale(15),
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => dispatch(settingModalAction())}>
            <AntDesign name="arrowleft" size={scale(20)} color="#FFFFFF" />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: scale(18),
              color: '#FFFFFF',
              fontSize: scale(15),
            }}>
            Setting
          </Text>
        </View>

        <View style={{padding: scale(15)}}>
          <Text style={{color: '#0099ff', fontWeight: '500'}}>Text</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{marginTop: verticalScale(15)}}>
              <Text style={{color: '#000000', fontSize: scale(15)}}>
                Show Alphabet
              </Text>
              <Text style={{color: 'grey', marginTop: verticalScale(3)}}>
                (Note: Applicable only for Alphabets)
              </Text>
            </View>
            <Checkbox
              status={checked1 ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked1(!checked1);
                // dispatch(settingOptionAction(checked1));
              }}
              color="#0099ff"
            />
          </View>
        </View>

        <View style={{padding: scale(15)}}>
          <Text style={{color: '#0099ff', fontWeight: '500'}}>Word</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: scale(15),
                marginTop: verticalScale(15),
              }}>
              Show Word
            </Text>

            <Checkbox
              status={checked2 ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked2(!checked2);
                dispatch(settingOptionAction(!checked2));
              }}
              color="#0099ff"
            />
          </View>
        </View>

        <View style={{padding: scale(15)}}>
          <Text style={{color: '#0099ff', fontWeight: '500'}}>
            NOTIFICATION
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{marginTop: verticalScale(15)}}>
              <Text style={{color: '#000000', fontSize: scale(15)}}>
                Notification
              </Text>
              <Text style={{color: 'grey', marginTop: verticalScale(3)}}>
                (Notify me to teach my kid)
              </Text>
            </View>
            <Checkbox
              status={checked3 ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked3(!checked3);
              }}
              color="#0099ff"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SettingModal;
