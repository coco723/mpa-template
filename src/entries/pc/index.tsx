import { HashRouter, Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';

import { ConfigProvider } from 'antd';
import { Layout } from '@components/index';
import ReactDOM from "react-dom";
import { Provider as StoreProvider } from 'react-redux';
import reportWebVitals from '../../reportWebVitals';
import { routerConfig } from '@routes/pc/index';
import store from '@stores/pc/index';
import zhCN from 'antd/es/locale/zh_CN';

const Loading = () => <div />;


const PC = () => {
  return (
    <StoreProvider store={store}>
      <ConfigProvider locale={zhCN}>
        <HashRouter>
          <Layout>
            <Suspense fallback={<Loading />}>
              <Switch>
                {routerConfig.map(route => (
                  <Route key={route.path} {...route} />
                ))}
              </Switch>
            </Suspense>
          </Layout>
        </HashRouter>
      </ConfigProvider>
    </StoreProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <PC />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
