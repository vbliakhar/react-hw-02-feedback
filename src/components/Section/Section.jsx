import './Section.scss';
const Section = ({ title = { test }, children }) => {
  return (
    <div className="Section">
      <h2>{title}</h2>
      {children}
    </div>
  );
};
export default Section;
