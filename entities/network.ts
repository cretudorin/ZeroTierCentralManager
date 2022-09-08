export interface NetworkConfig {
  id?: string;
  creationTime?: number;
  capabilities?: unknown[];
  dns?: unknown;
  enableBroadcast?: boolean;
  ipAssignmentPools?: unknown[];
  lastModified: number;
  mtu: number;
  multicastLimit: number;
  name: string;
  private: boolean;
  routes: unknown[];
  rules: unknown[];
  tags: unknown[];
  v4AssignMode: unknown;
  v6AssignMode: unknown;
}

export type Permission = unknown;
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
