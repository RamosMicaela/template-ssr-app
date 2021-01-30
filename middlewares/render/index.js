import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../../src/App';

export default (req, res, _) => {
  res.send(ReactDOMServer.renderToString(React.createElement(App, res.locals)));
};
