/** @jsx CannerScript */

import CannerScript, {Row, Col} from 'canner-script';
import {BorderTop, Title, PS} from './utils.schema.js';
import {ImgurStorage} from '@canner/storage';

export const imageStorage = new ImgurStorage({
  clientId: 'a214c4836559c77'
});

export default () => (
  <object keyName="profile">
    <Title title="Public profile">
      <BorderTop>
        <Row type="flex" gutter={64}>
          <Col span={16}>
            <string keyName="name" title="Name" required/>
            <PS ps="You can manage verified email addresses in your email settings.">
              <string keyName="publicEmail" title="Public Email" />
            </PS>
            <PS ps="You can @mention other users and organizations to link to them.">
              <string keyName="bio" title="Bio" ui="textarea"/>
            </PS>
            <string keyName="url" title="URL" ui="link" />
            <PS ps="You can @mention your company’s GitHub organization to link it.">
              <string keyName="company" title="Company" />
            </PS>
            <BorderTop>
              <PS ps="All of the fields on this page are optional and can be deleted at any time, and by filling them out, you're giving us consent to share this data wherever your user profile appears. Please see our privacy statement to learn more about how we use this information.">
                <string keyName="location" title="Location" />
              </PS>
            </BorderTop>
          </Col>
          <Col span={8}>
            <image keyName="picture" title="Profile picture" />
          </Col>
        </Row>
      </BorderTop>
    </Title>
    <Title title="Contributions">
      <BorderTop>
        <PS ps="Get credit for all your work by showing the number of contributions to private repositories on your profile without any repository or organization information. Learn how we count contributions.">
          <boolean
            keyName="includePrivateContributions"
            title="Include private contributions on my profile"
          />
        </PS>
      </BorderTop>
    </Title>
    <Title title="Jobs profile">
      <BorderTop>
        <boolean
          keyName="availableForHire"
          title="Available for hire"
        />
      </BorderTop>
    </Title>
  </object>
)