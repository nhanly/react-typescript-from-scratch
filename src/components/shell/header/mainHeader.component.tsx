import * as React from "react";
import "./header.scss";

interface AppHeaderProps {}

export default class AppHeader extends React.Component<AppHeaderProps, object> {
  render() {
    const {} = this.props;

    return <div className="first-class">Main Header</div>;
  }
}
