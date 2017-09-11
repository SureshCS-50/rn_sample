import React, { Component } from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import { Button, Text } from 'native-base'

class Root extends Component {
    constructor(props){
        super(props);
        console.log('props', this.props.count);
    }

    render() {
        return (
            <View style = {styles.container}>
                <Text style={styles.textAlignment}>Count : {this.props.count}</Text>
                <Button style = {{alignSelf:'center'}}
                        onPress={this.doIncrement.bind(this)}>
                    <Text>Increment</Text>
                </Button>
                <Button style = {{alignSelf:'center', marginTop: 16}}
                        onPress={this.doDecrement.bind(this)}>
                    <Text>Decrement</Text>
                </Button>
            </View>
        )
    }

    doIncrement(){
        this.props.actions.increment(++this.props.count)
    }

    doDecrement(){
        this.props.actions.decrement(--this.props.count)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textAlignment:{
        margin: 16,
        alignSelf: 'center'
    }
});

export default Root;