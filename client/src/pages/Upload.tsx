import "./styles/Upload.scss";

export default function Upload(): JSX.Element {
  return (
    <section id="upload">
      <form>
        <label htmlFor="">
          Titre <span>*</span>
        </label>
        <input type="text" id="" name="" />
        <label htmlFor="">
          Type d'emploi <span>*</span>
        </label>
        <select name="" id="">
          <option value="stage">Stage</option>
          <option value="cdd">CDD</option>
          <option value="cdi">CDI</option>
        </select>
        <label htmlFor="">
          Niveau d'expérience <span>*</span>
        </label>
        <select name="" id="">
          <option value="stage">Débutant (0 - 2 ans)</option>
          <option value="cdd">Junior</option>
          <option value="cdi">Senior</option>
        </select>
        <label htmlFor="">Votre étbalissement</label>
        <input type="text" name="" id="" />
        <label htmlFor="">
          CV <span>*</span>
        </label>
        <div id="upload-field">
          <i className="fa-regular fa-file-lines"></i>
          <p style={{ fontWeight: 600 }}>Charger votre CV ici</p>
          <p>
            Exclusivement <span>PDF</span> de taille <span>Max 3.0 Mo</span>
          </p>
        </div>
        <button type="submit">Uploader mon CV</button>
      </form>
      <div id="confidentiality">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          mollitia ipsa, id quia provident modi nihil dolores, eius in sit
          deserunt.
        </p>
      </div>
    </section>
  );
}
