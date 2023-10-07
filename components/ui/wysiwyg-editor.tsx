import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import QuillToolbar, { formats, modules } from "./wysiwyg-editor-toolbar";

type WYSIWYGEditorProps = {
  value: string;
  onChange: (...event: any[]) => void;
};
export default function WYSIWYGEditor({ value, onChange }: WYSIWYGEditorProps) {
  return (
    <div>
      <QuillToolbar />
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
      />
    </div>
  );
}
