import React, { Component } from 'react';
import Spinner from 'react-spinner';
import classNames from 'classnames';
import {Container} from 'semantic-ui-react';
import AccCore from 'opentok-accelerator-core';
import 'opentok-solutions-css';

import config from './config.json';
import './VideoChat.css';

import {createToken} from '../../tokbox/tokbox.js';

let otCore;
const otCoreOptions = {
  credentials: {
    apiKey: config.apiKey,
    sessionId: config.sessionId, // Change to get session id from url
    token: createToken(config.sessionId), // generate token from session id
  },
  // A container can either be a query selector or an HTML Element
  streamContainers(pubSub, type, data, stream) {
    return {
      publisher: {
        camera: '#cameraPublisherContainer',
        screen: '#screenPublisherContainer',
      },
      subscriber: {
        camera: '#cameraSubscriberContainer',
        screen: '#screenSubscriberContainer',
      },
    }[pubSub][type];
  },
  controlsContainer: '#controls',
  packages: ['textChat', 'screenSharing', 'annotation'],
  communication: {
    callProperites: null, // Using default
  },
  textChat: {
    name: 'Username', // FROM LOGIN
    waitingMessage: 'Messages will be delivered when other users arrive',
    container: '#chat',
    alwaysOpen: true,
  },
  screenSharing: {
    extensionID: 'nbklomglchjeghljjhjahgjobppkfpfm',
    annotation: true,
    externalWindow: false,
    dev: true,
    screenProperties: {
      insertMode: 'append',
      width: '100%',
      height: '100%',
      showControls: false,
      style: {
        buttonDisplayMode: 'off',
      },
      videoSource: 'window',
      fitMode: 'contain' // Using default
    },
  },
  annotation: {
    absoluteParent: {
      publisher: '.Vid-video-container',
      subscriber: '.Vid-video-container'
    }
  },
};

/**
 * Build classes for container elements based on state
 * @param {Object} state
 */
const containerClasses = (state) => {
  const { active, meta, localAudioEnabled, localVideoEnabled } = state;
  const sharingScreen = meta ? !!meta.publisher.screen : false;
  const viewingSharedScreen = meta ? meta.subscriber.screen : false;
  const activeCameraSubscribers = meta ? meta.subscriber.camera : 0;
  const activeCameraSubscribersGt2 = activeCameraSubscribers > 2;
  const activeCameraSubscribersOdd = activeCameraSubscribers % 2;
  const screenshareActive = viewingSharedScreen || sharingScreen;
  return {
    controlClass: classNames('Vid-control-container', { hidden: !active }),
    localAudioClass: classNames('ots-video-control circle audio', { hidden: !active, muted: !localAudioEnabled }),
    localVideoClass: classNames('ots-video-control circle video', { hidden: !active, muted: !localVideoEnabled }),
    localCallClass: classNames('ots-video-control circle end-call', { hidden: !active }),
    cameraPublisherClass: classNames('video-container', { hidden: !active, small: !!activeCameraSubscribers || screenshareActive, left: screenshareActive }),
    screenPublisherClass: classNames('video-container', { hidden: !active || !sharingScreen }),
    cameraSubscriberClass: classNames('video-container', { hidden: !active || !activeCameraSubscribers },
      { 'active-gt2': activeCameraSubscribersGt2 && !screenshareActive },
      { 'active-odd': activeCameraSubscribersOdd && !screenshareActive },
      { small: screenshareActive }
    ),
    screenSubscriberClass: classNames('video-container', { hidden: !viewingSharedScreen || !active }),
  };
};

const connectingMask = () =>
  <div className="Vid-mask">
    <Spinner />
    <div className="message with-spinner">Connecting</div>
  </div>;

const startCallMask = start =>
  <div className="Vid-mask">
    <button className="message button clickable" onClick={start}>Click to Video Chat</button>
  </div>;

class VideoChat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      connected: false,
      active: false,
      publishers: null,
      subscribers: null,
      meta: null,
      localAudioEnabled: true,
      localVideoEnabled: true,
    };
    this.startCall = this.startCall.bind(this);
    this.endCall = this.endCall.bind(this);
    this.toggleLocalAudio = this.toggleLocalAudio.bind(this);
    this.toggleLocalVideo = this.toggleLocalVideo.bind(this);
  }

  componentDidMount() {
    otCore = new AccCore(otCoreOptions);
    otCore.connect().then(() => this.setState({ connected: true }));
    const events = [
      'subscribeToCamera',
      'unsubscribeFromCamera',
      'subscribeToScreen',
      'unsubscribeFromScreen',
      'startScreenShare',
      'endScreenShare',
    ];

    events.forEach(event => otCore.on(event, ({ publishers, subscribers, meta }) => {
      this.setState({ publishers, subscribers, meta });
    }));
  }

  startCall() {
    otCore.startCall()
      .then(({ publishers, subscribers, meta }) => {
        this.setState({ publishers, subscribers, meta, active: true });
      }).catch(error => console.log(error));
  }

  endCall() {
    otCore.endCall();
    this.setState({ active: false });
  }

  toggleLocalAudio() {
    otCore.toggleLocalAudio(!this.state.localAudioEnabled);
    this.setState({ localAudioEnabled: !this.state.localAudioEnabled });
  }

  toggleLocalVideo() {
    otCore.toggleLocalVideo(!this.state.localVideoEnabled);
    this.setState({ localVideoEnabled: !this.state.localVideoEnabled });
  }

  render() {
    const { connected, active } = this.state;
    const {
      localAudioClass,
      localVideoClass,
      localCallClass,
      controlClass,
      cameraPublisherClass,
      screenPublisherClass,
      cameraSubscriberClass,
      screenSubscriberClass,
    } = containerClasses(this.state);

    return (
      <Container style={{ minHeight: 1200, padding: '5em 0em' }}>
        <div className="Vid">
          <div className="Vid-main">
            <div className="Vid-video-container">
              { !connected && connectingMask() }
              { connected && !active && startCallMask(this.startCall)}
              <div id="cameraPublisherContainer" className={cameraPublisherClass} />
              <div id="screenPublisherContainer" className={screenPublisherClass} />
              <div id="cameraSubscriberContainer" className={cameraSubscriberClass} />
              <div id="screenSubscriberContainer" className={screenSubscriberClass} />
            </div>
            <div id="controls" className={controlClass}>
              <div className={localAudioClass} onClick={this.toggleLocalAudio} />
              <div className={localVideoClass} onClick={this.toggleLocalVideo} />
              <div className={localCallClass} onClick={this.endCall} />
            </div>
            <div id="chat" className="Vid-chat-container" />
          </div>
        </div>
      </Container>
    );
  }
}

export default VideoChat;
