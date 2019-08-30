import Route from "@ember/routing/route";
import { queryManager } from "ember-apollo-client";
import gql from "graphql-tag";

export default class DocumentsRoute extends Route {
  @queryManager apollo;

  async model() {
    return await this.apollo.query(
      {
        query: gql`
          query {
            allDocuments {
              edges {
                node {
                  id
                  form {
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
