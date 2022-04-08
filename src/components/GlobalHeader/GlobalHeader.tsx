import React from "react";

export interface GlobalHeaderProps {
  label: string;
}

const GlobalHeader = (props: GlobalHeaderProps) => {
  return <button>{props.label}</button>;
};

export default GlobalHeader;