import Route from "@ember/routing/route";
import { queryManager } from "ember-apollo-client";
import gql from "graphql-tag";
import { decodeId } from "ember-caluma/helpers/decode-id";

export default class ShowFormsRoute extends Route {
  @queryManager apollo;

  async model() {
    const documents = await this.apollo.query(
      {
        query: gql`
          query {
            allDocuments(form: "test") {
              edges {
                node {
                  id
                }
              }
            }
          }
        `
      },
      "allDocuments.edges"
    );

    if (!documents.length) {
      return await this.apollo.mutate(
        {
          mutation: gql`
            mutation($input: SaveDocumentInput!) {
              saveDocument(input: $input) {
                document {
                  id
                }
              }
            }
          `,
          variables: {
            input: {
              form: "test"
            }
          }
        },
        "saveDocument.document.id"
      );
    }

    return decodeId(documents[0].node.id);
  }
}
