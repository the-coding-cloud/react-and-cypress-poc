import React from 'react'
import AppProvider from "./AppProvider";
import AppConsumer from "./AppConsumer";

const AppComponent = () => (
    <AppProvider>
      <AppConsumer/>
    </AppProvider>
);

export default AppComponent
