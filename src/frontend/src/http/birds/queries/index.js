import all from "./all";
import get from "./get";

export default ({ client }) => ({
  all: {
    default: all.default,
    query: async () => all.query({ client }),
  },
  get: {
    default: get.default,
    query: async ({ id }) => get.query({ client, id }),
  },
});
