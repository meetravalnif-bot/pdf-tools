import ImageToPdfTool from "../components/ImageToPdfTool";

export default function Page() {
  return (
    <ImageToPdfTool
      showSchema={false}
      title="JPG to PDF Converter"
      subtitle="Convert JPG/JPEG images to PDF. Merge multiple JPGs into one PDF."
    />
  );
}
