import React, { Component } from "react";
import { Tablist, SidebarTab } from "evergreen-ui";

export const MonthContext = React.createContext();
export default class Month extends Component {
    
    render() {

        return (

     
                <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
                    {this.props.Monthtabs.map((tab, index) => (
                        <SidebarTab
                            key={tab}
                            id={tab}
                            onSelect={() => this.props.update({  index })}
                            isSelected={index === this.props.MonthSelectedIndex}
                            aria-controls={`panel-${tab}`}>
                            {tab}
                        </SidebarTab>
                    ))}
                </Tablist>
  

        );
    }
}
