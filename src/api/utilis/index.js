import axios from "axios"

export const uploadImage = async image => {
   const formData = new FormData()
   formData.append('image', image)
   const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGEBB_API_KEY}`,
     formData
    )
    return data.data.display_url;
}