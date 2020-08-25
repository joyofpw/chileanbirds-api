import all from "./all";
import get from "./get";

export default ({ client }) => ({
  all: () => all({ client }),
  get: () => get({ client }),
});
