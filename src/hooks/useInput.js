import { useState } from "react";

function useInput(init) {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const clearValue = () => {
    setValue("");
  };
  return [value, onChange, clearValue];
}
