/** @jsx builder */

// eslint-disable-next-line no-unused-vars
import builder, {Layout, Default, Row, Col} from 'canner-script';
import Profile from './profile.schema';
import utils from './utils/index';
const {connector, imageStorage} = utils;
export default (
  <root connector={connector} imageStorage={imageStorage}>
    <Profile />
  </root>
);
