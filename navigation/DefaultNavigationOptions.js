import React from 'react';
import { Icon } from 'react-native-elements';

const DefaultNavigationOptions = ({ navigation }) => ({
    title: 'Welcome',
    headerLeft: (
        <Icon
            name="menu"
            size={30}
            iconStyle={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
        />
    ),
    // TODO
    // header: <Text onPress={() => navigation.openDrawer()}>
    //   <Icon name="menu" />
    // </Text>
});

export default DefaultNavigationOptions;
