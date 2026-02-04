import ImageToPdfTool from "../components/ImageToPdfTool";

export default function Page() {
  return (
    <ImageToPdfTool
      showSchema={false}
      title="PNG to PDF Converter"
      subtitle="Convert PNG images to PDF. Merge multiple PNGs into one PDF."
    />
  );
}
