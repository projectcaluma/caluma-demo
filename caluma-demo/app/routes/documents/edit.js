import Route from "@ember/routing/route";
import { queryManager } from "ember-apollo-client";
import gql from "graphql-tag";
import { action } from "@ember/object";

export default class DocumentsEditRoute extends Route {
  @queryManager apollo;

  model(params) {
    return params.uuid;
  }

  @action
  async deleteDocument(document) {
    await this.apollo.mutate({
      mutation: gql`
        mutation($document: ID!) {
          removeDocument(input: { document: $document }) {
            document {
              id
            }
          }
        }
      `,
      variables: { document }
    });
    this.transitionTo("documents");
  }
}
