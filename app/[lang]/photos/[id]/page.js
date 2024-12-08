import PhotoDetailsComponent from "@/components/PhotoDetails";

const PhotoDetails = ({ params }) => {
    console.log(params)
    const lang = params.lang;
    const id = params.id;

    return <PhotoDetailsComponent id={id} lang={lang} />;
};

export default PhotoDetails;