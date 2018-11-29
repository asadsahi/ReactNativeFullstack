import React, { Component } from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from './commonComponents/ButtonWithMargin';

class Child extends Component {
  render() {
    return (
      <Text style={{ color: this.props.isFocused ? 'green' : 'maroon' }}>
        {this.props.isFocused
          ? 'I know that my parent is focused!'
          : 'My parent is not focused! :O'}
      </Text>
    );
  }
}

const ChildWithNavigationFocus = withNavigationFocus(Child);

const createTabScreen = (name, icon, focusedIcon, tintColor = '#673ab7') => {
  class TabScreen extends Component {
    static navigationOptions = {
      tabBarLabel: name,
      tabBarIcon: ({ tintColor, focused }) => (
        <MaterialCommunityIcons
          name={focused ? focusedIcon : icon}
          size={26}
          style={{ color: focused ? tintColor : '#ccc' }}
        />
      ),
    };

    state = { showChild: false };

    render() {
      const { isFocused } = this.props;

      return (
        <SafeAreaView
          forceInset={{ horizontal: 'always', top: 'always' }}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontWeight: '700', fontSize: 16, marginBottom: 5 }}>
            {'Tab ' + name.toLowerCase()}
          </Text>
          <Text style={{ marginBottom: 20 }}>
            {'props.isFocused: ' + (isFocused ? ' true' : 'false')}
          </Text>
          {this.state.showChild ? (
            <ChildWithNavigationFocus />
          ) : (
              <Button
                title="Press me"
                onPress={() => this.setState({ showChild: true })}
              />
            )}
          <Button
            onPress={() => this.props.navigation.pop()}
            title="Back to other examples"
          />
          <StatusBar barStyle="default" />
        </SafeAreaView>
      );
    }
  }
  return withNavigationFocus(TabScreen);
};

const TabsWithNavigationFocus = createMaterialBottomTabNavigator(
  {
    One: {
      screen: createTabScreen('One', 'numeric-1-box-outline', 'numeric-1-box'),
    },
    Two: {
      screen: createTabScreen('Two', 'numeric-2-box-outline', 'numeric-2-box'),
    },
    Three: {
      screen: createTabScreen(
        'Three',
        'numeric-3-box-outline',
        'numeric-3-box'
      ),
    },
  },
  {
    shifting: false,
    activeTintColor: '#F44336',
  }
);

export default TabsWithNavigationFocus;
