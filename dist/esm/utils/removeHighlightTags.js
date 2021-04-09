var regexHighlightTags = /(<mark>|<\/mark>)/g;
var regexHasHighlightTags = RegExp(regexHighlightTags.source);
export function removeHighlightTags(value) {
  return value && regexHasHighlightTags.test(value) ? value.replace(regexHighlightTags, '') : value;
}