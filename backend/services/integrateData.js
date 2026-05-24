const integrateData = (users, posts) => {
  return users.map((user) => {
    const userPosts = posts.filter(
      (post) => post.userId === user.id
    );

    return {
      userId: user.id,
      name: user.name,
      email: user.email,
      posts: userPosts
    };
  });
};

module.exports = integrateData;