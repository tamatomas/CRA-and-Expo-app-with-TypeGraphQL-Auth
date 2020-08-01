import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Layout } from '@ui-kitten/components'

interface Props {
    children: JSX.Element
}

const CenterLayout = (props: Props) => {
    return (
        <Layout {...props} style={styles.layout}>
            {props.children}
        </Layout>
    )
}

export default CenterLayout

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center"
    }
})
