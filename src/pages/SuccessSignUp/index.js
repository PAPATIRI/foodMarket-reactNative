import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {IlSuccessSignUp} from '../../assets'
import {Button, Gap} from '../../components'

const SuccessSignUp = () => {
    return (
        <View style={styles.page}>
            <IlSuccessSignUp />
            <Gap height={30} />
            <Text style={styles.title}>Yeay! Completed</Text>
            <Gap height={6} />
            <Text style={styles.subTitle}>Now you are able to order</Text>
            <Text style={styles.subTitle}>some foods as a self-reward</Text>
            <Gap height={30} />
            <View style={styles.buttonContainer}>
                <Button text="Find Foods" />
            </View>
        </View>
    )
}
export default SuccessSignUp
const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
    },
    subTitle: {
        fontSize: 14,
        fontFamily: 'Poppins-light',
        color: '#8d92a3'
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 80


    }
})
