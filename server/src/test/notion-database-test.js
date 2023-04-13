const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: "secret_9VmcnB2AyNLBC6aTzBBZZFI3j9vjgjDC9Q7yoRYXwbA",
});

(async () => {
  const res = await notion.databases.query({
    database_id: "1c0101b33ea04cbca65f26207db609c5",
  });

  console.log(res);
})();
