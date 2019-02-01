import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, Image, Text, View, TouchableOpacity} from "react-native";
import pinIcon from "../assets/pinIcon.png";

const styles = StyleSheet.create({
    header: {
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomColor: "#478AFF",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    pinIcon: {
        marginTop: 3,
        width: 18,
        height: 18,
    },
    headerText: {
        fontSize: 20,
        color: "#478aff"
    }
});

export default class CardHeader extends React.Component {
    render() {
        return <View style={styles.header}>
            <Text style={styles.headerText}>{this.props.cuisines}</Text>
            <TouchableOpacity>
                <Image style={styles.pinIcon} source={pinIcon}/>
            </TouchableOpacity>
        </View>;
    }
}

CardHeader.propTypes = {
    cuisines: PropTypes.string
};
