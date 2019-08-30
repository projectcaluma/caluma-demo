import Route from "@ember/routing/route";
import { queryManager } from "ember-apollo-client";
import gql from "graphql-tag";
import { action } from "@ember/object";
import { decodeId } from "ember-caluma/helpers/decode-id";

export default class DocumentsNewRoute extends Route {
  @queryManager apollo;

  async model() {
    const forms = await this.apollo.query(
      {
        query: gql`
          query {
            allForms(isPublished: true) {
              edges {
                node {
                  id
                  name
                  description
                  isPublished
                }
              }
            }
          }
        `
      },
      "allForms.edges"
    );
    return forms;
  }

  @action
  async createDocument(form) {
    const newDocument = await this.apollo.mutate({
      mutation: gql`
        mutation($form: ID!) {
          saveDocument(input: { form: $form }) {
            document {
              id
            }
          }
        }
      `,
      variables: { form }
    });
    this.transitionTo(
      "documents.edit",
      decodeId(newDocument.saveDocument.document.id)
    );
  }
}
