import * as React from "react";

import AppHeader from "./components/shell/header/mainHeader.component";
import AppContent from "./components/shell/content/mainContent.component";

export default function App(): any {
  return (
    <div className="wrap container-fluid">
      <AppHeader></AppHeader>
      <AppContent></AppContent>
    </div>
  );
}
