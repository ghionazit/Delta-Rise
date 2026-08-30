import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Image as ImageIcon,
  Save,
  X,
} from "lucide-react";

function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const savedProjects = JSON.parse(
      localStorage.getItem("deltaRiseProjects") || "[]"
    );

    const selectedProject = savedProjects.find(
      (project) => String(project.id) === String(id)
    );

    if (!selectedProject) {
      navigate("/admin/dashboard");
      return;
    }

    setProject(selectedProject);
    setTitle(selectedProject.title || "");
    setCategory(selectedProject.category || "");
    setLocation(selectedProject.location || "");
    setDescription(selectedProject.description || "");
    setMainImage(selectedProject.mainImage || "");
    setImages(selectedProject.images || []);
  }, [id, navigate]);

  // =========================
  // MAIN IMAGE
  // =========================
  const handleMainImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setMainImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  // =========================
  // ADDITIONAL IMAGES
  // =========================
  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files || []);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImages((currentImages) => [
          ...currentImages,
          reader.result,
        ]);
      };

      reader.readAsDataURL(file);
    });
  };

  // =========================
  // REMOVE IMAGE
  // =========================
  const removeImage = (indexToRemove) => {
    setImages((currentImages) =>
      currentImages.filter(
        (_, index) => index !== indexToRemove
      )
    );
  };

  // =========================
  // SAVE PROJECT
  // =========================
  const handleSubmit = (e) => {
    e.preventDefault();

    const savedProjects = JSON.parse(
      localStorage.getItem("deltaRiseProjects") || "[]"
    );

    const updatedProject = {
      ...project,
      title,
      category,
      location,
      description,
      mainImage,
      images,
    };

    const updatedProjects = savedProjects.map((item) =>
      String(item.id) === String(id)
        ? updatedProject
        : item
    );

    localStorage.setItem(
      "deltaRiseProjects",
      JSON.stringify(updatedProjects)
    );

    navigate("/admin/dashboard");
  };

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F5F1E9]">
        <p className="text-sm text-[#77716A]">
          Loading project...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F1E9] px-4 py-6 md:px-8 md:py-10">
      <div className="mx-auto max-w-[1000px]">

        {/* BACK */}
        <Link
          to="/admin/dashboard"
          className="inline-flex items-center gap-2 text-xs text-[#77716A] transition hover:text-[#171717]"
        >
          <ArrowLeft size={16} />

          Back to Dashboard
        </Link>


        {/* HEADER */}
        <div className="mt-8">

          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#89643D]">
            Delta Rise Engineering
          </p>

          <h1 className="mt-3 font-serif text-4xl font-light tracking-[-0.04em] text-[#171717] md:text-5xl">
            Edit Project
          </h1>

          <p className="mt-3 text-sm text-[#77716A]">
            Update your project information and images.
          </p>

        </div>


        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-8"
        >

          {/* PROJECT INFORMATION */}
          <section className="rounded-[24px] bg-white p-6 md:p-8">

            <h2 className="font-serif text-2xl font-light">
              Project Information
            </h2>


            <div className="mt-7 grid gap-5 md:grid-cols-2">

              {/* Title */}
              <div>

                <label
                  htmlFor="title"
                  className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-[#6D6963]"
                >
                  Project Title
                </label>

                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-xl border border-[#DED5CA] bg-[#F5F1E9]/50 px-4 py-3.5 text-sm outline-none transition focus:border-[#8B653E] focus:bg-white"
                  required
                />

              </div>


              {/* Category */}
              <div>

                <label
                  htmlFor="category"
                  className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-[#6D6963]"
                >
                  Category
                </label>

                <input
                  id="category"
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Architecture"
                  className="w-full rounded-xl border border-[#DED5CA] bg-[#F5F1E9]/50 px-4 py-3.5 text-sm outline-none transition focus:border-[#8B653E] focus:bg-white"
                />

              </div>

            </div>


            {/* Location */}
            <div className="mt-5">

              <label
                htmlFor="location"
                className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-[#6D6963]"
              >
                Location
              </label>

              <input
                id="location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Addis Ababa, Ethiopia"
                className="w-full rounded-xl border border-[#DED5CA] bg-[#F5F1E9]/50 px-4 py-3.5 text-sm outline-none transition focus:border-[#8B653E] focus:bg-white"
              />

            </div>


            {/* Description */}
            <div className="mt-5">

              <label
                htmlFor="description"
                className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-[#6D6963]"
              >
                Description
              </label>

              <textarea
                id="description"
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                rows="6"
                placeholder="Write about this project..."
                className="w-full resize-none rounded-xl border border-[#DED5CA] bg-[#F5F1E9]/50 px-4 py-3.5 text-sm leading-6 outline-none transition focus:border-[#8B653E] focus:bg-white"
              />

            </div>

          </section>


          {/* MAIN IMAGE */}
          <section className="rounded-[24px] bg-white p-6 md:p-8">

            <div className="flex items-center justify-between gap-4">

              <div>

                <h2 className="font-serif text-2xl font-light">
                  Main Image
                </h2>

                <p className="mt-1 text-xs text-[#77716A]">
                  This image will appear as the main project image.
                </p>

              </div>

              <ImageIcon
                size={20}
                className="text-[#89643D]"
              />

            </div>


            <div className="mt-6">

              {mainImage && (

                <div className="mb-5 aspect-[16/9] overflow-hidden rounded-xl bg-[#EAE4DB]">

                  <img
                    src={mainImage}
                    alt={title}
                    className="h-full w-full object-cover"
                  />

                </div>

              )}


              <input
                type="file"
                accept="image/*"
                onChange={handleMainImageChange}
                className="block w-full text-sm text-[#77716A] file:mr-4 file:rounded-lg file:border-0 file:bg-[#F5F1E9] file:px-4 file:py-3 file:text-xs file:font-medium file:text-[#171717] hover:file:bg-[#EAE4DB]"
              />

            </div>

          </section>


          {/* ADDITIONAL IMAGES */}
          <section className="rounded-[24px] bg-white p-6 md:p-8">

            <h2 className="font-serif text-2xl font-light">
              Additional Images
            </h2>

            <p className="mt-1 text-xs text-[#77716A]">
              Add or remove project gallery images.
            </p>


            {images.length > 0 && (

              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">

                {images.map((image, index) => (

                  <div
                    key={`${image}-${index}`}
                    className="group relative aspect-square overflow-hidden rounded-xl bg-[#EAE4DB]"
                  >

                    <img
                      src={image}
                      alt={`Project ${index + 1}`}
                      className="h-full w-full object-cover"
                    />


                    <button
                      type="button"
                      onClick={() =>
                        removeImage(index)
                      }
                      className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#171717] opacity-0 shadow transition group-hover:opacity-100"
                      aria-label="Remove image"
                    >
                      <X size={15} />
                    </button>

                  </div>

                ))}

              </div>

            )}


            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImagesChange}
              className="mt-6 block w-full text-sm text-[#77716A] file:mr-4 file:rounded-lg file:border-0 file:bg-[#F5F1E9] file:px-4 file:py-3 file:text-xs file:font-medium file:text-[#171717] hover:file:bg-[#EAE4DB]"
            />

          </section>


          {/* SAVE BUTTON */}
          <div className="flex justify-end gap-4">

            <Link
              to="/admin/dashboard"
              className="rounded-xl border border-[#D8CFC3] px-6 py-3.5 text-sm font-medium text-[#171717] transition hover:bg-white"
            >
              Cancel
            </Link>


            <button
              type="submit"
              className="group inline-flex items-center gap-3 rounded-xl bg-[#2C0901] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#2C0901] hover:shadow-[0_12px_30px_rgba(139,101,62,0.2)]"
            >
              Save Changes

              <Save
                size={17}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </button>

          </div>

        </form>

      </div>
    </main>
  );
}

export default EditProject;