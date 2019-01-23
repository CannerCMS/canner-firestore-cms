/** @jsx CannerScript */

import CannerScript, {Default, Layout, Row, Col, Block} from 'canner-script';
import Panel from './layouts/panel';
import TitleComponent from './layouts/Title';
import PSComponent from './layouts/PS';

export const BorderTop = ({attributes, children}) => (
  <Default style={{...((attributes || {}).style || {}), borderTop: '1px solid #ccc', paddingTop: 16}}>
    {children}    
  </Default>
)

export const Title = ({attributes, children}) => (
  <Layout component={TitleComponent} {...attributes}>
    {children}
  </Layout>
)

export const PS = ({attributes, children}) => (
  <Layout component={PSComponent} {...attributes}>
    {children}
  </Layout>
)