import {createClient} from 'canner-graphql-interface';
import schema from '../canner.schema';
import utils from './index';

const client = createClient({
  schema: schema.schema,
  connector: utils.connector
});
console.log({schema, connector: utils.connector, client})
export default client;