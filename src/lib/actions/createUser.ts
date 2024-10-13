"use server"

import { cookies } from "next/headers"
import { ID } from "node-appwrite"
import { createAdminClient } from "../server/appwrite"


export const createUser = async ({ name, email, password, confirmPassword }: { name: string, email: string, password: string, confirmPassword: string }) => {

    if (!name || !email || !password || !confirmPassword) return { error: 'Please fill all fields!' }

    if (password !== confirmPassword) return { error: 'Passwords do not match!' }
    if (password.length < 8) return { error: 'Password must be at least 8 characters long!' }

    const { account } = await createAdminClient()

    try {

        await account.create(ID.unique(), email, password, name)

        const session = await account.createEmailPasswordSession(email, password);

        cookies().set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            expires: new Date(session.expire),
            secure: process.env.NODE_ENV === "production",
        });

        return { success: true }

    } catch (error) {
        console.log((error as Error).message)
        return { error: 'Error creating user!' }
    }
}