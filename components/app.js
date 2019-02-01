import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, View, Dimensions} from "react-native";
import Header from "./header";
import Inputs from "./inputs";
import Carousel from "react-native-snap-carousel";
import Card from "./card";
import {name as appName} from "../app.json";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {loadRestaurents} from "../data/action-creators";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#d4e2f9"
    },
    cardContainer: {
        flex: 1,
        paddingVertical: 50,
        justifyContent: "center",
        alignItems: "center",
    }
});

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    async componentDidMount() {
        this.props.loadRestaurents();
    }

    renderCard({item}) {
        return <Card data={item.restaurant} />;
    }

    render() {
        return <View style={styles.root}>
            <Header title={appName}/>
            <Inputs />
            <View style={styles.cardContainer}>
                <Carousel
                    layout={"default"}
                    data={this.props.restaurents}
                    inactiveSlideScale={1}
                    renderItem={this.renderCard}
                    sliderWidth={Dimensions.get("window").width}
                    itemWidth={Dimensions.get("window").width * 0.9}
                />
            </View>
        </View>;
    }
}

App.propTypes = {
    loadRestaurents: PropTypes.func,
    restaurents: PropTypes.array
};

const mapStateToProps = (state) => {
    const {status, restaurents} = state;
    return {status, restaurents};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loadRestaurents: loadRestaurents
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
