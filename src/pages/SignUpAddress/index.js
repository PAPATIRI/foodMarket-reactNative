import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Select, TextInput} from '../../components';

const SingUp = () => {
    return (
        <View style={styles.page}>
            <Header title="Address" subTitle="Make sure it is valid" onBack={() => {}} />
            <View style={styles.container}>
                <TextInput label="Phone No." placeholder="Type your phone number" />
                <Gap height={16} />
                <TextInput label="Address" placeholder="Type your address" />
                <Gap height={16} />
                <TextInput label="House No." placeholder="Type your house number" />
                <Gap height={16} />
                <Select />

                <Gap height={24} />
                <Button text="Sign Up Now" />
            </View>
        </View>
    );
};

export default SingUp;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 24,
        flex: 1,
    },
    page: {
        flex: 1,
    },
    addPhoto: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8d92a3',
        textAlign: 'center'
    },
    PhotoContainer: {
        width: 90,
        height: 90,
        borderRadius: 90,
        backgroundColor: '#f0f0f0',
        padding: 24,
    },
    photo: {
        alignItems: 'center',
        marginTop: 26,
        marginBottom: 16,
    },
    borderPhoto: {
        borderWidth: 1,
        borderColor: '#8d92a3',
        width: 110,
        height: 110,
        borderRadius: 110,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
