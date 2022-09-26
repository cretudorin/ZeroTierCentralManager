import React, { useEffect, useState } from 'react';
import { Button, View } from 'react-native';

import { Network } from '../entities/network';

export function NetworksScreen({ navigation, route }: any) {
  const { controller, token } = route.params.session;
  const [data, setData] = useState<Network[]>();

  useEffect(() => {
    fetch(`${controller}/api/v1/network`, {
      method: 'GET',
      mode: 'no-cors',
      credentials: 'include',
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data: Network[]) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {data?.map((item) => (
        <Button
          key={item.id}
          onPress={() => navigation.navigate('NetworkScreen', { network: item })}
          title={item.config.name}
        />
      ))}
    </View>
  );
}
