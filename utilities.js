export let styleText = (text) => {
  const result = text.replace(/([A-Z])/g, (s) => ` ${s.toLowerCase()}`);
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
};

// console.log(styleText("camelCase"));
