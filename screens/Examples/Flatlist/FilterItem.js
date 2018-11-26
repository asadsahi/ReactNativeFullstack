import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';

class FilterItem extends PureComponent {
    render() {
        const { category, isShown, onClick } = this.props
        return (
            <View style={{ flex: 1 }}>
                <CheckBox
                    onPress={() => onClick(category)}
                    checked={isShown}
                    title={category.name}
                />
            </View>
        )
    }
}

export default FilterItem
