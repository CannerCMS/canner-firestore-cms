import * as React from 'react';
import * as firebase from 'firebase';
import styled from 'styled-components';
import {Menu, Modal, Table, Avatar} from 'antd';
import Canner from 'canner';
import Container, {transformSchemaToMenuConfig} from '@canner/container';
import R from '@canner/history-router';
import schema from '../schema/canner.schema';
import firebaseConfig from '../config-firebase';
import client from '../schema/utils/client';

const UserName = styled.span`
  margin-left: 8px;
`

const AvatarWithIcon = styled(Avatar)`
  .anticon {
    margin-right: 0 !important;
  }
`

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class Dashboard extends React.Component {
  state = {
    visible: false,
    dataChanged: {},
    user: null,
    deploying: false,
  }

  UNSAFE_componentWillMount() {
    const {history} = this.props;
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        history.push('/login');
      } else {
        if (history.location.pathname.match("/dashboard")) {
          this.setState({
            user: user
          });
        } else {
          history.push('/dashboard');
        }
      }
    });
  }

  headerMenuOnClick = (menuItem) => {
    const {history} = this.props;
    if(menuItem.key === 'logout') {
      firebase.auth().signOut()
        .then(function() {
          history.push('/');
        });
    } else if(menuItem.key === "overview") {
      this.setState({
        visible: true
      });
    }
  }

  hideOverview = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const {user} = this.state;
    const {history} = this.props;
    const columns = [{
      title: 'Project ID',
      dataIndex: 'projectId',
      key: 'projectId',
    }, {
      title: 'Auth Domain',
      dataIndex: 'authDomain',
      key: 'authDomain',
    }, {
      title: 'Storage Bucket',
      dataIndex: 'storageBucket',
      key: 'storageBucket',
    }, {
      title: 'Database URL',
      dataIndex: 'databaseURL',
      key: 'databaseURL',
      render: ((text) => <a href={text} target="_blank" rel="noopener noreferrer">{text}</a>),
    }];

    // const secondPath = window.location.pathname.split('/')[2];
    const username = user ? user.displayName || user.email : 'loading...';
    return (
      <React.Fragment>
        <Container
          dataDidChange={this.dataDidChange}
          schema={schema}
          sidebarConfig={{
            menuConfig: [
              ...transformSchemaToMenuConfig(schema.schema)
            ],
            logo: {
              src: "/static/logo-word-white.png"
            }
          }}
          navbarConfig={{
            showSaveButton: true,
            renderMenu: () => (
              <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '64px', display: 'inline-block' }}
                selectedKeys={[]}
                onClick={this.headerMenuOnClick}
              >
                <Menu.SubMenu title={<span>
                  <AvatarWithIcon style={{color: '#f56a00', backgroundColor: '#fde3cf'}} icon="user" />
                  <UserName>{username}</UserName>
                  </span>}>
                  <Menu.Item key="overview">Overview</Menu.Item>
                  <Menu.Item key="logout">Log out</Menu.Item>
                </Menu.SubMenu>
              </Menu>
            )
          }}
          router={new R({
            history,
            baseUrl: "/dashboard"
          })}
        >
          <Canner
            client={client}
          />
        </Container>
        <Modal
          width={"80%"}
          title="Overview Firebase"
          visible={this.state.visible}
          onCancel={this.hideOverview}
          footer={null}
        >
          <Table columns={columns} dataSource={[firebaseConfig]} pagination={false} />
        </Modal>
      </React.Fragment>
    );
  }
}
