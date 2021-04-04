import * as SecureStore from 'expo-secure-store';

export class LocalStorageService {

    private static _instance = new LocalStorageService();

    constructor() {
        if (LocalStorageService._instance) {
            throw new Error("Error: Use LocalStorageService.getInstance() instead of new.");
        }
        LocalStorageService._instance = this;
    }

    public static getInstance(): LocalStorageService {
        return LocalStorageService._instance;
    }

    async storeJson(storageKey: string, value: { [key: string]: string }) {
        return this
            .storeData(storageKey, JSON.stringify(value))
            .catch((error) => console.error(error));
    }

    async storeData(storageKey: string, value: string) {
        return SecureStore
            .setItemAsync(storageKey, value)
            .catch((error) => console.error(error));
    }

    async getString(storageKey: string) {
        return SecureStore
            .getItemAsync(storageKey)
            .catch((error) => console.error(error));
    }

    getJson(storageKey: string) {
        return this.getString(storageKey).then(
            (result) => result ? JSON.parse(result) : null,
            (error) => console.error(error)
        );
    }
}