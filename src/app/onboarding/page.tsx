"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { artistFormSchema } from "../../../utils/formSchema";
import Image from "next/image";

interface ArtistFormData {
  name: string;
  category: string;
  fee: string;
  location: string;
  bio: string;
  photo: string;
}

export default function OnboardingForm() {
  const { register, handleSubmit, watch } = useForm<ArtistFormData>({
    resolver: yupResolver(artistFormSchema),
  });

  const photoUrl = watch("photo");

  const onSubmit = (data: ArtistFormData) => {
    console.log("Form Submitted:", data);
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-6xl sm:text-7xl font-extrabold tracking-wide bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-lg select-none">
        artistly<span className="font-black">.com</span>
      </h1>

      <h2 className="text-2xl mb-4 mt-6">Artist Onboarding</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("name")} placeholder="Name" className="w-full border p-2 rounded" />
        <input {...register("category")} placeholder="Category" className="w-full border p-2 rounded" />
        <input {...register("fee")} placeholder="Fee" className="w-full border p-2 rounded" />
        <input {...register("location")} placeholder="Location" className="w-full border p-2 rounded" />
        <textarea {...register("bio")} placeholder="Bio" className="w-full border p-2 rounded" />
        <input {...register("photo")} placeholder="Photo URL" className="w-full border p-2 rounded" />

        {photoUrl && (
          <div className="flex justify-center">
            <Image
              src={photoUrl}
              alt="Artist Preview"
              width={128}
              height={128}
              className="rounded-full border-2 border-gray-300 object-cover"
              onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
            />
          </div>
        )}

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </main>
  );
}
