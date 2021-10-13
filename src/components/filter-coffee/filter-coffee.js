import {Component} from 'react';

import './filter-coffee.scss';

class FilterCoffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
            buttons: [
                {
                    type: 'button', 
                    className: 'filter__button', 
                    activeClassName: 'filter__button_active', 
                    content: "Brazil", 
                    active: false,
                    id: 1
                },
                {
                    type: 'button', 
                    className: 'filter__button', 
                    activeClassName: 'filter__button_active', 
                    content: "Kenya", 
                    active: false,
                    id: 2
                },
                {
                    type: 'button', 
                    className: 'filter__button', 
                    activeClassName: 'filter__button_active', 
                    content: "Columbia", 
                    active: false,
                    id: 3
                },
            ]
        }
    }

    onUpdateFilterType = (e) => {
        const clickedButton = e.currentTarget;
        const filterType = clickedButton.dataset.filter;
        const noFilter = '';

        /* Unclicking previously clicked filter (clearing filter) */
        if (filterType === this.state.filter) {
            this.setState(({buttons}) => {
                const updatedButtons = buttons.map(button => ({...button, active: false}));
                return {
                    filter: noFilter,
                    buttons: updatedButtons
                }
            });
            // Update filter type in root app component
            this.props.onUpdateFilterType(noFilter);
            return;
        }

        /* Clicking filter for the first time */
        this.setState(({buttons}) => {
            const updatedButtons = buttons.map(button => {
                if (button.content === filterType) {
                    return {...button, active: true};
                }
                return {...button, active: false};
            });
            return {
                filter: filterType,
                buttons: updatedButtons
            }
        });
        // Update filter type in root app component
        this.props.onUpdateFilterType(filterType);
    }

    render() {
        const buttons = this.state.buttons.map(button => {
            let className = button.className;
            if (button.active) {
                className += ` ${button.activeClassName}`;
            }

            return <button 
                        type={button.type}
                        key={button.id}
                        className={className}
                        data-filter={button.content}
                        onClick={this.onUpdateFilterType}>
                            {button.content}
                    </button>
        });

        return (
            <div className="filter">
                <span className="filter__label">Or filter</span>
                {buttons}
            </div>
        );
    }
}

export default FilterCoffee;