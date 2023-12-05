import User from "@models/user";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const userCollectionName = User.collection.name;
        console.log('Using collection:', userCollectionName);

        const users = await User.find({})
        console.log(users)
        return new Response(JSON.stringify(users), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all users", { status: 500 })
    }
}