import React, { useEffect, useState } from 'react';
import { Button, View } from 'react-native';

import { Network } from '../entities/network';

export function NetworksScreen({ navigation }: any) {
  const [data, setData] = useState<Network[]>([]);

  useEffect(() => {
    fetch('https://api.zerotier.com/api/v1/network', {
      method: 'GET',
      mode: 'no-cors',
      credentials: 'include',
      headers: {
        Authorization: 'Token xxxx',
      },
    })
      .then((res) => res.json())
      .then((data: Network[]) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {data.map((item: any) => (
        <Button
          key={item.id}
          onPress={() => navigation.navigate('NetworkScreen', { network: item })}
          title={item.config.name}
        />
      ))}
    </View>
  );
}
