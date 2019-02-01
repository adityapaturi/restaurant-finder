import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, Image, Text, View} from "react-native";

const styles = StyleSheet.create({
    group: {
        flexDirection: "row",
        marginHorizontal: 10
    },
    text: {
        fontSize: 15,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 4,
        marginLeft: 5
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: "contain"
    }
});

export default class IconLabel extends React.Component {
    render() {
        return <View style={styles.group}>
            <Image style={styles.icon} source={this.props.src}/>
            <Text style={styles.text}>{this.props.text}</Text>
        </View>;
    }
}

IconLabel.propTypes = {
    src: PropTypes.number,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
