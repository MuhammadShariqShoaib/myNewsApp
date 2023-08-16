import React, { Component } from 'react';

class DarkModeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            button: 'Enable Dark Mode',
            mystyle: {
                color: 'black',
                backgroundColor: 'white',
            },
        };
    }

    toggleState = () => {
        const { mystyle } = this.state;
        if (mystyle.backgroundColor === 'white') {
            this.setState({
                mystyle: {
                    color: 'white',
                    backgroundColor: 'black',
                    border: '1px solid white',
                },
                button: 'Disable Dark Mode',
            });
        } else {
            this.setState({
                mystyle: {
                    color: 'black',
                    backgroundColor: 'white',
                },
                button: 'Enable Dark Mode',
            });
        }
    };

    render() {
        const { button, mystyle } = this.state;

        return (
            <div>
                <button onClick={this.toggleState}>{button}</button>
                <div
                    style={{
                        color: mystyle.color,
                        backgroundColor: mystyle.backgroundColor,
                        border: mystyle.border,
                        padding: '10px',
                        margin: '10px',
                    }}
                >
                    
                </div>
            </div>
        );
    }
}

export default DarkModeButton;
