import { LinearGradient } from 'expo';
import React from 'react';
import { Text, ScrollView, View, Image } from 'react-native';

function incrementColor(color, step) {
  const intColor = parseInt(color.substr(1), 16);
  const newIntColor = (intColor + step).toString(16);
  return `#${'0'.repeat(6 - newIntColor.length)}${newIntColor}`;
}

export default class LinearGradientScreen extends React.Component {
  static navigationOptions = {
    title: 'LinearGradient',
  };

  state = {
    count: 0,
    colorTop: '#000000',
    colorBottom: '#cccccc',
  };

  componentDidMount() {
    this._interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
        colorTop: incrementColor(this.state.colorTop, 1),
        colorBottom: incrementColor(this.state.colorBottom, -1),
      });
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          alignItems: 'center',
          paddingVertical: 10,
        }}>
        <LinearGradient
          colors={[this.state.colorTop, this.state.colorBottom]}
          style={{ width: 200, height: 200 }}
        />
        <Text style={{ color: this.state.colorTop }}>{this.state.colorTop}</Text>
        <Text style={{ color: this.state.colorBottom }}>{this.state.colorBottom}</Text>

        <View
          style={{ flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'space-evenly' }}>
          <LinearGradient
            colors={['white', 'red']}
            start={[0.5, 0.5]}
            end={[1, 1]}
            style={{
              width: 100,
              height: 200,
              borderWidth: 1,
              marginVertical: 20,
              borderColor: 'black',
            }}
          />
          <Image
            source={require('../../assets/images/confusing_gradient.png')}
            style={{ width: 100, height: 200, marginVertical: 20 }}
          />
        </View>
        <Text style={{ marginHorizontal: 20 }}>The gradients above should look the same.</Text>
      </ScrollView>
    );
  }
}
