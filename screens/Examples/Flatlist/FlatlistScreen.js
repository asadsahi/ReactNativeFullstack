import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Badge } from 'react-native-elements';
import FilterItem from './FilterItem';
import { generateTimes } from './data';

export default class FilterScreen extends Component {
    state = {
        selectedCategories: [],
        categories: generateTimes(5),
    }

    render() {
        const { categories, selectedCategories } = this.state;

        return (
            <>
                <View style={styles.badge}>
                    <Badge value={`Selected items: ${this.state.selectedCategories.length}`} />
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={categories}
                        extraData={selectedCategories}
                        keyExtractor={i => i.id.toString()}
                        renderItem={({ item }) => (
                            <FilterItem
                                category={item}
                                isShown={!!selectedCategories.find(sc => sc.id === item.id)}
                                key={item.id}
                                onClick={this.toggleSelectedCategory}
                            />
                        )}
                    />
                </View>
            </>
        )
    }

    toggleSelectedCategory = ({ id, name }) => {
        const categoryExists = this.state.selectedCategories.find(sc => sc.id === id)
        if (categoryExists) {
            this.setState({ selectedCategories: this.state.selectedCategories.filter(sc => sc.id !== id) });
        } else {
            this.setState({ selectedCategories: [{ id, name }, ...this.state.selectedCategories] });
        }

    }

}

const styles = StyleSheet.create({
    badge: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
});