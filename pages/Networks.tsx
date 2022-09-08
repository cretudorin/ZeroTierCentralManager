import React, { useEffect, useState } from 'react';
import { Button, View } from 'react-native';

import { Network } from '../entities/network';
import { CONTROLLER, TOKEN } from '../secrets';

export function NetworksScreen({ navigation }: any) {
  const [data, setData] = useState<Network[]>();

  useEffect(() => {
    console.log('find me1');
    fetch(`${CONTROLLER}/api/v1/network`, {
      method: 'GET',
      mode: 'no-cors',
      credentials: 'include',
      headers: {
        Authorization: `Token ${TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data: Network[]) => {
        setData(data);
        console.log('find me');
        console.log(data);
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
