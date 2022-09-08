import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { Network } from '../entities/network';
import { NetworkMember } from '../entities/network-member';
import { CONTROLLER, TOKEN } from '../secrets';

export function NetworkScreen({ navigation, route }: { navigation: any; route: any }) {
  const [members, setMembers] = useState<NetworkMember[]>();

  useEffect(() => {
    console.log('find me1');

    fetch(`${CONTROLLER}/api/v1/network/${route.params.network.config.id}/member`, {
      method: 'GET',
      mode: 'no-cors',
      credentials: 'include',
      headers: {
        Authorization: `Token ${TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data: NetworkMember[]) => {
        setMembers(data);
        console.log('find me');
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {members?.map((member) => (
        <Text key={member.id}>{member.name}</Text>
      ))}
    </View>
  );
}
