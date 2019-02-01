import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, Image, Text, View} from "react-native";
import searchIcon from "../assets/search.png";

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
    searchIcon: {
        width: 24,
        height: 24
    },
    header: {
        height: 100,
        marginHorizontal: 10,
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
    }
});

export default class Header extends React.Component {
    render() {
        return <View style={styles.header}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Image style={styles.searchIcon} source={searchIcon} />
        </View>;
    }
}

Header.propTypes = {
    title: PropTypes.string
};
