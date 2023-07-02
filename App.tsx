/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';

import {QueryClient, QueryClientProvider} from 'react-query';

import {config} from './gluestack-ui.config';
import {GluestackUIProvider, Text, Center} from './src/components';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config.theme}>
        <QueryClientProvider client={queryClient}>
          <SafeAreaView>
            <Center style={styles.fullHeight}>
              <Text size="2xl" fontWeight="bold">
                Template
              </Text>
            </Center>
          </SafeAreaView>
        </QueryClientProvider>
      </GluestackUIProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  fullHeight: {
    height: '100%',
  },
});

export default App;
