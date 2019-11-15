import * as React from "react";
import "./content.scss";

interface AppContentProps {}

export default class AppContent extends React.Component<
  AppContentProps,
  object
> {
  render() {
    const {} = this.props;

    return (
      <div className="content">
        Main Content
        {/* <left-content menu="vm.menu"></left-content>
            <right-content></right-content> */}
      </div>
    );
  }
}
