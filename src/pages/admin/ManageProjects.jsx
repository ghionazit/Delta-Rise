import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Image as ImageIcon,
  Save,
  Trash2,
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

  const [loading, setLoading] = useState(true);

  // =========================
  // LOAD PROJECT
  // =========================
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

    setLoading(false);
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

    if (!files.length) return;

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImages((previousImages) => [
          ...previousImages,
          reader.result,
        ]);
      };

      reader.readAsDataURL(file);
    });
  };

  // =========================
  // DELETE ADDITIONAL IMAGE
  // =========================
  const removeImage = (imageIndex) => {
    setImages((previousImages) =>
      previousImages.filter(
        (_, index) => index !== imageIndex
      )
    );
  };

  // =========================
  // SAVE PROJECT
  // =========================
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a project title.");
      return;
    }

    const savedProjects = JSON.parse(
      localStorage.getItem("deltaRiseProjects") || "[]"
    );

    const updatedProjects = savedProjects.map(
      (savedProject) => {
        if (
          String(savedProject.id) === String(id)
        ) {
          return {
            ...savedProject,
            title: title.trim(),
            category: category.trim(),
            location: location.trim(),
            description: description.trim(),
            mainImage,
            images,
          };
        }

        return savedProject;
      }
    );

    localStorage.setItem(
      "deltaRiseProjects",
      JSON.stringify(updatedProjects)
    );

    navigate("/admin/dashboard");
  };

  if (loading) {
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
      <div className="mx-auto max-w-[1100px]">

        {/* =========================
            HEADER
        ========================= */}
        <Link
          to="/admin/dashboard"
          className="inline-flex items-center gap-2 text-xs text-[#77716A] transition hover:text-[#171717]"
        >
          <ArrowLeft
            size={16}
            strokeWidth={1.5}
          />

          Back to Dashboard
        </Link>


        <div className="mt-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#89643D]">
            Manage Project
          </p>

          <h1 className="mt-3 font-serif text-4xl font-light tracking-[-0.04em] text-[#171717] md:text-5xl">
            Edit Project
          </h1>

          <p className="mt-3 text-sm text-[#77716A]">
            Update your project information and images.
          </p>
        </div>


        {/* =========================
            FORM
        ========================= */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-8"
        >

          {/* =========================
              BASIC INFORMATION
          ========================= */}
          <section className="rounded-[24px] bg-white p-6 md:p-8">

            <h2 className="font-serif text-2xl font-light text-[#171717]">
              Project Information
            </h2>


            <div className="mt-7 grid gap-6 md:grid-cols-2">

              {/* Project Title */}
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
                  onChange={(e) =>
                    setTitle(e.target.value)
                  }
                  className="w-full rounded-xl border border-[#DED5CA] bg-[#F5F1E9]/50 px-4 py-4 text-sm outline-none transition focus:border-[#8B653E] focus:bg-white"
                  placeholder="Project name"
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
                  onChange={(e) =>
                    setCategory(e.target.value)
                  }
                  className="w-full rounded-xl border border-[#DED5CA] bg-[#F5F1E9]/50 px-4 py-4 text-sm outline-none transition focus:border-[#8B653E] focus:bg-white"
                  placeholder="Architecture"
                />
              </div>


              {/* Location */}
              <div>
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
                  onChange={(e) =>
                    setLocation(e.target.value)
                  }
                  className="w-full rounded-xl border border-[#DED5CA] bg-[#F5F1E9]/50 px-4 py-4 text-sm outline-none transition focus:border-[#8B653E] focus:bg-white"
                  placeholder="Addis Ababa, Ethiopia"
                />
              </div>

            </div>


            {/* Description */}
            <div className="mt-6">

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
                className="w-full resize-none rounded-xl border border-[#DED5CA] bg-[#F5F1E9]/50 px-4 py-4 text-sm leading-6 outline-none transition focus:border-[#8B653E] focus:bg-white"
                placeholder="Tell us about this project..."
              />

            </div>

          </section>


          {/* =========================
              MAIN IMAGE
          ========================= */}
          <section className="rounded-[24px] bg-white p-6 md:p-8">

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#89643D]">
                Featured Image
              </p>

              <h2 className="mt-2 font-serif text-2xl font-light text-[#171717]">
                Main Project Image
              </h2>
            </div>


            <div className="mt-6">

              {mainImage ? (

                <div className="relative overflow-hidden rounded-[18px] bg-[#F5F1E9]">

                  <img
                    src={mainImage}
                    alt="Project main preview"
                    className="aspect-[16/9] w-full object-cover"
                  />

                  <label className="absolute bottom-4 left-4 cursor-pointer rounded-full bg-white px-5 py-3 text-xs font-medium text-[#171717] shadow-lg transition hover:bg-[#F5F1E9]">
                    Replace Image

                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleMainImageChange}
                      className="hidden"
                    />
                  </label>

                </div>

              ) : (

                <label className="flex aspect-[16/8] cursor-pointer flex-col items-center justify-center rounded-[18px] border border-dashed border-[#D8CFC3] bg-[#F5F1E9] text-center transition hover:border-[#8B653E]">

                  <ImageIcon
                    size={32}
                    strokeWidth={1.3}
                    className="text-[#89643D]"
                  />

                  <p className="mt-4 text-sm font-medium text-[#171717]">
                    Upload Main Image
                  </p>

                  <p className="mt-1 text-xs text-[#77716A]">
                    This will be the main project image.
                  </p>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleMainImageChange}
                    className="hidden"
                  />

                </label>

              )}

            </div>

          </section>


          {/* =========================
              ADDITIONAL IMAGES
          ========================= */}
          <section className="rounded-[24px] bg-white p-6 md:p-8">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#89643D]">
                  Gallery
                </p>

                <h2 className="mt-2 font-serif text-2xl font-light text-[#171717]">
                  Additional Images
                </h2>
              </div>


              <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#F5F1E9] px-5 py-3 text-xs font-medium text-[#171717] transition hover:bg-[#EAE4DB]">

                <ImageIcon
                  size={16}
                  strokeWidth={1.5}
                />

                Add Images

                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImagesChange}
                  className="hidden"
                />

              </label>

            </div>


            {images.length > 0 ? (

              <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-4">

                {images.map(
                  (image, index) => (

                    <div
                      key={`${image}-${index}`}
                      className="group relative aspect-square overflow-hidden rounded-xl bg-[#F5F1E9]"
                    >

                      <img
                        src={image}
                        alt={`Project gallery ${index + 1}`}
                        className="h-full w-full object-cover"
                      />


                      <button
                        type="button"
                        onClick={() =>
                          removeImage(index)
                        }
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-red-500 opacity-0 shadow-md transition group-hover:opacity-100 hover:bg-red-50"
                        aria-label="Remove image"
                      >
                        <Trash2
                          size={16}
                          strokeWidth={1.5}
                        />
                      </button>

                    </div>

                  )
                )}

              </div>

            ) : (

              <div className="mt-6 rounded-xl border border-dashed border-[#D8CFC3] p-8 text-center">

                <ImageIcon
                  size={26}
                  strokeWidth={1.3}
                  className="mx-auto text-[#9D968E]"
                />

                <p className="mt-3 text-sm text-[#77716A]">
                  No additional images yet.
                </p>

              </div>

            )}

          </section>


          {/* =========================
              ACTIONS
          ========================= */}
          <div className="flex flex-col-reverse gap-3 pb-10 sm:flex-row sm:items-center sm:justify-end">

            <Link
              to="/admin/dashboard"
              className="rounded-xl border border-[#DED5CA] px-6 py-4 text-center text-sm font-medium text-[#171717] transition hover:bg-white"
            >
              Cancel
            </Link>


            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#8B653E] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#6F4E2F] hover:shadow-[0_12px_30px_rgba(139,101,62,0.2)]"
            >
              <Save
                size={17}
                strokeWidth={1.5}
              />

              Save Changes

              <ArrowRight
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