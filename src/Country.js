import React, { Component } from "react";
import { Tab, Tablist } from "evergreen-ui";



export const CountryContext = React.createContext();

export default class Country extends Component {



    render() {
        return (
                <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
                    {this.props.Countrytabs.map((tab, index) => (
                        <Tab
                            key={tab}
                            id={tab}
                            onSelect={() => this.props.update({ index })}
                            isSelected={index === this.props.CountrySelectedIndex}
                            aria-controls={`panel-${tab}`}
                        >
                            {tab}
                        </Tab>
                    ))}
                </Tablist>
       

        );
    }
}
