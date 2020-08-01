import React from 'react'
import { Spinner } from "@ui-kitten/components"
import { StyleSheet, View } from 'react-native'

export const LoadingIndicator = (props: any) => (
    <View style={[props.style, styles.indicator]}>
        <Spinner size='small' status="control" />
    </View>
);
const styles = StyleSheet.create({
    indicator: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: -20
    }
})