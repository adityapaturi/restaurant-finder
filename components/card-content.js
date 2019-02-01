import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, Image, Text, View, ImageBackground} from "react-native";
import fallbackImage from "../assets/fallback.png";
import locationIcon from "../assets/location.png";

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "space-between",
        padding: 10,
        width: undefined,
        height: undefined
    },
    overlayText: {
        color: "#fff",
        fontSize: 18
    },
    locationIcon: {
        resizeMode: "contain",
        height: 20
    },
    restName: {
        flexDirection: "row"
    }
});

export default class CardContent extends React.Component {
    render() {
        return <ImageBackground style={styles.background} source={{uri: this.props.featured_image}} defaultSource={fallbackImage}>
            <View style={styles.restName}>
                <Image style={styles.locationIcon} source={locationIcon}/>
                <Text style={styles.overlayText}>{this.props.name}</Text>
            </View>
            <Text style={styles.overlayText}>{this.props.is_table_reservation_supported ? "Not Busy" : "Busy"}</Text>
        </ImageBackground>;
    }
}

CardContent.propTypes = {
    is_table_reservation_supported: PropTypes.number,
    featured_image: PropTypes.string,
    name: PropTypes.string
};
