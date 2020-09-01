const importAll = (r) => {
      return r.keys().map(r);
}
//const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

const getImages = (path) => {
    
    const images = importAll(require.context(path , false, /\.(png|jpe?g|svg)$/));
    
    return images
}

export default getImages
