import storage from '@react-native-firebase/storage'

export default ({ imageFile, form }) =>
  onSuccess =>
  async onError => {
    const fileName = imageFile.path.split('.').slice(-2)[0].split('/').slice(-1)

    try {
      const path = `contact-pictures/user/69/` + fileName //TODO: add path dep on signed in user

      const ref = storage().ref(path)

      await ref.putFile(imageFile.path)

      const url = await ref.getDownloadURL()

      onSuccess(url)
    } catch (error) {
      onError(error)
    }
    // const task = ref.putFile(file.path)
    // task
    //   .then(async () => {
    //     const url = await ref.getDownloadURL()
    //     onSuccess(url)
    //   })
    //   .catch(err => {
    //     onError(error)
    //   })
  }
