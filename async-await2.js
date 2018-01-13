const hello = async () => {

  return "Hello";
}

const doIt = async () => {
  const text = await hello()
  console.log(text);
}

doIt();
