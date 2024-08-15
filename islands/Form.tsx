import { useRef } from "preact/hooks";;

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleOnSubmit(e: SubmitEvent) {
    e.preventDefault();
    console.log(e, formRef.current);
  }

  return (
    <form ref={formRef} onSubmit={handleOnSubmit}>
      <input type="text" name="name" />
      <button>Submit</button>
    </form>
  )
}