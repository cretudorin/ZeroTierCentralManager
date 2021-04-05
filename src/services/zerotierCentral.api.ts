import axios from 'axios';
import { RandomToken } from '../entities/randomToken';

const SERVER_ADDRESS = ''
const API_TOKEN = ''

export class ZeroTierCentralApi {

    private static _instance = new ZeroTierCentralApi(SERVER_ADDRESS, API_TOKEN);
    private url: string;
    private apiToken: string;

    constructor(url: string, apiToken: string) {
        if (ZeroTierCentralApi._instance) {
            throw new Error("Error: Use CommunicationService.getInstance() instead of new.");
        }
        this.url = url;
        this.apiToken = apiToken;
        ZeroTierCentralApi._instance = this;
    }
    private getAuthHeader() {
        return { Authorization: `Bearer ${this.apiToken}` }
    }
    public static getInstance(): ZeroTierCentralApi {
        return ZeroTierCentralApi._instance;
    }
    // Network
    getNetworksList() {
        return axios.get(
            `${this.url}/network`,
            { headers: this.getAuthHeader() }
        );
    }
    createNetwork() {
        return axios.post(
            `${this.url}/network`,
            {},
            { headers: this.getAuthHeader() }
        );
    }
    getNetworkById(networkId: string) {
        return axios.get(
            `${this.url}/network/${encodeURIComponent(networkId)}`,
            { headers: this.getAuthHeader() }
        );
    }
    deleteNetwork(networkId: string) {
        return axios.delete(
            `${this.url}/network/${encodeURIComponent(networkId)}`,
            { headers: this.getAuthHeader() }
        );
    }
    updateNetwork(networkId: string) {
        return axios.post(
            `${this.url}/network/${encodeURIComponent(networkId)}`,
            {},
            { headers: this.getAuthHeader() }
        );
    }
    // Members
    getNetworkMembers(networkId: string) {
        return axios.get(
            `${this.url}/network/${encodeURIComponent(networkId)}/member`,
            { headers: this.getAuthHeader() }
        );
    }
    getNetworkMember(networkId: string, memberId: string) {
        return axios.get(
            `${this.url}/network/${encodeURIComponent(networkId)}/member/${encodeURIComponent(memberId)}`,
            { headers: this.getAuthHeader() }
        );
    }
    updateNetworkMember(networkId: string, memberId: string) {
        return axios.post(
            `${this.url}/network/${encodeURIComponent(networkId)}/member/${encodeURIComponent(memberId)}`,
            {},
            { headers: this.getAuthHeader() }
        );
    }
    deleteNetworkMember(networkId: string, memberId: string) {
        return axios.delete(
            `${this.url}/network/${encodeURIComponent(networkId)}/member/${encodeURIComponent(memberId)}`,
            { headers: this.getAuthHeader() }
        );
    }
    // User
    getUser(userId: string) {
        return axios.get(
            `${this.url}/user/${encodeURIComponent(userId)}`,
            { headers: this.getAuthHeader() }
        );
    }
    updateUser(userId: string) {
        return axios.post(
            `${this.url}/user/${encodeURIComponent(userId)}`,
            {},
            { headers: this.getAuthHeader() }
        );
    }
    deleteUser(userId: string) {
        return axios.delete(
            `${this.url}/user/${encodeURIComponent(userId)}`,
            { headers: this.getAuthHeader() }
        );
    }
    addUserToken(userId: string) {
        return axios.post(
            `${this.url}/user/${encodeURIComponent(userId)}/token`,
            {},
            { headers: this.getAuthHeader() }
        );
    }
    deleteApiToken(userId: string, tokenName: string) {
        return axios.delete(
            `${this.url}/user/${encodeURIComponent(userId)}/token/${encodeURIComponent(tokenName)}`,
            { headers: this.getAuthHeader() }
        );
    }
    // Organizations
    getOrganizations() {
        return axios.get(
            `${this.url}/org`,
            { headers: this.getAuthHeader() }
        );
    }
    getOrganizationById(orgId: string) {
        return axios.get(
            `${this.url}/org/${encodeURIComponent(orgId)}`,
            { headers: this.getAuthHeader() }
        );
    }
    getOrganizationUsers(orgId: string) {
        return axios.get(
            `${this.url}/org/${encodeURIComponent(orgId)}/user`,
            { headers: this.getAuthHeader() }
        );
    }
    getOrganizationInvitations() {
        return axios.get(
            `${this.url}/org-invitation`,
            { headers: this.getAuthHeader() }
        );
    }
    inviteUserToOrganization(email: string) {
        return axios.post(
            `${this.url}/org-invitation`,
            { email },
            { headers: this.getAuthHeader() }
        );
    }
    getOrganizationInvitation(inviteId: string) {
        return axios.get(
            `${this.url}/org-invitation/${encodeURIComponent(inviteId)}`,
            { headers: this.getAuthHeader() }
        );
    }
    acceptOrganizationInvitation(inviteId: string) {
        return axios.post(
            `${this.url}/org-invitation/${encodeURIComponent(inviteId)}`,
            { headers: this.getAuthHeader() }
        );
    }
    deleteOrganizationInvitation(inviteId: string) {
        return axios.delete(
            `${this.url}/org-invitation/${encodeURIComponent(inviteId)}`,
            { headers: this.getAuthHeader() }
        );
    }
    // Util
    getRandomToken() {
        return axios.get<RandomToken>(`${this.url}/randomToken`, { headers: this.getAuthHeader() });
    }
}
