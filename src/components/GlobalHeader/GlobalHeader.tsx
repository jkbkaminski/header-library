import React from "react";

export interface GlobalHeaderProps {
  label: string;
}

class GlobalHeader extends React.Component<any, any> {
  render() {
      return <button>{this.props.label}</button>;
  }
}

export default GlobalHeader;