import React from "react";
import {StyleSheet, View, Dimensions} from "react-native";
import CardHeader from "./card-header";
import CardParams from "./card-params";
import CardContent from "./card-content";
import PropTypes from "prop-types";
import CardFooter from "./card-footer";


const styles = StyleSheet.create({
    container: {
        padding: 5,
        height: Dimensions.get("window").height * 0.6
    },
    group: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 15,
        shadowColor: "black",
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
    }
});

export default class Card extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const {cuisines, average_cost_for_two, user_rating, featured_image, is_table_reservation_supported, name, id} = this.props.data;
        return <View style={styles.container}>
            <View style={styles.group}>
                <CardHeader cuisines={cuisines}/>

                <CardParams average_cost_for_two={average_cost_for_two}
                    aggregate_rating={user_rating.aggregate_rating}
                    votes={user_rating.votes}/>

                <CardContent featured_image={featured_image} name={name} is_table_reservation_supported={is_table_reservation_supported}/>

                <CardFooter id={id}/>
            </View>
        </View>;
    }
}

Card.propTypes = {
    data: PropTypes.object
};
