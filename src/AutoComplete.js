import React from "react";
import './AutoComplete.css';

export default class AutoCompleteText extends React.Component {
    constructor(props) {
        super(props);

        // this.items = ['London', 'Leicester', 'Manchester', 'Birmingham', 'Liverpool'];

        // initialise state
        this.state = {
            suggestions: [],
            text: '',
        }
    }

    onTextChanged = (e) => {
        const { items } = this.props;
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            // match user text 
            const regex = new RegExp(`^${value}`, `i`);
            // sort alphabetically & filter to match regex
            suggestions = items.sort().filter(v => regex.test(v))
        }
        // update state with filtered suggestions
        this.setState(() => ({ suggestions, text: value }));
    }

    suggestionSelected(value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
    }

    renderSuggestions() {
        // destructure from state
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)} key={item}>{item}</li>)}
            </ul>
        )
    }



    render() {
        const { text } = this.state;
        return (
            <div className="auto-complete">
                <input type="text" name="autocomplete" id="autocomplete" onChange={this.onTextChanged} value={text} />
                {this.renderSuggestions()}
            </div>
        )
    }
}