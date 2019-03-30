/** @jsx CannerScript */
import CannerScript from 'canner-script';
import Pages from './pages.schema';
import Posts from './posts.schema';
import Categories from './categories.schema';
import utils from './utils/index';
const {imageStorage} = utils;
export default (
  <root imageStorage={imageStorage}>
    <Pages />
    <Posts />
    <Categories />
  </root>
);
