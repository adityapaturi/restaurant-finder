import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, View} from "react-native";
import IconLabel from "./icon-label";
import distanceIcon from "../assets/distance.png";
import dollarIcon from "../assets/dollar.png";
import starIcon from "../assets/star.png";
import likeIcon from "../assets/like.png";

const styles = StyleSheet.create({
    params: {
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexDirection: "row",
        paddingVertical: 10
    }
});

export default class CardParams extends React.Component {
    render() {
        return <View style={styles.params}>
            <IconLabel src={distanceIcon} text={"~2mi"}/>
            <IconLabel src={dollarIcon} text={this.props.average_cost_for_two}/>
            <IconLabel src={starIcon} text={this.props.aggregate_rating}/>
            <IconLabel src={likeIcon} text={this.props.votes}/>
        </View>;
    }
}

CardParams.propTypes = {
    average_cost_for_two: PropTypes.number,
    aggregate_rating: PropTypes.string,
    votes: PropTypes.string
};
