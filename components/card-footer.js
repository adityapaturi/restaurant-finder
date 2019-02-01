import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, Text, View, Linking} from "react-native";

const styles = StyleSheet.create({
    footer: {
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexDirection: "row",
        padding: 10
    },
    footerText: {
        color: "#478aff"
    }
});

export default class CardFooter extends React.Component {
    async makePhoneCall() {
        //calling using the id for demonstration as the api doesn't provide phone number at the higher level
        await Linking.openURL(`tel:${this.props.id}`);
    }

    render() {
        return <View style={styles.footer}>
            <Text style={styles.footerText} onPress={this.makePhoneCall}>Call</Text>
            <Text style={styles.footerText}>0.6 miles away</Text>
            <Text style={styles.footerText}>Reserve</Text>
        </View>;
    }
}

CardFooter.propTypes = {
    id: PropTypes.string
};
