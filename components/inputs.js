import React from "react";
import {StyleSheet, View} from "react-native";
import IconLabel from "./icon-label";
import calendarIcon from "../assets/calendar.png";
import personsIcon from "../assets/persons.png";
import clockIcon from "../assets/clock.png";

const styles = StyleSheet.create({
    inputs: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 5,
    },
    emptySpace: {
        flex: 1
    }
});

export default class Inputs extends React.Component {
    render() {
        return <View style={styles.inputs}>
            <IconLabel src={calendarIcon} text={"Tomorrow"}></IconLabel>
            <View style={styles.emptySpace}></View>
            <IconLabel src={personsIcon} text={"5"}></IconLabel>
            <IconLabel src={clockIcon} text={"7pm"}></IconLabel>
        </View>;
    }
}

