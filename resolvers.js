const { AuthenticationError } = require("apollo-server");

const dummy_user = {
    id: "1",
    name: "Yitian",
    email: "yitian@ymail.com",
    picture: "https://cloudinary.com/pretty"
};

const authenticated = next => (root, args, ctx, info) => {
    if (!ctx.currentUser) {
        throw new AuthenticationError("You must be logged in");
    }
    return next(root, args, ctx, info);
}

module.exports = {
    Query: {
        me : authenticated((root, args, ctx) => ctx.currentUser)
    }
};  