import { Fragment } from "react";
import "./styles/Upload.scss";
import { useDropzone } from "react-dropzone";

// TYPE
type IsUploadedProps = { name: string; weight: number };
// DIFFERENT STATES OF THE UPLOAD FORM
export function NofileUpload(): JSX.Element {
  return (
    <Fragment>
      <i className="fa-regular fa-file-lines"></i>
      <p style={{ fontWeight: 600 }}>Charger votre CV ici</p>
      <p>
        Exclusivement <span>PDF</span> de taille <span>Max 3.0 Mo</span>
      </p>
    </Fragment>
  );
}

export function IsUploading(): JSX.Element {
  return (
    <Fragment>
      <i className="fa-solid fa-file-circle-plus fa-beat"></i>
      <p style={{ fontWeight: 600 }}>Ajouter le fichier PDF</p>
      <p>
        <span>Assuerez vous que ça soit le bon</span>
      </p>
    </Fragment>
  );
}

export function IsUploaded({ name, weight }: IsUploadedProps): JSX.Element {
  return (
    <Fragment>
      <i className="fa-solid fa-file-pdf"></i>
      <p style={{ fontWeight: 600 }}>{name}</p>
      <p>
        <span>{(weight / 1048576).toFixed(2)} Mo</span>
      </p>
    </Fragment>
  );
}

export default function Upload(): JSX.Element {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      maxFiles: 1,
      maxSize: 3145728,
      accept: {
        "application/pdf": [".pdf"],
      },
    });

  // RENDER  UPLOAD FORM
  return (
    <section id="upload">
      {/* FORM TO UPLOAD THE RESUME */}
      <form>
        {/* POST TITLE */}
        <label htmlFor="">
          Titre <span>*</span>
        </label>
        <input type="text" id="" name="" />
        {/* PLACEMENT TYPE */}
        <label htmlFor="">
          Type d'emploi <span>*</span>
        </label>
        <select name="" id="">
          <option value="stage">Stage</option>
          <option value="cdd">CDD</option>
          <option value="cdi">CDI</option>
        </select>
        {/* EXPERIENCE YEARS */}
        <label htmlFor="">
          Niveau d'expérience <span>*</span>
        </label>
        <select name="" id="">
          <option value="stage">Débutant (0 - 2 ans)</option>
          <option value="cdd">Junior</option>
          <option value="cdi">Senior</option>
        </select>
        {/* SCHOOL / WORK */}
        <label htmlFor="">Votre étbalissement</label>
        <input type="text" name="" id="" />
        {/* RESUME FILE */}
        <label htmlFor="">
          CV <span>*</span>
        </label>
        <div
          id="upload-field"
          {...getRootProps()}
          style={
            isDragActive
              ? { borderColor: "#07beb8", backgroundColor: "#07beb84c" }
              : undefined
          }>
          <input {...getInputProps()} />
          {isDragActive && <IsUploading />}
          {acceptedFiles[0] && !isDragActive && (
            <IsUploaded
              name={acceptedFiles[0].name}
              weight={acceptedFiles[0].size}
            />
          )}
          {!acceptedFiles[0] && !isDragActive && <NofileUpload />}
        </div>
        {/* SUBMIT BUTTON */}
        <button type="submit">Uploader mon CV</button>
      </form>
      {/* CONDIFIDENTIALITY RULES */}
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
