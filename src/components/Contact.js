const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      <form>
        <input
          type="text"
          className="border border-black p-4 m-4"
          placeholder="Name"
        ></input>
        <input
          className="border border-black p-4 m-4"
          placeholder="Message"
        ></input>
        <button className="border border-black p-4 m-4 bg-slate-300">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
