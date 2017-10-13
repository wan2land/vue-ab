
export function pick(collection, weight = {}) {
  var keys = Object.keys(collection);
  var thresholds = [];
  var sumOfWeights = 0;
  for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let currWeight = weight[key];
      if (!currWeight) continue;
      thresholds.push([key, sumOfWeights + currWeight]);
      sumOfWeights += currWeight;
  }
  if (sumOfWeights) {
      var pickedKey = Math.floor(Math.random() * sumOfWeights);
      for (let i = 0; i < thresholds.length; i++) {
          if (thresholds[i][1] > pickedKey) return thresholds[i][0];
      }
  }
  return keys[Math.floor(Math.random() * keys.length)];
}
