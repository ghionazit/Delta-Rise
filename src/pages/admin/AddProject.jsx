import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ImagePlus,
  X,
} from "lucide-react";

function AddProject() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "",
    client: "",
    completionDate: "",
    description: "",
  });

  const [mainImage, setMainImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  // =========================
  // HANDLE INPUTS
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // =========================
  // COMPRESS IMAGE
  // =========================
  const compressImage = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const img = new Image();

        img.onload = () => {
          const canvas = document.createElement("canvas");

          const MAX_WIDTH = 1400;
          const MAX_HEIGHT = 1000;

          let width = img.width;
          let height = img.height;

          // Resize large images
          if (width > MAX_WIDTH) {
            height = (height * MAX_WIDTH) / width;
            width = MAX_WIDTH;
          }

          if (height > MAX_HEIGHT) {
            width = (width * MAX_HEIGHT) / height;
            height = MAX_HEIGHT;
          }

          canvas.width = width;
          canvas.height = height;

          const context = canvas.getContext("2d");

          context.drawImage(
            img,
            0,
            0,
            width,
            height
          );

          // Compress to JPEG
          const compressedImage = canvas.toDataURL(
            "image/jpeg",
            0.75
          );

          resolve(compressedImage);
        };

        img.onerror = reject;
        img.src = event.target.result;
      };

      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  // =========================
  // MAIN IMAGE
  // =========================
  const handleMainImageChange = async (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      const compressedImage = await compressImage(file);

      setMainImage(compressedImage);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Unable to process this image.");
    }
  };

  // =========================
  // ADDITIONAL IMAGES
  // =========================
  const handleAdditionalImagesChange = async (e) => {
    const files = Array.from(e.target.files || []);

    if (files.length === 0) return;

    try {
      const compressedImages = await Promise.all(
        files.map(async (file) => {
          const compressedImage =
            await compressImage(file);

          return {
            id: `${Date.now()}-${Math.random()}`,
            image: compressedImage,
          };
        })
      );

      setAdditionalImages((previousImages) => [
        ...previousImages,
        ...compressedImages,
      ]);

      setError("");
    } catch (err) {
      console.error(err);
      setError("Unable to process one or more images.");
    }

    e.target.value = "";
  };

  // =========================
  // REMOVE IMAGE
  // =========================
  const removeAdditionalImage = (id) => {
    setAdditionalImages((previousImages) =>
      previousImages.filter(
        (image) => image.id !== id
      )
    );
  };

  // =========================
  // CREATE SLUG
  // =========================
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  // =========================
  // SAVE PROJECT
  // =========================
  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    // Validate title
    if (!formData.title.trim()) {
      setError("Please enter a project title.");
      return;
    }

    // Validate category
    if (!formData.category) {
      setError("Please select a project category.");
      return;
    }

    // Validate main image
    if (!mainImage) {
      setError("Please upload a main project image.");
      return;
    }

    setSaving(true);

    try {
      const existingProjects = JSON.parse(
        localStorage.getItem(
          "deltaRiseProjects"
        ) || "[]"
      );

      const newProject = {
        id: Date.now(),

        slug: createSlug(formData.title),

        title: formData.title.trim(),

        category: formData.category,

        location: formData.location.trim(),

        client: formData.client.trim(),

        completionDate:
          formData.completionDate,

        description:
          formData.description.trim(),

        mainImage: mainImage,

        images: additionalImages.map(
          (image) => image.image
        ),

        createdAt:
          new Date().toISOString(),
      };

      const updatedProjects = [
        ...existingProjects,
        newProject,
      ];

      localStorage.setItem(
        "deltaRiseProjects",
        JSON.stringify(updatedProjects)
      );

      // Success
      navigate("/admin/dashboard");

    } catch (err) {
      console.error(
        "LOCAL STORAGE ERROR:",
        err
      );

      setError(
        "Storage is full. Please remove some old projects or use smaller images."
      );

      setSaving(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F1E9] px-4 py-6 md:px-8 md:py-10">
      <div className="mx-auto max-w-[1000px]">

        {/* BACK */}
        <Link
          to="/admin/dashboard"
          className="mb-8 inline-flex items-center gap-2 text-xs font-medium text-[#77716A] transition hover:text-[#171717]"
        >
          <ArrowLeft
            size={16}
            strokeWidth={1.5}
          />

          Back to Dashboard
        </Link>

        {/* HEADER */}
        <div className="mb-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#89643D]">
            Portfolio Management
          </p>

          <h1 className="mt-3 font-serif text-4xl font-light tracking-[-0.04em] text-[#171717] md:text-5xl">
            Add New Project
          </h1>

          <p className="mt-3 text-sm text-[#77716A]">
            Add a new project to your Delta Rise
            portfolio.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="rounded-[28px] bg-white p-6 md:p-10"
        >

          {/* PROJECT INFO */}
          <div className="grid gap-6 md:grid-cols-2">

            {/* TITLE */}
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-[#6D6963]"
              >
                Project Title
              </label>

              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="Modern Residence"
                required
                className="w-full rounded-xl border border-[#DED5CA] bg-[#F5F1E9]/50 px-4 py-4 text-sm outline-none transition focus:border-[#2C0901] focus:bg-white"
              />
            </div>

            {/* CATEGORY */}
            <div>
              <label
                htmlFor="category"
                className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-[#6D6963]"
              >
                Category
              </label>

              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#DED5CA] bg-[#F5F1E9]/50 px-4 py-4 text-sm outline-none transition focus:border-[#2C0901] focus:bg-white"
              >
                <option value="">
                  Select category
                </option>

                <option value="Architecture">
                  Architecture
                </option>

                <option value="Interior Design">
                  Interior Design
                </option>

                <option value="Visualization">
                  Visualization
                </option>

                <option value="Planning">
                  Planning
                </option>
                <option value="Aluminum & Metal Works">
                  Aluminum & Metal Works
                </option>
              </select>
            </div>

            {/* LOCATION */}
            <div>
              <label
                htmlFor="location"
                className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-[#6D6963]"
              >
                Location
              </label>

              <input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                placeholder="Addis Ababa, Ethiopia"
                className="w-full rounded-xl border border-[#DED5CA] bg-[#F5F1E9]/50 px-4 py-4 text-sm outline-none transition focus:border-[#2C0901] focus:bg-white"
              />
            </div>

            {/* CLIENT */}
            <div>
              <label
                htmlFor="client"
                className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-[#6D6963]"
              >
                Client
              </label>

              <input
                id="client"
                name="client"
                type="text"
                value={formData.client}
                onChange={handleChange}
                placeholder="Client name"
                className="w-full rounded-xl border border-[#DED5CA] bg-[#F5F1E9]/50 px-4 py-4 text-sm outline-none transition focus:border-[#2C0901] focus:bg-white"
              />
            </div>

            {/* DATE */}
            <div>
              <label
                htmlFor="completionDate"
                className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-[#6D6963]"
              >
                Completion Date
              </label>

              <input
                id="completionDate"
                name="completionDate"
                type="date"
                value={formData.completionDate}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#DED5CA] bg-[#F5F1E9]/50 px-4 py-4 text-sm outline-none transition focus:border-[#2C0901] focus:bg-white"
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-8">
            <label
              htmlFor="description"
              className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-[#6D6963]"
            >
              Project Description
            </label>

            <textarea
              id="description"
              name="description"
              rows="6"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us about this project..."
              className="w-full resize-none rounded-xl border border-[#DED5CA] bg-[#F5F1E9]/50 px-4 py-4 text-sm leading-6 outline-none transition focus:border-[#2C0901] focus:bg-white"
            />
          </div>

          {/* MAIN IMAGE */}
          <div className="mt-10">

            <div className="mb-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#6D6963]">
                Main Project Image
              </p>

              <p className="mt-1 text-xs text-[#9D968E]">
                This image will be used as the main project cover.
              </p>
            </div>

            <label className="block cursor-pointer">

              <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-[20px] border-2 border-dashed border-[#D8CFC3] bg-[#F5F1E9]/50 transition hover:border-[#2C0901]">

                {mainImage ? (
                  <img
                    src={mainImage}
                    alt="Main project preview"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center text-center">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#2C0901] shadow-sm">
                      <ImagePlus
                        size={24}
                        strokeWidth={1.4}
                      />
                    </div>

                    <p className="mt-4 text-sm font-medium text-[#171717]">
                      Upload main project image
                    </p>

                    <p className="mt-1 text-xs text-[#9D968E]">
                      Select one main image
                    </p>

                  </div>
                )}

              </div>

              <input
                type="file"
                accept="image/*"
                onChange={handleMainImageChange}
                className="hidden"
              />

            </label>
          </div>

          {/* ADDITIONAL IMAGES */}
          <div className="mt-10">

            <div className="mb-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#6D6963]">
                Additional Project Images
              </p>

              <p className="mt-1 text-xs text-[#9D968E]">
                Add multiple images for the project gallery.
              </p>
            </div>

            {additionalImages.length > 0 && (
              <div className="mb-5 grid grid-cols-2 gap-4 md:grid-cols-3">

                {additionalImages.map((image) => (
                  <div
                    key={image.id}
                    className="group relative aspect-square overflow-hidden rounded-[16px]"
                  >

                    <img
                      src={image.image}
                      alt="Project gallery"
                      className="h-full w-full object-cover"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        removeAdditionalImage(image.id)
                      }
                      className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#171717] shadow-md transition hover:bg-[#8B653E] hover:text-white"
                    >
                      <X size={16} />
                    </button>

                  </div>
                ))}

              </div>
            )}

            <label className="flex min-h-[180px] cursor-pointer items-center justify-center rounded-[20px] border-2 border-dashed border-[#D8CFC3] bg-[#F5F1E9]/50 transition hover:border-[#2C0901]">

              <div className="flex flex-col items-center text-center">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#2C0901] shadow-sm">
                  <ImagePlus
                    size={24}
                    strokeWidth={1.4}
                  />
                </div>

                <p className="mt-4 text-sm font-medium text-[#171717]">
                  Add project images
                </p>

                <p className="mt-1 text-xs text-[#9D968E]">
                  Images will be automatically compressed
                </p>

              </div>

              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleAdditionalImagesChange}
                className="hidden"
              />

            </label>
          </div>

          {/* ERROR */}
          {error && (
            <div className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* ACTIONS */}
          <div className="mt-10 flex flex-wrap justify-end gap-3">

            <Link
              to="/admin/dashboard"
              className="rounded-xl border border-[#D8CFC3] px-6 py-3.5 text-sm font-medium text-[#171717] transition hover:bg-[#F5F1E9]"
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={saving}
              className="group inline-flex items-center gap-3 rounded-xl bg-[#2C0901] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#3D1006] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save Project"}

              {!saving && (
                <ArrowRight
                  size={17}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              )}
            </button>

          </div>

        </form>
      </div>
    </main>
  );
}

export default AddProject;