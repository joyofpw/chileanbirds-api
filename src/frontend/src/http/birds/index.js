import client from "./client";
import queries from "./queries";

export default {
  client,
  shared: client.shared,
  name: client.name,
  queries: () => queries({ client }),
};
