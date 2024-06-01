import { unixfs } from "@helia/unixfs";
import { createHelia } from "helia";

(async () => {
  const helia = await createHelia();
  const fs = unixfs(helia);

  const encoder = new TextEncoder();

  const cid = await fs.addBytes(encoder.encode("Shahin"));

  console.log("Added file:", cid.toString());
})();
