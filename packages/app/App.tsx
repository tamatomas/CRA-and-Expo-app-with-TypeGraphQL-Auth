import React, { Component } from 'react';
import Navigation from "./src/modules/Navigation"
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from "@ui-kitten/eva-icons"
import { ApolloProvider } from "@apollo/client"
import { apolloClient } from "./src/utils"

export default class Example extends Component {

  render() {
    return (
      <>
        <ApolloProvider client={apolloClient}>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={eva.light}>
            <Navigation />
          </ApplicationProvider>
        </ApolloProvider>
      </>
    );
  }
}
