// FOR SETTING ELASTICSEARCH CONNECTION

import { Client } from "@elastic/elasticsearch";

let client;
try {
  client = new Client({
    // elastilishing the conection between the nodejs and elastic_search
    node: process.env.ELASTICSEARCH_URL,
    auth: {
      username: process.env.ELASTIC_USER,
      password: process.env.ELASTIC_PASSWORD,
    },
  });
} catch (error) {
  console.log(error);
}

export default client;
