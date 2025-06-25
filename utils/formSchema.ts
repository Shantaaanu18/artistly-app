import * as yup from "yup"

export const artistFormSchema = yup.object({
  name: yup.string().required(),
  category: yup.string().required(),
  fee: yup.string().required(),
  location: yup.string().required(),
  bio: yup.string().required(),
  photo: yup.string().url().required(),
})
