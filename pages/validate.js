import * as React from 'react';
import * as firebase from 'firebase';
import LockScreenLoading from 'components/lockScreenLoading';

export default class Validate extends React.Component<{}> {
  componentDidMount() {
    const {history} = this.props;
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        history.push("/login");
      } else {
        history.push("/dashboard");
      }
    });
  }

  render() {
    return (
      <LockScreenLoading/>
    );
  }
}
