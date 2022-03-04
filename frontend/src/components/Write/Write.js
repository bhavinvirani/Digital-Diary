import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function Write({ isFormate, isPrompt, setIsPrompt }) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    // console.log(editorState);
  }, [editorState]);

  return (
    <div>
      <div
        style={{
          border: "1px solid lightGray",
          padding: "2px",
          minHeight: "400px",
          height: "80vh",
        }}
      >
        {isFormate ? (
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            hashtag={{
              separator: " ",
              trigger: "#",
            }}
          />
        ) : (
          <Editor
            toolbarHidden
            editorState={editorState}
            onEditorStateChange={setEditorState}
            hashtag={{
              separator: " ",
              trigger: "#",
            }}
          />
        )}
      </div>
    </div>
  );
}
