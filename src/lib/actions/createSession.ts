"use server"

import { cookies } from "next/headers"
import { createAdminClient } from "../server/appwrite"

export const createSession = async ({ email, password }: { email: string, password: string }) => {

    if (!email || !password) return { error: 'Please fill those fields!' }

    const { account } = await createAdminClient()

    try {

        const session = await account.createEmailPasswordSession(email, password)


        cookies().set('appwrite-session', session.secret, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            sameSite: 'strict',
            expires: new Date(session.expire), // 7 days
        })

        return { success: true }

    } catch (error) {
        console.log((error as Error).message)
        return { error: 'Invalid Credentials!' }
    }
}