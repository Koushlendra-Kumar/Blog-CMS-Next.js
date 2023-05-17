import { connectToDB } from '@/utils/database';
import Blog from '@models/Blog';

export const GET = async (request) => {
    try {
        await connectToDB()

        const blogs = await Blog.find({}).populate('author')

        return new Response(JSON.stringify(blogs), { status: 200 })
    } catch (error) {
        console.log(error, 'error fetching all blogs')
        return new Response("Failed to fetch all blogs", { status: 500 })
    }
} 
