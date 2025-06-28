import "./section-title.css";

export type SectionTitleColor = "blue" | "orange";

export interface SectionTitleProps {
  color: SectionTitleColor;
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  color,
  title,
  subtitle,
}) => (
  <div className={`section-title-wrapper ${color}`}>
    {/* título / pílula */}
    <h2 className="label-pill">{title}</h2>

    {/* texto auxiliar */}
    <p className="subtitle">{subtitle}</p>
  </div>
);

export default SectionTitle;