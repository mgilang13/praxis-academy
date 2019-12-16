class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure();
  }
}

function reliableMultiply(a, b) {
  try {
    console.log(primitiveMultiply(a, b));
    // console.log(primitiveMultiply(a, b));
  } catch (e) {
    // console.log(e.constructor.name != "MultiplicatorUnitFailure");
    if (e.constructor.name != "MultiplicatorUnitFailure") {
      throw e;
    } else {
      reliableMultiply(a, b);
    }
  }
}
reliableMultiply(8, 8);
