// In async/await format, nesting looks like this
async function main() {
  try {
    const result = await doSomethingcritical();
    try {
      const optionalResult = await doSomethingOptional(result);
      await doSomethingExtraNice(optionalResult);
    } catch (e) {
        // Ignore failures in optional steps and proceed or handle them if you want
    }
    await moreCriticalStuff();
  } catch (e) {
    console.error(`Critical failure: ${e.message}`);
  }
}
