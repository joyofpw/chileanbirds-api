export default (json) => ({
  items: json.json.sort((a, b) => a.name.latin < b.name.latin),
  total: json.json.length,
});
