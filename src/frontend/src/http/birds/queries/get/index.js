import defaultResponse from "./default";
import presenter from "./presenter";

export default {
  default: defaultResponse,
  query: async ({ client, id }) => {
    const endpoint = client.endpoints.base + id;
    const response = await client
      .http({
        method: "get",
        url: endpoint,
        headers: client.shared.headers,
      })
      .catch((_) => defaultResponse);

    if (response.isDefault) {
      return response;
    }

    const json = await response.data;
    return presenter({ json });
  },
};
