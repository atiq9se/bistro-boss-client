
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center">
            <p>{subHeading}</p>
            <h3 className="text-4xl bottom-1 mb-8">{heading}</h3>
        </div>
    );
};

export default SectionTitle;