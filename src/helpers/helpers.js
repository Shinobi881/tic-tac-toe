function creator(value, collection, number) {
  for (var i = 0; i < number; i++) {
    collection.push(value);
  }
}

export default creator;