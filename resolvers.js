const dummy_user = {
    id: "1",
    name: "Yitian",
    email: "yitian@ymail.com",
    picture: "https://cloudinary.com/pretty"
};

module.exports = {
    Query: {
        me : () => dummy_user // should hook up to DB to resolve user
    }
};  