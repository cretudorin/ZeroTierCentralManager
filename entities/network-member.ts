export interface NetworkMember {
  id: string;
  clock: number;
  networkId: string;
  nodeId: string;
  controllerId: string;
  hidden: boolean;
  name: string;
  description: string;
  config: unknown;
  lastOnline: number;
  physicalAddress: string;
  clientVersion: string;
  protocolVersion: number;
  supportsRulesEngine: boolean;
}
