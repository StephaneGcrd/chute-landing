import { json, type MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Chute" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
};

export const loader = async ({ context }) => {
  /* const query = `
  {
    projectCollection{
      items{
        title,
        shortDescription,
        client,
        date,
        imageLeft,
        pageId,
        coverMedia {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
      }
    }
  }
`;

  const projectsQuery = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authenticate the request
        Authorization: "Bearer " + process.env.CONTENTFUL_DELIVERY_API_KEY,
      },
      // send the GraphQL query
      body: JSON.stringify({ query }),
    }
  );

  const projects = await projectsQuery.json(); */

  return json({ projects: "hello" });
};

export default function Index() {
  /*   const { projects } = useLoaderData();

  console.log(projects); */

  return <div>Chute !</div>;
}
