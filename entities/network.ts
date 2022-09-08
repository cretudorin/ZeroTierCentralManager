import { NetworkConfig } from './network-config';
import { Permission } from './permission';

export interface Network {
  id?: string;
  clock?: number;
  config: NetworkConfig;
  description?: string;
  ruleSource?: string;
  permissions: Permission[];
  ownerId?: string;
  authorizedMemberCount?: number;
  totalMemberCount: number;
  capabilitiesByName: unknown;
  tagsByName: unknown;
}
