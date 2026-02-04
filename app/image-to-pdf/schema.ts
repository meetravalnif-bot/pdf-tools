export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I convert an image to PDF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Upload your JPG/PNG images, reorder them if needed, then click Convert to PDF to download the file.",
        },
      },
      {
        "@type": "Question",
        name: "Can I merge multiple images into one PDF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Upload multiple images and the tool will combine them into a single PDF in the same order.",
        },
      },
      {
        "@type": "Question",
        name: "Is this tool free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can convert images to PDF for free.",
        },
      },
      {
        "@type": "Question",
        name: "Are my images uploaded to a server?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The conversion runs in your browser, so your images stay on your device.",
        },
      },
      {
        "@type": "Question",
        name: "Which image formats are supported?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "JPG/JPEG and PNG are supported. (Other formats like HEIC may not work unless converted to JPG/PNG first.)",
        },
      },
    ],
  };
}
