import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';

export default class TodoScreen extends Component {
  static navigationOptions = {
    title: 'Todos',
  };

  state = {
    items: [
      { label: 'Eat', completed: false },
      { label: 'Sleep', completed: true },
    ]
  }
  render() {
    return (
      <View style={styles.container}>
        <TodoHeader> Todo List </TodoHeader>
        <TodoInput
          placeholder={'Enter an item!'}
          onSubmit={this.addItem}
        />
        <View style={styles.divider} />
        <TodoList
          items={this.state.items}
          onRemoveItem={this.removeItem}
          onToggleItemCompleted={this.toggleItemCompleted}
        />
        <View style={styles.divider} />
        <TodoFooter onRemove={this.removeCompleted} />
      </View>
    )
  }

  addItem = (label) => {
    this.setState({ items: [{ label: label, completed: false }, ...this.state.items] });
  }

  removeItem = (itemIndex) => {
    this.setState({ items: this.state.items.filter((item, index) => index !== itemIndex) });
  }

  removeCompleted = (label) => {
    this.setState({ items: this.state.items.filter(i => !i.completed) });
  }

  toggleItemCompleted = (index) => {
    const newItems = this.state.items.map((item, i) => {
      if (i === index) {
        return { label: item.label, completed: !item.completed };
      }
      return item;
    });
    this.setState({ items: newItems });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: 'whitesmoke',
  },
});