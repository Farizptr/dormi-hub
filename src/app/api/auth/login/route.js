import User from "@models/user";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { username, password } = await request.json();

    try {
        await connectToDB()

        const user = await User.findOne({
            username
        });

        if (user) {
            if (user.password === password) {
                return new Response(JSON.stringify({
                    message: "Login successful",
                    data: {
                        "id": user.id,
                        "username": user.username,
                        "role": user.role
                    }
                }), { status: 200 })
            } 
        }

        return new Response(JSON.stringify({
            message: "Invalid username or password"
        }), { status: 404 })
    } catch (error) {
        return new Response("Failed to fetch all users", { status: 500 })
    }
}