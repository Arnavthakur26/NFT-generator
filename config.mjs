export default {
  traitsFolder: "traits", // folder name containing the image assets
  traitFolders: [
    "Background",
    "Bottom Left",
    "Bottom Right",
    "MATAR Logo",
    "MATAR Text",
    "QR Code",
    "Smarts",
    "Top Left",
    "Top Right",
  ], // an array of subfolder names
  outputFolder: "output_images",
  outputFolderJson: "output_json", // folder name for saving generated NFTs

  layersNumber: 9, // number of image layers to combine
  numImages: 5, // total number of NFTs to generate
  startAt: 1, // index number to start generating NFTs at ( 0 or 1 )

  imageWidth: 624, // width of generated image
  imageHeight: 932, // height of generated image

  // NFT Metadata for each NFT
  collectionName: "NFT MATAR", // name of NFT collection
  collectionDescription:
    "Unlock a seamless stream of earnings with our exclusive NFT! Owning this NFT for a 3-month period entitles you to regular profit distributions deposited directly into your wallet every quarter. Experience a lucrative investment that combines the excitement of NFT ownership with the satisfaction of consistent financial gains. Don't miss the opportunity to elevate your portfolio with this professionally crafted, profit-generating NFT.", // description of NFT collection
  collectionExternal_url: "https://example.com", // external URL for NFT collection
};
