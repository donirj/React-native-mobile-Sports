import * as React from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Image } from 'react-native';

const DEVICE_WIDTH = Dimensions.get("window").width;

class BackgroundCarousel extends React.Component {
    scrollRef = React.createRef();
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0
        }
    }

    componentDidMount = () => {
        setInterval(() => {
            this.setState(prev =>({ 
                selectedIndex:
                 prev.selectedIndex === this.props.images.length - 1 
                 ? 0 
                 : prev.selectedIndex + 1}),
            () =>{
                this.scrollRef.current.scrollTo({
                    animated: true,
                    y: 0,
                    x: DEVICE_WIDTH * this.state.selectedIndex
                })
            })
        }, 4000)
    }

    setSelectedIndex = event => {
        //width de la vista
        const viewSize = event.nativeEvent.layoutMeasurement.width;

        // obtener posicion de la image
        const contentOffset = event.nativeEvent.contentOffset.x;
        
        const selectedIndex = Math.floor(contentOffset / viewSize);
        this.setState({selectedIndex});
    }

    render(){
        const {images} = this.props;
        const {selectedIndex} = this.state;
        return (
            <View style={{height:'60%', width:'60%'}}>
                <ScrollView 
                    horizontal 
                    pagingEnabled 
                    onMomentumScrollEnd={this.setSelectedIndex}
                    ref={this.scrollRef}
                    showsVerticalScrollIndicator={false} //esconder scrollbar
                    showsHorizontalScrollIndicator={false}
                >
                    {images.map(image => (
                        <Image
                            key={image}
                            source={{uri: image}}
                            style={styles.backgroundImage}
                            
                        />
                    ))}

                
                </ScrollView>
                
                <View style={styles.circleDiv}>
                    {images.map(( image, i) => (
                        <View 
                        key={image} 
                        style={[
                            styles.whiteCircle, //puntos blancos de bajo de la imagen
                            {opacity: i === selectedIndex ? 0.5 : 1}
                            ]}
                        />
                    ))} 
                </View>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    backgroundImage: {
        height: '100%',
        width: DEVICE_WIDTH
    },
    cicrleDiv: {
        position: "absolute",
        bottom: 15,
        height: 10,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        
    },
    whiteCircle: {
        width: 8,
        height: 8,
        borderRadius: 3,
        margin: 5,
        backgroundColor: "#fff",
 
        
    }
});

export {BackgroundCarousel};