import BrowserOnly from '@docusaurus/BrowserOnly';
import Layout from '@theme/Layout';

import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function ApiPage() {
  return (
    <Layout title="API Documentation" description="GenFeed.ai API Documentation">
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => <SwaggerUI url="https://api.genfeed.ai/v1/openapi.json" />}
      </BrowserOnly>
    </Layout>
  );
}
