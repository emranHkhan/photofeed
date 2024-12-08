import PhotoDetails from "@/components/PhotoDetails";

const PhotoDetailsComponent = ({ params }) => {
    const lang = params.lang;
    const id = params.id;
    return <PhotoDetails id={id} lang={lang} />;
};

export default PhotoDetailsComponent;