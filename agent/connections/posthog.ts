import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.posthog.com/mcp",
  description: "Analyze product usage, experiments, and insights.",
  auth: connect("mcp.posthog.com/prj_g9u36bt9qUPSi54aHyyrbXPMVDDG"),
});
