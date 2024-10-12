"use server"

import { Account, Client, Databases, Storage } from "node-appwrite";

export async function createSessionClient(session: string) {
    const client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APP_WRITE_ENDPOINT!)
        .setProject(process.env.NEXT_PUBLIC_APP_WRITE_PROJECT!)


    if (session) {
        client.setSession(session)
    }

    return {
        get account() {
            return new Account(client)
        },
        get databases() {
            return new Databases(client)
        },
    }
}

export async function createAdminClient() {
    const client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APP_WRITE_ENDPOINT!)
        .setProject(process.env.NEXT_PUBLIC_APP_WRITE_PROJECT!)
        .setKey(process.env.NEXT_APP_WRITE_KEY!);

    return {
        get account() {
            return new Account(client)
        },
        get databases() {
            return new Databases(client)
        },
        get storage() {
            return new Storage(client)
        }
    }
}

