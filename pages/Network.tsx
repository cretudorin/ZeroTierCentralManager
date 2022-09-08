import React from 'react';
import { View, Text } from 'react-native';

import { Network } from '../entities/network';

export function NetworkScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: { params: { network: Network } };
}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{JSON.stringify(route.params.network.config.name)}</Text>
    </View>
  );
}
