import { useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

export const OnChangePlugin = ({ updateMemo }) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerUpdateListener((listener) => {
      let timer = null;

      const inputValues =
        listener.editorState.toJSON().root.children[0].children;

      if (timer) {
        return;
      }

      timer = setTimeout(() => {
        if (inputValues.length > 0) {
          updateMemo(inputValues);
        }
      }, 2000);
    });
  }, [editor]);

  return null;
};
