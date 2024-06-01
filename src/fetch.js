import { unixfs } from "@helia/unixfs";
import { createHelia } from "helia";

(async () => {
  const cid = "bafkreiahmar22llv546c5wdkcebrq5vmpel6mrxhpupdiyiwnertxsa5gi";
  const helia = await createHelia();
  const fs = unixfs(helia);

  const decoder = new TextDecoder();
  let text = "";

  for await (const chunk of fs.cat(cid, {
    onProgress: (event) => {
      console.info("Cat event", event.type, event.detail);
    },
  })) {
    text += decoder.decode(chunk, { stream: true });
  }

  console.log("Final result is: ", text);
})();
