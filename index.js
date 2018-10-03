const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  newKeyValuesObject = {key: value}
  return Object.assign({}, obj, newKeyValuesObject);
}
