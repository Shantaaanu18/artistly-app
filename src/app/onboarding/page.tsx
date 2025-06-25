"use client"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { artistFormSchema } from "../../../utils/formSchema"

interface ArtistFormData {
  name: string
  category: string
  fee: string
  location: string
  bio: string
  photo: string
}

export default function OnboardingForm() {
  const { register, handleSubmit, watch, formState } = useForm<ArtistFormData>({
    resolver: yupResolver(artistFormSchema),
  })

  const photoUrl = watch("photo")

  const onSubmit = (data: ArtistFormData) => {
    console.log("Form Submitted:", data)
  }

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-6xl sm:text-7xl font-extrabold tracking-wide bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-lg select-none">
        artistly<span className="font-black">.com</span>
      </h1>
      <h2 className="text-2xl mb-4">Artist Onboarding</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("name")} placeholder="Name" className="w-full border p-2" />
        <input {...register("category")} placeholder="Category" className="w-full border p-2" />
        <input {...register("fee")} placeholder="Fee" className="w-full border p-2" />
        <input {...register("location")} placeholder="Location" className="w-full border p-2" />
        <textarea {...register("bio")} placeholder="Bio" className="w-full border p-2" />
        <input {...register("photo")} placeholder="Photo URL" className="w-full border p-2" />
        {photoUrl && (
          <img
            src={photoUrl}
            alt="Artist Preview"
            className="w-32 h-32 object-cover rounded-full mx-auto border-2 border-gray-300"
          />
        )}
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </main>
  )
}
