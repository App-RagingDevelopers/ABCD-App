import {View, Text, Modal, TouchableOpacity, Share, Alert} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {scale, verticalScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {
  menuModalAction,
  settingModalAction,
} from '../../Redux/Action/HomeAction';
import SettingModal from './SettingModal';
import InAppReview from 'react-native-in-app-review';
import DeviceInfo from 'react-native-device-info';

const MenuModal = () => {
  const [deviceName, setDeviceName] = useState('');
  const dispatch = useDispatch();
  const {settingModal} = useSelector(state => state.homeState);

  DeviceInfo.getDeviceName().then(getDeviceName => {
    setDeviceName(getDeviceName);
  });

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `DeviceName : ${deviceName}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const onShares = async () => {
    try {
      const result = await Share.share({
        message: 'Complete action using',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: '100%',
          backgroundColor: '#FFFFFF',
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#0099ff',
            padding: scale(15),
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => dispatch(menuModalAction())}>
            <AntDesign name="arrowleft" size={scale(20)} color="#FFFFFF" />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: scale(18),
              color: '#FFFFFF',
              fontSize: scale(15),
            }}>
            Options
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => dispatch(settingModalAction())}
          style={{
            flexDirection: 'row',
            padding: scale(15),
            borderBottomWidth: verticalScale(1),
            borderBottomColor: 'lightgrey',
          }}>
          <Ionicons name="settings-sharp" size={scale(23)} color="#0099ff" />
          <Modal
            animationType="slide"
            transparent={true}
            visible={settingModal}
            onRequestClose={() => dispatch(settingModalAction())}>
            <SettingModal />
          </Modal>
          <Text
            style={{
              marginLeft: scale(18),
              color: '#000000',
              fontSize: scale(15),
            }}>
            Setting
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => InAppReview.isAvailable()}
          style={{
            flexDirection: 'row',
            padding: scale(15),
            borderBottomWidth: verticalScale(1),
            borderBottomColor: 'lightgrey',
          }}>
          <Entypo name="star" size={scale(23)} color="#0099ff" />
          <Text
            style={{
              marginLeft: scale(18),
              color: '#000000',
              fontSize: scale(15),
            }}>
            Rate Us
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onShare}
          style={{
            flexDirection: 'row',
            padding: scale(15),
            borderBottomWidth: verticalScale(1),
            borderBottomColor: 'lightgrey',
          }}>
          <MaterialIcons name="feedback" size={scale(23)} color="#0099ff" />
          <Text
            style={{
              marginLeft: scale(18),
              color: '#000000',
              fontSize: scale(15),
            }}>
            Feedback
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onShares}
          style={{
            flexDirection: 'row',
            padding: scale(15),
            borderBottomWidth: verticalScale(1),
            borderBottomColor: 'lightgrey',
          }}>
          <Entypo name="share" size={scale(23)} color="#0099ff" />
          <Text
            style={{
              marginLeft: scale(18),
              color: '#000000',
              fontSize: scale(15),
            }}>
            Share with your friends and family
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            padding: scale(15),
            borderBottomWidth: verticalScale(1),
            borderBottomColor: 'lightgrey',
          }}>
          <Fontisto name="locked" size={scale(23)} color="#0099ff" />
          <Text
            style={{
              marginLeft: scale(18),
              color: '#000000',
              fontSize: scale(15),
            }}>
            Privacy Policy & Terms of use
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuModal;
