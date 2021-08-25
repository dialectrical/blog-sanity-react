import sanityclient from "@sanity/client";

export default sanityclient({
  projectId: "9kkh2oou", //find this at manage.sanity.io or in sanity.json
  dataset: "production",
  useCdn: true
});
