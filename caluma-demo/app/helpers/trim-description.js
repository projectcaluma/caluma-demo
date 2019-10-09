import { helper } from "@ember/component/helper";

export function trimDescription(params) {
  const [passedString, length] = params;
  if (passedString.length > length) {
    let trimmedString = passedString.substring(0, length);
    // check that no words are cut
    trimmedString = trimmedString.substr(
      0,
      Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
    );

    return trimmedString.concat(" ...");
  }
  return passedString;
}

export default helper(trimDescription);
