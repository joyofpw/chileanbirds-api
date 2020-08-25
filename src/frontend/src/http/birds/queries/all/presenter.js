export default (result) => ({
  items: result.json.sort((a, b) => a.name.latin < b.name.latin),
  total: result.json.length,
});
