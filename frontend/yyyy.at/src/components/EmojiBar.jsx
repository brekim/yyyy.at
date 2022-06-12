
import React, { Component }  from 'react';

import Picker from 'emoji-picker-react';

class EmojiBar extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { emojis : "" };
    }

    addemoji(emoji) {
        let newe = this.state.emojis.concat(emoji)
        this.setState({
            emojis: newe
          });
    }
    render() {
        return (
            <div>
                <p>
                    {this.state.emojis}
                    .yyyy.at
                </p>
                <Picker onEmojiClick={function(){}} pickerStyle={{ width: '100%' }} />
            </div>
        )

    }
    
}
export default EmojiBar;