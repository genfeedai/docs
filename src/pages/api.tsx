import BrowserOnly from '@docusaurus/BrowserOnly';
import Layout from '@theme/Layout';

import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function ApiPage() {
  return (
    <Layout title="API Documentation" description="GenFeed.ai API Documentation">
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => {
          return (
            <div style={{ height: 'calc(100vh - 60px)' }}>
              <SwaggerUI url="https://api.genfeed.ai/openapi.json" />
            </div>
          );
        }}
      </BrowserOnly>
    </Layout>
  );
}
