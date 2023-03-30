import s from "./AddRecipe.module.css";

const AddRecipe = () => {
  return (
    <div className={s.main}>
      <div className={s.card}>
        <label className={s.inputStyle}>Title</label>
        <input className={s.inputStyle} placeholder="enter title"></input>
        <label className={s.inputStyle}>Prep time</label>
        <input className={s.inputStyle} placeholder="prep time"></input>
        <label className={s.inputStyle}>Preparation</label>
        <input className={s.inputStyle} placeholder="preparation steps"></input>
        <label className={s.inputStyle}>Upload picture:</label>

        <input className={s.upload} type="file" name="food picture" accept="image/png, image/jpeg" />

        <button className={s.button}>Save</button>
      </div>
      <div></div>
    </div>
  );
};
export default AddRecipe;
