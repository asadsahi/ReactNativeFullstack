import React, { Component } from "react";
import { ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';

import { Routes } from './ExamplesStack';

export default class ExamplesScreen extends Component {
    static navigationOptions = {
        title: 'Examples'
    };

    render() {
        const { navigation } = this.props;
        return (
            <ScrollView>
                {
                    Routes.map((item, index) => (
                        <ListItem
                            key={index}
                            onPress={() => navigation.push(item.route)}
                            leftIcon={{ name: item.icon, type: item.iconType || 'material-community' }}
                            title={item.description}
                        />
                    ))
                }
            </ScrollView>
        );
    }
}

