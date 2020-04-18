import React from 'react';

export default function withHover(Component,propName='hovering') {
    return class WithHover extends React.Component {
    
            state = {
                hovering:false
            }
          
    
        mouseHover = () => {
            this.setState({
                hovering:true
            })
            }
            mouseOut = () => {
                this.setState({
                 hovering:false   
                })
            }

        render(){
            const props = {
                [propName]:this.state.hovering,
                ...this.props
            }
            return(
                <div onMouseOver={this.mouseHover} onMouseOut={this.mouseOut}>
                <Component {...props}/>
                </div>
            )
        }
    }

}