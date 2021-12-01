import React, { createContext,useEffect,useState ,useReducer} from 'react'
export const ImageContext = createContext();


const ImageContextProvider = props => {
   
    const [images, setimages] = useState([])
    
    const [single, setsingle] = useState({
        image: '',
        open:false
    })
     const Reducer = (state, action) => {
    
        switch (action.type) {
            case "DETAIL_IMG":
                setsingle({
                    image:action.id,
                    open:true
                })
                console.log('sdsd')
                break;
            case "DOWNLOAD":
                break;
            case "FAV":
                console.log('sdsd')
                break;
            default:
                return 'images';
        }
    };
    const [state, dispatch] = useReducer(Reducer, images)

    async function getImages() {
        let response = await fetch(`${process.env.REACT_APP_API_URL}photos?per_page=20&client_id=${process.env.REACT_APP_API_KEY}`);
        let data = await response.json();
        return data
    }
    useEffect(async () => {
        const  imagesArray = await getImages();
        await setimages(imagesArray)
    },[])
    return (    
        <ImageContext.Provider value={{
                images,
                single,
                dispatch
            }}>
            {props.children}
        </ImageContext.Provider>
    )
}

export default ImageContextProvider
