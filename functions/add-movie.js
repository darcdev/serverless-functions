const { query } = require("./utils/hasura");

exports.handler = async (event) => {
  const { id, title, tagline, poster } = JSON.parse(event.body);
  const result = await query({
    query: `mutation ($poster: String!, $id: String!, $tagline: String!, $title: String!) {
      insert_movies_one(object: {id: $id, poster: $poster, tagline: $tagline, title: $title}) {
        id
        poster
        title
        tagline
      }
    }
    `,
    variables: { id, title, tagline, poster },
  });
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};
