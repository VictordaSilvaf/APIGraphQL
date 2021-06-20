import Post from '../../../models/Post';

export default {
    Post: {
        author: (post) => Post.findById(post.author),
    },
    Query: {
        posts: () => Post.find(),
        post: (_, { id }) => Post.findById(id),
    },
    mutation: {
        createPost: (_, { data }) => Post.create(data),
        updatePost: (_, { id, data }) => Post.findOneAndUpdate(id, data, { new: true}),
        deletePost: async (_, { id }) => !!(await Post.findByIdAndDelete(id)),
    },
}