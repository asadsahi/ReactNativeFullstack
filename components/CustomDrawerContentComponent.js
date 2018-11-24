import React, { Component } from 'react';
import { StyleSheet, ScrollView, AsyncStorage } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DrawerItems, SafeAreaView } from 'react-navigation';

const routes = ["Home", "Links", "Settings"];

class CustomDrawerContentComponent extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <ScrollView>
                <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
                    <>
                        {
                            routes.map((route, index) => (
                                <ListItem key={index} title={route} onPress={() => navigation.navigate(route)} />
                            ))
                        }
                        <ListItem key="logout" title="Logout" onPress={() => this.signOutAsync()} />
                    </>
                </SafeAreaView>
            </ScrollView>
        );
    }

    signOutAsync = async () => {
        const { navigation } = this.props;
        await AsyncStorage.clear();
        navigation.navigate('Auth');
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default CustomDrawerContentComponent;