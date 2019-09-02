import Route from "@ember/routing/route";
import { queryManager } from "ember-apollo-client";
import gql from "graphql-tag";

export default class DocumentsRoute extends Route {
  @queryManager apollo;

  model() {
    return this.apollo.watchQuery(
      {
        fetchPolicy: "cache-and-network",
        query: gql`
          query {
            allDocuments {
              edges {
                node {
                  id
                  form {
                    slug
                    name
                    description
                    createdAt
                  }
                }
              }
            }
          }
        `
      },
      "allDocuments.edges"
    );
  }
}
