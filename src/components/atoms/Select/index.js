import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Picker} from '@react-native-picker/picker'

const Select = () => {
    return (
        <View>
            <Text style={styles.label}>Label Select Option</Text>
            <View style={styles.input} >
                <Picker
                // selectedValue={this.state.language}
                // style={{height: 50, width: 150}}
                // onValueChange={(itemValue, itemIndex) =>
                // this.setState({language: itemValue})}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="Javascript" value="js" />
                </Picker>
            </View>
        </View>
    )
}
export default Select

const styles = StyleSheet.create(({
    label: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        color: '#020202',
    },
    input: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#020202',
        paddingHorizontal: 2,
        paddingVertical: 0,
    },
}))
