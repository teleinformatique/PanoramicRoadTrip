import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class PanoramicRoadTrip extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('horseshoe-bend.jpg')}/>
        <View style={{width: 2}}></View>
      </View>
    );
  }
};

AppRegistry.registerComponent('PanoramicRoadTrip', () => PanoramicRoadTrip);
