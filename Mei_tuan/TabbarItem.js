/**
 * Created by a1 on 2017/9/4.
 */
//import liraries
import React, { PureComponent } from 'react'
import { Image } from 'react-native'


// create a component
class TabBarItem extends PureComponent {


    defaultProps = {

        name:'12'


    };

    static  propTypes = {

        name:React.PropTypes.string.isRequired


    };
    render() {

        let selectedImage = this.props.selectedImage ? this.props.selectedImage : this.props.normalImage
        return (

            <Image
                source={this.props.focused
                    ? selectedImage
                    : this.props.normalImage}
                style={{ tintColor: this.props.tintColor, width: 25, height: 25 }}
            />
        );
    }
}
//make this component available to the app
export default TabBarItem;