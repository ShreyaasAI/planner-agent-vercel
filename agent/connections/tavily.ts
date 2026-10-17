import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.tavily.com/mcp",
  description: "Search and retrieve information from web sources.",
  auth: connect("mcp.tavily.com/prj_g9u36bt9qUPSi54aHyyrbXPMVDDG"),
});
