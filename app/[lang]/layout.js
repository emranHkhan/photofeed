import React from "react";

const PhotoLayout = ({
    children,
    modal,
}) => {
    return (
        <>
            {modal}
            {children}
        </>
    );
};

export default PhotoLayout;