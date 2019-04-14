import React from 'react';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Unrecognized WebScoket connection']);

import Routes from './routes';


const App = () => <Routes />;

export default App;
