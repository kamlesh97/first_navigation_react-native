import React from 'react'
import { View, Text } from 'react-native'

export default function Home(props) {
    return (
        <View>
            <Text>hi {props.route.params}</Text>
        </View>
    )
}
