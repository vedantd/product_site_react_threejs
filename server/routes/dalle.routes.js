import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const config = new Configuration({
  organization: "org-W7oaYf7cD8FEfFvf46xygDGj",
  apiKey: "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",
});

const openai = new OpenAIApi(config);

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});

router.route("/").post(async (req, res) => {
  console.log("Inside")
  try {
    //console.log("moose" + JSON.stringify(req.body));

    // const response = await openai.createImage({
    //   prompt: prompt.toString(),
    //   n: 1,
    //   size: "1024x1024",
    //   response_format: "url",
    // });
    // const response = await openai.createImage({
    //   prompt: "A cute baby sea otter",
    //   n: 1,
    //   size: "1024x1024",
    // });
    const response = await openai.createImage({
      prompt: "a white siamese cat",
      n: 1,
      size: "1024x1024",
    });
    image_url = response.data.data[0].url;
    

    // const image = response.data.data[0].b64_json;
    console.log("photo to aray");

    res.status(200).json({ photo: image_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" })
  }
});

export default router;
