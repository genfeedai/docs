import BrowserOnly from "@docusaurus/BrowserOnly";
import Layout from "@theme/Layout";

export default function ApiPage() {
  return (
    <Layout
      title="API Documentation"
      description="GenFeed.ai API Documentation"
    >
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => {
          const SwaggerUI = require("swagger-ui-react").default;
          require("swagger-ui-react/swagger-ui.css");

          return (
            <div style={{ height: "calc(100vh - 60px)" }}>
              <SwaggerUI url="https://genfeed.ai/openapi.json" />
            </div>
          );
        }}
      </BrowserOnly>
    </Layout>
  );
}
